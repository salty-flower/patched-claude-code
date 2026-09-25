// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{vd}from"./chunk-kgnc2rh2.js";import{p8n}from"./chunk-cpdpcrmj.js";import{lp}from"./chunk-08ezdbvt.js";import{qo}from"./chunk-8amn3vqy.js";import{dP}from"./chunk-e30anq4d.js";function vhn(){return[{type:"text",text:p8n()}]}function WDo(){qo({name:dP,description:`Reference for writing a ${vd} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>lp(),async getPromptForCommand(){return vhn()}})}
export{vhn,WDo};
