// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{fu}from"./chunk-fm2rbm90.js";import{I1r}from"./chunk-62rej6c1.js";import{dg}from"./chunk-c5zwk83v.js";import{zs}from"./chunk-v6b7qas5.js";import{X0}from"./chunk-g5m3cxby.js";function B8n(){return[{type:"text",text:I1r()}]}function UBs(){zs({name:X0,description:`Reference for writing a ${fu} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>dg(),async getPromptForCommand(){return B8n()}})}
export{B8n,UBs};
