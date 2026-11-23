// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Zd}from"./chunk-27acghp6.js";import{th}from"./chunk-bqgwb7jg.js";import{Gis}from"./chunk-4g5tryvq.js";import{id}from"./chunk-qgynpsrd.js";import{KB}from"./chunk-xkvthq78.js";function xio(){return[{type:"text",text:Gis()}]}function S3a(){id({name:KB,description:`Reference for writing a ${Zd} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,menuDescription:"Load the reference for writing Workflow tool scripts",userInvocable:!0,isEnabled:()=>th(),async getPromptForCommand(){return xio()}})}
export{xio,S3a};
