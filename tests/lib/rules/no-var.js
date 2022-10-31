/**
 * @fileoverview 发现todo注释，检查是否有需要完善的功能
 * @author zhujm
 */
 'use strict';

 //------------------------------------------------------------------------------
 // Requirements
 //------------------------------------------------------------------------------
 
 const rule = require('../../../lib/rules/no-var'),
   RuleTester = require('eslint').RuleTester;
 
 
 //------------------------------------------------------------------------------
 // Tests
 //------------------------------------------------------------------------------
 
 const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 'latest'
    }
 });
 ruleTester.run('no-var', rule, {
   valid: [
    {
        code: 'let a = 1'
    }
   ],
 
   invalid: [
     {
       code: 'var a = 1',
       errors: [{ message: '不能使用 var，请使用const或let' }],
       output: 'let a = 1'
     },
   ],
 });
 