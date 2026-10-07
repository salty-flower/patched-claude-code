// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{a}from"./chunk-j77txbjn.js";import{En}from"./chunk-pey4mmsy.js";import{Qb}from"./chunk-mcq8tx7b.js";import{xV}from"./chunk-tdgp8wnd.js";function r7r(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":case"attachedFolder":return!0}}function aGe(e){if(e.loadedFrom==="syncedSkills")return!$sr();return r7r(e)}function $sr(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||Qb()}function ETn(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function _qt(e){return{description:RV(e.description),argumentHint:vTn(e.argumentHint),whenToUse:vTn(e.whenToUse),argumentNames:e.argumentNames.map(RV)}}function ZJo(e){return{..._qt(e),displayName:vTn(e.displayName),argumentHint:e.argumentHint===void 0?void 0:En(e.argumentHint),fallback:void 0}}function vTn(e){return e===void 0?void 0:RV(e)}function RV(e){return xV(En(e))}function CTn(e){return xV(e.replace(/[\p{Cc}\p{Cs}]/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{r7r,aGe,$sr,ETn,_qt,ZJo,vTn,RV,CTn};
