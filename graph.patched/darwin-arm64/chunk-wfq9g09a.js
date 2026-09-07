// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{a}from"./chunk-dq2s4wjn.js";import{qJ}from"./chunk-1y4ds8dy.js";import{yn}from"./chunk-t4hc7q7h.js";var r=/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,n8e=256,Vyt=/[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;function r8e(e){return e.length>0&&e.length<=256&&!Vyt.test(e)}function MS(e){return t(e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"))}function t(e){return e.replace(r,(n)=>`&#${n.charCodeAt(0)};`)}function Z2(e){return e.replaceAll("<","&lt;").replaceAll(">","&gt;")}function Ec(e){return t(Z2(String(e??"")))}function ure(e){return Ec(e).replaceAll('"',"&quot;")}function i(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":return!0}}function ppe(e){if(e.loadedFrom==="syncedSkills")return!O_n();return i(e)}function O_n(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||qJ()}function Kyt(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function tNe(e){return{description:Xyt(e.description),argumentHint:nNe(e.argumentHint),whenToUse:nNe(e.whenToUse),argumentNames:e.argumentNames.map(Xyt)}}function nNe(e){return e===void 0?void 0:Xyt(e)}function Xyt(e){return Z2(yn(e))}function Yyt(e){return Z2(e.replace(/\p{Cc}/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{n8e,Vyt,r8e,MS,Z2,Ec,ure,ppe,O_n,Kyt,tNe,nNe,Xyt,Yyt};
