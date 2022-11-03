/**
 * @fileoverview 禁止直接使用Date.parse格式化字符串
 * @author zhujm
 */
"use strict"

module.exports = {
  meta: {
    type: 'suggestion', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "禁止直接使用Date.parse格式化字符串",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
        MemberExpression(node) {
            if(node.object && node.object.name === 'Date' 
                && node.property && node.property.name === 'parse'){
                context.report({
                node,
                message: '禁止直接使用Date.parse格式化字符串'
              })
            }
        }
    }
  }
}
