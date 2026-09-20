// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{a}from"./chunk-wkhfcbsj.js";import{o2}from"./chunk-gyyhh83h.js";import{An}from"./chunk-nxhd1nfq.js";var r=/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,tut=256,d1t=/[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;function Jre(e){return e.length>0&&e.length<=256&&!d1t.test(e)}function yEe(e){return e.length<=256&&/^[A-Za-z0-9_:.-]+$/.test(e)}function gb(e){return t(e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"))}function t(e){return e.replace(r,(n)=>`&#${n.charCodeAt(0)};`)}function K3(e){return e.replaceAll("<","&lt;").replaceAll(">","&gt;")}function ou(e){return t(K3(String(e??"")))}function ape(e){return ou(e).replaceAll('"',"&quot;")}function o(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":return!0}}function _Ee(e){if(e.loadedFrom==="syncedSkills")return!BWn();return o(e)}function BWn(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||o2()}function p1t(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function FVe(e){return{description:f1t(e.description),argumentHint:$Ve(e.argumentHint),whenToUse:$Ve(e.whenToUse),argumentNames:e.argumentNames.map(f1t)}}function $Ve(e){return e===void 0?void 0:f1t(e)}function f1t(e){return K3(An(e))}function m1t(e){return K3(e.replace(/\p{Cc}/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{tut,d1t,Jre,yEe,gb,K3,ou,ape,_Ee,BWn,p1t,FVe,$Ve,f1t,m1t};
