// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{a}from"./chunk-70qqbqq4.js";import{vn}from"./chunk-cy0s0eq1.js";import{ky}from"./chunk-pf8p4bsg.js";import{Nq}from"./chunk-hw1qwc5j.js";function coo(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":case"attachedFolder":return!0}}function Kze(e){if(e.loadedFrom==="syncedSkills")return!ypr();return coo(e)}function ypr(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||ky()}function wOn(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function w5t(e){return{description:Lq(e.description),argumentHint:EOn(e.argumentHint),whenToUse:EOn(e.whenToUse),argumentNames:e.argumentNames.map(Lq)}}function Ias(e){return{...w5t(e),displayName:EOn(e.displayName),argumentHint:e.argumentHint===void 0?void 0:vn(e.argumentHint),fallback:void 0}}function EOn(e){return e===void 0?void 0:Lq(e)}function Lq(e){return Nq(vn(e))}function vOn(e){return Nq(e.replace(/[\p{Cc}\p{Cs}]/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{coo,Kze,ypr,wOn,w5t,Ias,EOn,Lq,vOn};
