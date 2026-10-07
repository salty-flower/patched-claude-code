// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{au}from"./chunk-00wh8twy.js";import{sRr}from"./chunk-68zp32rw.js";import{Om}from"./chunk-ve4tk804.js";import{Is}from"./chunk-hc9g4tqd.js";import{rO}from"./chunk-a0qy54rp.js";function j1n(){return[{type:"text",text:sRr()}]}function _ws(){Is({name:rO,description:`Reference for writing a ${au} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>Om(),async getPromptForCommand(){return j1n()}})}
export{j1n,_ws};
