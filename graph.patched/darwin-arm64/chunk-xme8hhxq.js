// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Bd}from"./chunk-0asvff1f.js";import{far}from"./chunk-758w7s8t.js";import{Af}from"./chunk-w0kpt7yr.js";import{ps}from"./chunk-4earbj0y.js";import{Dx}from"./chunk-501p77dt.js";function mTn(){return[{type:"text",text:far()}]}function x9o(){ps({name:Dx,description:`Reference for writing a ${Bd} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>Af(),async getPromptForCommand(){return mTn()}})}
export{mTn,x9o};
