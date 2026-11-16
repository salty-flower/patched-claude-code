// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Qd}from"./chunk-x39hzzj2.js";import{th}from"./chunk-3mj276zj.js";import{bas}from"./chunk-f2j7zymf.js";import{id}from"./chunk-x4rzqg8w.js";import{JB}from"./chunk-njpe8mzg.js";function pao(){return[{type:"text",text:bas()}]}function d5a(){id({name:JB,description:`Reference for writing a ${Qd} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>th(),async getPromptForCommand(){return pao()}})}
export{pao,d5a};
