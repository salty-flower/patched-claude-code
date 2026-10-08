// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{a}from"./chunk-rptge3r8.js";import{En}from"./chunk-j6z0j5vh.js";import{ky}from"./chunk-cjpd2k0t.js";import{PK}from"./chunk-e21ctp8m.js";function Dro(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":case"attachedFolder":return!0}}function Bqe(e){if(e.loadedFrom==="syncedSkills")return!Xur();return Dro(e)}function Xur(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||ky()}function rOn(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function i3t(e){return{description:xK(e.description),argumentHint:oOn(e.argumentHint),whenToUse:oOn(e.whenToUse),argumentNames:e.argumentNames.map(xK)}}function Vis(e){return{...i3t(e),displayName:oOn(e.displayName),argumentHint:e.argumentHint===void 0?void 0:En(e.argumentHint),fallback:void 0}}function oOn(e){return e===void 0?void 0:xK(e)}function xK(e){return PK(En(e))}function sOn(e){return PK(e.replace(/[\p{Cc}\p{Cs}]/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{Dro,Bqe,Xur,rOn,i3t,Vis,oOn,xK,sOn};
