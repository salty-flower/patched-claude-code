// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{a}from"./chunk-1fpwxv0g.js";import{GN}from"./chunk-n8h76tq4.js";import{An}from"./chunk-ya4yfeap.js";import{c6}from"./chunk-cezs2q1t.js";function i(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":return!0}}function VFe(e){if(e.loadedFrom==="syncedSkills")return!lqn();return i(e)}function lqn(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||GN()}function wun(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function HNt(e){return{description:l6(e.description),argumentHint:Eun(e.argumentHint),whenToUse:Eun(e.whenToUse),argumentNames:e.argumentNames.map(l6)}}function _Do(e){return{...HNt(e),displayName:Eun(e.displayName),argumentHint:e.argumentHint===void 0?void 0:An(e.argumentHint),fallback:void 0}}function Eun(e){return e===void 0?void 0:l6(e)}function l6(e){return c6(An(e))}function vun(e){return c6(e.replace(/\p{Cc}/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{VFe,lqn,wun,HNt,_Do,Eun,l6,vun};
