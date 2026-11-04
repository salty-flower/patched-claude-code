// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{$u}from"./chunk-q1y0282q.js";import{qf}from"./chunk-bvhk5wc8.js";import{XUo}from"./chunk-6c5hgq86.js";import{bl}from"./chunk-2zrhegt6.js";import{a$}from"./chunk-z5bx7sar.js";function Y2r(){return[{type:"text",text:XUo()}]}function _ia(){bl({name:a$,description:`Reference for writing a ${$u} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>qf(),async getPromptForCommand(){return Y2r()}})}
export{Y2r,_ia};
