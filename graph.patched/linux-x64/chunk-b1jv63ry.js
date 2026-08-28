// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{fd}from"./chunk-kbe57qef.js";import{sXt}from"./chunk-gca09ade.js";import{Hu}from"./chunk-jdveajcr.js";import{Gr}from"./chunk-7b1snkza.js";import{cme}from"./chunk-35g0efss.js";import{Ow}from"./chunk-sqb6m4v7.js";function mkt(){return[{type:"text",text:sXt}]}function Nmr(){Gr({name:Ow,description:`Reference for writing a ${fd} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>Hu()&&!cme(),async getPromptForCommand(){return mkt()}})}
export{mkt,Nmr};
