// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{a}from"./chunk-3a4khaz5.js";import{Bj}from"./chunk-x4gz28fm.js";import{kn}from"./chunk-z2w95mdn.js";var i=/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,Ynt=256,BQt=/[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;function aQ(e){return e.length>0&&e.length<=256&&!BQt.test(e)}function UHe(e){return e.length<=256&&/^[A-Za-z0-9_:.-]+$/.test(e)}function x_(e){return t(e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"))}function t(e){return e.replace(i,(n)=>`&#${n.charCodeAt(0)};`)}function O9(e){return e.replaceAll("<","&lt;").replaceAll(">","&gt;")}function Cd(e){return t(O9(String(e??"")))}function eEe(e){return Cd(e).replaceAll('"',"&quot;")}function r(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":return!0}}function BHe(e){if(e.loadedFrom==="syncedSkills")return!eSr();return r(e)}function eSr(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||Bj()}function jQt(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function sRt(e){return{description:GQt(e.description),argumentHint:WQt(e.argumentHint),whenToUse:WQt(e.whenToUse),argumentNames:e.argumentNames.map(GQt)}}function Rpo(e){return{...sRt(e),displayName:WQt(e.displayName),argumentHint:e.argumentHint===void 0?void 0:kn(e.argumentHint),fallback:void 0}}function WQt(e){return e===void 0?void 0:GQt(e)}function GQt(e){return O9(kn(e))}function zQt(e){return O9(e.replace(/\p{Cc}/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{Ynt,BQt,aQ,UHe,x_,O9,Cd,eEe,BHe,eSr,jQt,sRt,Rpo,WQt,GQt,zQt};
