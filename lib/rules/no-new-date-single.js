/**
 * @fileoverview 禁止直接使用 new Date 传入单个参数
 * @author zhujm
 */
"use strict";

module.exports = {
  meta: {
    type: 'suggestion', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "禁止使用 new Date 时，传入单个参数",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
        NewExpression(node){
            if(node.callee.name === 'Date' && node.arguments.length === 1){
                context.report({
                    node,
                    message: '禁止使用 new Date 时，传入单个参数'
                })
            }
        }
      }
  },
}
