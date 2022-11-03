/**
 * @fileoverview 自定义规则集
 * @author zhujm
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
    rules: requireIndex(__dirname + "/rules"),
    configs: {
        recommended: {
            plugins: ['customize'],
            rules: {
                'customize/no-var': ['error'],
                'customize/no-date-parse': ['error'],
                'customize/no-todo-comment': ['error'],
                'customize/no-new-date-single': ['error']
            }
        }
    }
}



