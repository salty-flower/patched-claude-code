// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{nu}from"./chunk-abx3cqxj.js";import{ctn}from"./chunk-y9bgsjvb.js";import{Qu}from"./chunk-p68befxb.js";import{Zr}from"./chunk-0hr1ec8y.js";import{Jhe}from"./chunk-yw7yjsp7.js";import{IE}from"./chunk-vkqz5eqn.js";function RIt(){return[{type:"text",text:ctn}]}function bwr(){Zr({name:IE,description:`Reference for writing a ${nu} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>Qu()&&!Jhe(),async getPromptForCommand(){return RIt()}})}
export{RIt,bwr};
