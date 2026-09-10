// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{a}from"./chunk-qymratxs.js";import{wee}from"./chunk-1swgmcv7.js";import{En}from"./chunk-wtkjh5e3.js";var r=/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,JJe=256,pCt=/[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;function QJe(e){return e.length>0&&e.length<=256&&!pCt.test(e)}function kb(e){return t(e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"))}function t(e){return e.replace(r,(n)=>`&#${n.charCodeAt(0)};`)}function N6(e){return e.replaceAll("<","&lt;").replaceAll(">","&gt;")}function $c(e){return t(N6(String(e??"")))}function Tse(e){return $c(e).replaceAll('"',"&quot;")}function i(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":return!0}}function ege(e){if(e.loadedFrom==="syncedSkills")return!ivn();return i(e)}function ivn(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||wee()}function fCt(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function z$e(e){return{description:mCt(e.description),argumentHint:G$e(e.argumentHint),whenToUse:G$e(e.whenToUse),argumentNames:e.argumentNames.map(mCt)}}function G$e(e){return e===void 0?void 0:mCt(e)}function mCt(e){return N6(En(e))}function gCt(e){return N6(e.replace(/\p{Cc}/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{JJe,pCt,QJe,kb,N6,$c,Tse,ege,ivn,fCt,z$e,G$e,mCt,gCt};
