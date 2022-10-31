/**
 * @fileoverview 禁止直接使用Date.parse格式化字符串
 * @author zhujm
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-date-parse"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-date-parse", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "Date.parse('2022/04/11 10:10:10')",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
