// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{a}from"./chunk-pv906ex9.js";import{qj}from"./chunk-r0hsft7w.js";import{En}from"./chunk-akratr0p.js";var r=/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,Z8e=256,pSt=/[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;function e7e(e){return e.length>0&&e.length<=256&&!pSt.test(e)}function Lw(e){return t(e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"))}function t(e){return e.replace(r,(n)=>`&#${n.charCodeAt(0)};`)}function U6(e){return e.replaceAll("<","&lt;").replaceAll(">","&gt;")}function Kc(e){return t(U6(String(e??"")))}function qpe(e){return Kc(e).replaceAll('"',"&quot;")}function i(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":return!0}}function zpe(e){if(e.loadedFrom==="syncedSkills")return!_yn();return i(e)}function _yn(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||qj()}function fSt(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function bNe(e){return{description:mSt(e.description),argumentHint:TNe(e.argumentHint),whenToUse:TNe(e.whenToUse),argumentNames:e.argumentNames.map(mSt)}}function TNe(e){return e===void 0?void 0:mSt(e)}function mSt(e){return U6(En(e))}function gSt(e){return U6(e.replace(/\p{Cc}/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{Z8e,pSt,e7e,Lw,U6,Kc,qpe,zpe,_yn,fSt,bNe,TNe,mSt,gSt};
