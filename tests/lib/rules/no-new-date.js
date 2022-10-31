/**
 * @fileoverview 禁止直接使用new Date格式化字符串
 * @author zhujm
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-new-date"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-new-date", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "new Date('2022/04/11 10:10:10')",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
