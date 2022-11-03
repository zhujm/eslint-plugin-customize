/**
 * @fileoverview 禁止使用var声明变量
 * @author zhujm
 */
"use strict";

module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "禁止使用var声明变量",
      recommended: false,
    //   url: null, // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages:{
        unexpected: '不能使用 {{type}}，请使用const或let'
    }
  },

  create(context) {
    const sourceCode = context.getSourceCode();

    return {
        VariableDeclaration(node) {
            if(node.kind == 'var'){
                context.report({
                    node,
                    data: {
                        type: 'var'
                    },
                    messageId: 'unexpected',
                    fix(fixer){
                        const varToken = sourceCode.getFirstToken(node, {filter: t => t.value === 'var'})
                        return fixer.replaceText(varToken, 'let')
                    }
                })
            }
        }
    };
  },
};
