/**
 * @fileoverview 发现todo注释，检查是否有需要完善的功能
 * @author zhujm
 */
"use strict";
module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "发现todo注释，检查是否有需要完善的功能",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    // 取得AST
    const sourceCode = context.getSourceCode();
    // 获取所有的注释节点
    let comments = sourceCode.getAllComments();
    // 过滤出包含todo关键字的注释节点
    comments = comments.filter(comment => {
        const {value, type} = comment
        let newValue = value.toLowerCase().trim()
        if(type === 'Block'){
            newValue = newValue.replace('/\n/g','')
        }
        if(newValue.startsWith('todo')){
            return true
        }
        return false
    })
    return {
        Program(node){
            comments.forEach(comment=>{
              const {value, loc} = comment
              context.report({
                node: comment,
                message: `发现todo注释:"${value}"，检查是否有需要完善的功能`,
              });
            })
          }
        
    };
  },
};
