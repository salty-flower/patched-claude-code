// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{ou}from"./chunk-v412cjtd.js";import{tun}from"./chunk-dyn8fddh.js";import{jc}from"./chunk-mmyses0x.js";import{po}from"./chunk-ab45j50j.js";import{yC}from"./chunk-8hqq8f75.js";function ZLt(){return[{type:"text",text:tun()}]}function nwr(){po({name:yC,description:`Reference for writing a ${ou} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>jc(),async getPromptForCommand(){return ZLt()}})}
export{ZLt,nwr};
