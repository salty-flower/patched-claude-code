// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{lu}from"./chunk-vw4cen1n.js";import{vRr}from"./chunk-dgk79t7c.js";import{Om}from"./chunk-z3f7qz5q.js";import{Is}from"./chunk-64pedf2t.js";import{iO}from"./chunk-nzydyy8q.js";function ojn(){return[{type:"text",text:vRr()}]}function tEs(){Is({name:iO,description:`Reference for writing a ${lu} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>Om(),async getPromptForCommand(){return ojn()}})}
export{ojn,tEs};
