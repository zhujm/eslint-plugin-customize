/**
 * @fileoverview 禁止直接使用new Date格式化字符串
 * @author zhujm
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-new-date-string'),
  RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('no-new-date-string', rule, {
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
      errors: [{ message: '禁止直接使用new Date格式化字符串'}],
    },
  ],
});
