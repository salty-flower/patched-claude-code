// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{a}from"./chunk-q2vrcqny.js";import{JB}from"./chunk-39xz88rg.js";import{kn}from"./chunk-b48ax99g.js";var r=/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,jct=256,KNt=/[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;function Gre(e){return e.length>0&&e.length<=256&&!KNt.test(e)}function lve(e){return e.length<=256&&/^[A-Za-z0-9_:.-]+$/.test(e)}function fS(e){return t(e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"))}function t(e){return e.replace(r,(n)=>`&#${n.charCodeAt(0)};`)}function BV(e){return e.replaceAll("<","&lt;").replaceAll(">","&gt;")}function su(e){return t(BV(String(e??"")))}function epe(e){return su(e).replaceAll('"',"&quot;")}function o(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":return!0}}function cve(e){if(e.loadedFrom==="syncedSkills")return!fWn();return o(e)}function fWn(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||JB()}function YNt(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function AKe(e){return{description:XNt(e.description),argumentHint:TKe(e.argumentHint),whenToUse:TKe(e.whenToUse),argumentNames:e.argumentNames.map(XNt)}}function TKe(e){return e===void 0?void 0:XNt(e)}function XNt(e){return BV(kn(e))}function JNt(e){return BV(e.replace(/\p{Cc}/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{jct,KNt,Gre,lve,fS,BV,su,epe,cve,fWn,YNt,AKe,TKe,XNt,JNt};
