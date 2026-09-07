// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{a}from"./chunk-td8fcebs.js";import{B7}from"./chunk-1ys2azv7.js";import{_n}from"./chunk-nnhhr1jx.js";var r=/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,U3e=256,R_t=/[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;function j3e(e){return e.length>0&&e.length<=256&&!R_t.test(e)}function $b(e){return t(e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"))}function t(e){return e.replace(r,(n)=>`&#${n.charCodeAt(0)};`)}function zj(e){return e.replaceAll("<","&lt;").replaceAll(">","&gt;")}function Hc(e){return t(zj(String(e??"")))}function nre(e){return Hc(e).replaceAll('"',"&quot;")}function i(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":return!0}}function sfe(e){if(e.loadedFrom==="syncedSkills")return!ayn();return i(e)}function ayn(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||B7()}function x_t(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function GMe(e){return{description:L_t(e.description),argumentHint:WMe(e.argumentHint),whenToUse:WMe(e.whenToUse),argumentNames:e.argumentNames.map(L_t)}}function WMe(e){return e===void 0?void 0:L_t(e)}function L_t(e){return zj(_n(e))}function P_t(e){return zj(e.replace(/\p{Cc}/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{U3e,R_t,j3e,$b,zj,Hc,nre,sfe,ayn,x_t,GMe,WMe,L_t,P_t};
