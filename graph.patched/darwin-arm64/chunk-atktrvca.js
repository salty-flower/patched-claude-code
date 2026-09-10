// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{a}from"./chunk-dv6tepz3.js";import{Kee}from"./chunk-jngjxeh6.js";import{En}from"./chunk-q87va14m.js";var r=/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,RZe=256,XCt=/[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;function xZe(e){return e.length>0&&e.length<=256&&!XCt.test(e)}function R_(e){return t(e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"))}function t(e){return e.replace(r,(n)=>`&#${n.charCodeAt(0)};`)}function aW(e){return e.replaceAll("<","&lt;").replaceAll(">","&gt;")}function zc(e){return t(aW(String(e??"")))}function die(e){return zc(e).replaceAll('"',"&quot;")}function i(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":return!0}}function Gge(e){if(e.loadedFrom==="syncedSkills")return!Nkn();return i(e)}function Nkn(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||Kee()}function JCt(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function pBe(e){return{description:QCt(e.description),argumentHint:fBe(e.argumentHint),whenToUse:fBe(e.whenToUse),argumentNames:e.argumentNames.map(QCt)}}function fBe(e){return e===void 0?void 0:QCt(e)}function QCt(e){return aW(En(e))}function ZCt(e){return aW(e.replace(/\p{Cc}/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{RZe,XCt,xZe,R_,aW,zc,die,Gge,Nkn,JCt,pBe,fBe,QCt,ZCt};
