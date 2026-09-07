// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Gc}from"./chunk-eptkjt2e.js";import{xrn}from"./chunk-9yq4ex58.js";import{vc}from"./chunk-v3gsmtah.js";import{Jr}from"./chunk-0pdgmnn6.js";import{OE}from"./chunk-848t3d1m.js";function V0t(){return[{type:"text",text:xrn()}]}function _pr(){Jr({name:OE,description:`Reference for writing a ${Gc} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>vc(),async getPromptForCommand(){return V0t()}})}
export{V0t,_pr};
