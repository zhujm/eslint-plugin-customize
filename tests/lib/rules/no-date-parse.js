/**
 * @fileoverview 禁止直接使用Date.parse格式化字符串
 * @author zhujm
 */
'use strict';
const rule = require('../../../lib/rules/no-date-parse'),
  RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();
ruleTester.run('no-date-parse', rule, {
  valid: [
    {
        code: 'Date.now()'
    }
  ],

  invalid: [
    {
      code: `Date.parse('2022/04/11 10:10:10')`,
      errors: [{ message: '禁止直接使用Date.parse格式化字符串' }],
    },
  ],
});
