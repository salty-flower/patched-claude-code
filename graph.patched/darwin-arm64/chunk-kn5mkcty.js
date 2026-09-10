// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{lu}from"./chunk-bk30bs3v.js";import{wpn}from"./chunk-z1g1wnpk.js";import{qc}from"./chunk-9sh3ncn0.js";import{uo}from"./chunk-vr00zgqz.js";import{Iv}from"./chunk-xk9fb22k.js";function eFt(){return[{type:"text",text:wpn()}]}function dCr(){uo({name:Iv,description:`Reference for writing a ${lu} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>qc(),async getPromptForCommand(){return eFt()}})}
export{eFt,dCr};
