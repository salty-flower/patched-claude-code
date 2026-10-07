// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{a}from"./chunk-869zfth6.js";import{vn}from"./chunk-ky8zgwyh.js";import{JS}from"./chunk-zyrx67ap.js";import{vV}from"./chunk-994fq99p.js";function xXr(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":case"attachedFolder":return!0}}function eGe(e){if(e.loadedFrom==="syncedSkills")return!_sr();return xXr(e)}function _sr(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||JS()}function oCn(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function rKt(e){return{description:wV(e.description),argumentHint:sCn(e.argumentHint),whenToUse:sCn(e.whenToUse),argumentNames:e.argumentNames.map(wV)}}function gQo(e){return{...rKt(e),displayName:sCn(e.displayName),argumentHint:e.argumentHint===void 0?void 0:vn(e.argumentHint),fallback:void 0}}function sCn(e){return e===void 0?void 0:wV(e)}function wV(e){return vV(vn(e))}function iCn(e){return vV(e.replace(/[\p{Cc}\p{Cs}]/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{xXr,eGe,_sr,oCn,rKt,gQo,sCn,wV,iCn};
