// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{nu}from"./chunk-abx3cqxj.js";import{Atn}from"./chunk-s9vr7jq9.js";import{Zu}from"./chunk-92en3jeh.js";import{Zr}from"./chunk-vtkm0ky0.js";import{c_e}from"./chunk-02drrn6q.js";import{IE}from"./chunk-twnw06x3.js";function F0t(){return[{type:"text",text:Atn}]}function vTr(){Zr({name:IE,description:`Reference for writing a ${nu} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>Zu()&&!c_e(),async getPromptForCommand(){return F0t()}})}
export{F0t,vTr};
