// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{a}from"./chunk-yvnhkg35.js";import{cj,$O}from"./chunk-gyf58rwf.js";import{zy}from"./chunk-tadwrn0a.js";function iuo(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":case"attachedFolder":return!0}}function YKe(e){if(e.loadedFrom==="syncedSkills")return!t_r();return iuo(e)}function t_r(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||zy()}function oNn(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function o7t(e){return{description:t3(e.description),argumentHint:sNn(e.argumentHint),whenToUse:sNn(e.whenToUse),argumentNames:e.argumentNames.map(t3)}}function Shs(e){return{...o7t(e),displayName:sNn(e.displayName),argumentHint:e.argumentHint===void 0?void 0:i(e.argumentHint),fallback:void 0}}function sNn(e){return e===void 0?void 0:t3(e)}function t3(e){return cj(i(e))}function i(e){return $O(e," ")}function iNn(e){return cj(e.replace(/[\p{Cc}\p{Cs}]/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{iuo,YKe,t_r,oNn,o7t,Shs,sNn,t3,iNn};
