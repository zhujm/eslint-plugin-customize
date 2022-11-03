/**
 * @fileoverview 禁止使用 new Date 时，传入单个参数
 * @author zhujm
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-new-date-single'),
  RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('no-new-date-single', rule, {
  valid: [
    {
        code: 'new String()'
    },
    {
        code: 'new Date()'
    }
  ],

  invalid: [
    {
      code: `new Date('2022/04/11 10:10:10')`,
      errors: [{ message: '禁止使用 new Date 时，传入单个参数'}],
    },
  ],
});
