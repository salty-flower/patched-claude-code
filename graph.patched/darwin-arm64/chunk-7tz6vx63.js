// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{iU}from"./chunk-8mvda08c.js";import{k,aj}from"./chunk-s46qgfx7.js";import{a}from"./chunk-j77txbjn.js";import{Sf,d9t}from"./chunk-44myv9zp.js";import{fEe,I4r}from"./chunk-yq4x938b.js";var t=300000;function KEn(){return a.CLAUDE_CODE_BRIEF||aj("tengu_kairos_brief",!1,t)}function eks(e){if(!e.includes(Sf)&&!e.includes(d9t))return!1;if(fEe())return!1;return KEn()}function iP(){return iU()&&KEn()||I4r()}var r=`In brief mode, plain assistant text is hidden from the user \u2014 only ${Sf} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;function tks(){let e=k("tengu_kairos_brief_stop_hook_text","");return typeof e==="string"&&e.length>0?e:r}
export{KEn,eks,iP,tks};
