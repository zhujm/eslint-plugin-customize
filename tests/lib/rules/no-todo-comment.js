/**
 * @fileoverview 发现todo注释，检查是否有需要完善的功能
 * @author zhujm
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-todo-comment'),
  RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('no-todo-comment', rule, {
  valid: [
    {
        code: '// 非开头 todo'
    },
  ],

  invalid: [
    {
        code: '// todo',
        errors: [{ message: '发现todo注释，请确认是否有未完成的功能'}],
    },{
        code: '// ToDo',
        errors: [{ message: '发现todo注释，请确认是否有未完成的功能'}],
    }
  ],
});
