// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{a}from"./chunk-1bwwmttj.js";import{jee}from"./chunk-v17gpk1z.js";import{vn}from"./chunk-jwp1p5wz.js";var r=/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,uZe=256,xAt=/[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;function dZe(e){return e.length>0&&e.length<=256&&!xAt.test(e)}function A_(e){return t(e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"))}function t(e){return e.replace(r,(n)=>`&#${n.charCodeAt(0)};`)}function Qz(e){return e.replaceAll("<","&lt;").replaceAll(">","&gt;")}function zc(e){return t(Qz(String(e??"")))}function nie(e){return zc(e).replaceAll('"',"&quot;")}function i(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":return!0}}function Lge(e){if(e.loadedFrom==="syncedSkills")return!iCn();return i(e)}function iCn(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||jee()}function IAt(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function ZBe(e){return{description:PAt(e.description),argumentHint:e1e(e.argumentHint),whenToUse:e1e(e.whenToUse),argumentNames:e.argumentNames.map(PAt)}}function e1e(e){return e===void 0?void 0:PAt(e)}function PAt(e){return Qz(vn(e))}function HAt(e){return Qz(e.replace(/\p{Cc}/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{uZe,xAt,dZe,A_,Qz,zc,nie,Lge,iCn,IAt,ZBe,e1e,PAt,HAt};
