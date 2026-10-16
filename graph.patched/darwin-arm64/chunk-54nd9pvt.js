// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{a}from"./chunk-k4g6y57j.js";import{z1,aO}from"./chunk-bnfhb7sj.js";import{L_}from"./chunk-jn6attna.js";function ACo(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":case"attachedFolder":return!0}}function sYe(e){if(e.loadedFrom==="syncedSkills")return!czn();return ACo(e)}function czn(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||L_()}function uzn(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function fon(e){return{description:i(e.description),argumentHint:e.argumentHint===void 0?void 0:i(e.argumentHint),whenToUse:e.whenToUse===void 0?void 0:i(e.whenToUse),argumentNames:e.argumentNames.map(i)}}function Ypt(e){return{...fon(e),argumentHint:e.argumentHint===void 0?void 0:t(e.argumentHint)}}function lHs(e){return{...Ypt(e),displayName:r(e.displayName),fallback:void 0}}function r(e){return e===void 0?void 0:hX(e)}function hX(e){return z1(aO(e," "))}function i(e){return z1(t(e))}function t(e){return aO(e," ",{keepSpelledJoiners:!0})}function mon(e){return hX(e).replaceAll('"',"&quot;")}function Xpt(e){return z1(e.replace(/[\p{Cc}\p{Cs}]/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{ACo,sYe,czn,uzn,fon,Ypt,lHs,hX,mon,Xpt};
