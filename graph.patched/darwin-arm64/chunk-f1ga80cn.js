// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Yc}from"./chunk-0rwmbnqe.js";import{ain}from"./chunk-qr5h9fj7.js";import{PSe}from"./chunk-13bhjnrr.js";import{vc}from"./chunk-spsj3pcp.js";import{to}from"./chunk-h6dvxpq1.js";import{fA}from"./chunk-2q50ezkz.js";function OIt(){return[{type:"text",text:ain()}]}function nvr(){to({name:fA,description:`Reference for writing a ${Yc} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>vc()&&!PSe(),async getPromptForCommand(){return OIt()}})}
export{OIt,nvr};
