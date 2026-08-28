// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{fd}from"./chunk-kbe57qef.js";import{qYt}from"./chunk-cg4x1f19.js";import{Ru}from"./chunk-g9byphym.js";import{zr}from"./chunk-4s8az3tm.js";import{rme}from"./chunk-gzm5sjtv.js";import{Dw}from"./chunk-1gqxn9e9.js";function mCt(){return[{type:"text",text:qYt}]}function qmr(){zr({name:Dw,description:`Reference for writing a ${fd} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>Ru()&&!rme(),async getPromptForCommand(){return mCt()}})}
export{mCt,qmr};
