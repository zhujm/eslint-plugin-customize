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
        code: '// 非 todo 开头 '
    },
  ],

  invalid: [
    {
        code: '// todo',
        errors: [{ message: '发现todo注释:" todo"，检查是否有需要完善的功能'}],
    },{
        code: '// ToDo',
        errors: [{ message: `发现todo注释:" ToDo"，检查是否有需要完善的功能`}],
    }
  ],
});
