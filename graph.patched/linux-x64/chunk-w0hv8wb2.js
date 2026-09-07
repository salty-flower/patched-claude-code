// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{jc}from"./chunk-nbgpqxkk.js";import{lon}from"./chunk-d39v3be8.js";import{Ac}from"./chunk-4tttmnme.js";import{Jr}from"./chunk-0f17k2rm.js";import{LE}from"./chunk-s3w1vcp8.js";function Bxt(){return[{type:"text",text:lon()}]}function xdr(){Jr({name:LE,description:`Reference for writing a ${jc} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>Ac(),async getPromptForCommand(){return Bxt()}})}
export{Bxt,xdr};
