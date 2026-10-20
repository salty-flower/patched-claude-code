// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{U}from"./chunk-nre716m4.js";import{g,p}from"./chunk-53e7d9dh.js";import{a}from"./chunk-h422gpw8.js";import{t}from"./chunk-tdxkq523.js";import{l}from"./chunk-277zhca1.js";import{Te,dD,ue}from"./chunk-bvn0epzr.js";function NAt(){try{return!1}catch(e){return l(U(e)),!1}}var i=20,u=i+1,Lus=10,_=1209600000,eoo=[{text:"Showing fewer prompt suggestions"},{text:" \xB7 use one to bring them back",dim:!0}];function jfr(){let e=ue();if(r(e)<i)return!1;if(a.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION===!0)return!1;if(NAt())return!1;if(Date.now()-Date.parse(e.firstStartTime??"1970-01-01")<_)return!1;return!0}function i9t(e,o,n){if(e){if(n)n.unusedInARow=0;m(o,!1);return}if(!n||r(ue())>=i)return;if(n.unusedInARow++,n.unusedInARow>=i)n.unusedInARow=0,Te(S,o)}function Nus(e,o){if(o)o.unusedInARow=0;m(e,!0)}function too(e){if(!d(ue())||!jfr())return!1;return Te((o)=>d(o)?{...o,promptSuggestionUnusedStreak:u}:o,e),g("prompt_suggestion_back_off_notice"),!0}function m(e,o){let n=r(ue());if(n===0)return;if(!jfr()){Te(c,e);return}let f={was_notice_claimed:n===u,via_config_toggle:o};dD(c,e).then((s)=>{if(s)g("prompt_suggestion_back_off_end",f);else p("prompt_suggestion_back_off_end","reset_unconfirmed",f)}).catch((s)=>t(`Prompt suggestion back-off: could not log the end event: ${s}`,{level:"error"}))}function c(e){return r(e)===0?e:{...e,promptSuggestionUnusedStreak:0}}function S(e){return r(e)>=i?e:{...e,promptSuggestionUnusedStreak:i}}function d(e){let o=r(e);return o>=i&&o!==u}function r(e){let o=e.promptSuggestionUnusedStreak;return typeof o==="number"&&Number.isFinite(o)?o:0}
export{NAt,Lus,eoo,jfr,i9t,Nus,too};
