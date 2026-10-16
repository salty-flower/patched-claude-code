// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{a}from"./chunk-xwn0mfnc.js";import{$B,oO}from"./chunk-cwsn6mdf.js";import{D_}from"./chunk-en4g449d.js";function Jko(e){if(e.loadedFrom===void 0)return Boolean(e.isMcp);switch(e.loadedFrom){case"skills":case"commands_DEPRECATED":case"plugin":case"managed":case"bundled":return!1;case"syncedSkills":case"mcp":case"memoryStore":case"attachedFolder":return!0}}function Q8e(e){if(e.loadedFrom==="syncedSkills")return!VGn();return Jko(e)}function VGn(){return Boolean(a.CLAUDE_CODE_REMOTE)||Boolean(a.CLAUDE_CODE_IS_COWORK)||D_()}function KGn(){return{hooks:void 0,allowedTools:[],disallowedTools:[],executionContext:void 0,agent:void 0,background:void 0,model:void 0,effort:void 0,shell:void 0,paths:void 0,fallback:void 0,createdBy:void 0,displayName:void 0,metadata:void 0}}function Qrn(e){return{description:i(e.description),argumentHint:e.argumentHint===void 0?void 0:i(e.argumentHint),whenToUse:e.whenToUse===void 0?void 0:i(e.whenToUse),argumentNames:e.argumentNames.map(i)}}function Bpt(e){return{...Qrn(e),argumentHint:e.argumentHint===void 0?void 0:t(e.argumentHint)}}function EMs(e){return{...Bpt(e),displayName:r(e.displayName),fallback:void 0}}function r(e){return e===void 0?void 0:aX(e)}function aX(e){return $B(oO(e," "))}function i(e){return $B(t(e))}function t(e){return oO(e," ",{keepSpelledJoiners:!0})}function Zrn(e){return aX(e).replaceAll('"',"&quot;")}function jpt(e){return $B(e.replace(/[\p{Cc}\p{Cs}]/gu,(n)=>n==="\t"||n===`
`||n==="\r"?n:""))}
export{Jko,Q8e,VGn,KGn,Qrn,Bpt,EMs,aX,Zrn,jpt};
