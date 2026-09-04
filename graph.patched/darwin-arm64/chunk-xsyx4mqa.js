// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{nu}from"./chunk-c5eebxya.js";import{yan}from"./chunk-ew6sj51b.js";import{Mbe}from"./chunk-eks7ckt9.js";import{Oc}from"./chunk-y9nf44bb.js";import{no}from"./chunk-p7px6kyx.js";import{vA}from"./chunk-r4y4fwqb.js";function POt(){return[{type:"text",text:yan()}]}function zxr(){no({name:vA,description:`Reference for writing a ${nu} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>Oc()&&!Mbe(),async getPromptForCommand(){return POt()}})}
export{POt,zxr};
