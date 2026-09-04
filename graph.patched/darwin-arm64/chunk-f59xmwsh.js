// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{a}from"./chunk-g2ngvza5.js";import{SW}from"./chunk-9e1062yp.js";import{En}from"./chunk-mtyvzmw4.js";var r=/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,IXe=256,awt=/[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;function PXe(e){return e.length>0&&e.length<=256&&!awt.test(e)}function KT(e){return t(e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"))}function t(e){return e.replace(r,(n)=>`&#${n.charCodeAt(0)};`)}function lj(e){return e.replaceAll("<","&lt;").replaceAll(">","&gt;")}function eu(e){return t(lj(String(e??"")))}function Wfe(e){return eu(e).replaceAll('"',"&quot;")}function i(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":return!0}}function Gfe(e){if(e.loadedFrom==="syncedSkills")return!fwn();return i(e)}function fwn(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||SW()}function lwt(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function Q1e(e){return{description:cwt(e.description),argumentHint:Z1e(e.argumentHint),whenToUse:Z1e(e.whenToUse),argumentNames:e.argumentNames.map(cwt)}}function Z1e(e){return e===void 0?void 0:cwt(e)}function cwt(e){return lj(En(e))}function uwt(e){return lj(e.replace(/\p{Cc}/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{IXe,awt,PXe,KT,lj,eu,Wfe,Gfe,fwn,lwt,Q1e,Z1e,cwt,uwt};
