// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{U}from"./chunk-wkh5syvr.js";import{g,p}from"./chunk-n1esck2w.js";import{a}from"./chunk-k4g6y57j.js";import{t}from"./chunk-bnfhb7sj.js";import{l}from"./chunk-e666gr8q.js";import{Ae,AM,ue}from"./chunk-1901fdh6.js";function wCt(){try{return!1}catch(e){return l(U(e)),!1}}var i=20,u=i+1,Wrs=10,_=1209600000,eJr=[{text:"Showing fewer prompt suggestions"},{text:" \xB7 use one to bring them back",dim:!0}];function Plr(){let e=ue();if(r(e)<i)return!1;if(a.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION===!0)return!1;if(wCt())return!1;if(Date.now()-Date.parse(e.firstStartTime??"1970-01-01")<_)return!1;return!0}function b3t(e,o,n){if(e){if(n)n.unusedInARow=0;m(o,!1);return}if(!n||r(ue())>=i)return;if(n.unusedInARow++,n.unusedInARow>=i)n.unusedInARow=0,Ae(S,o)}function Grs(e,o){if(o)o.unusedInARow=0;m(e,!0)}function tJr(e){if(!d(ue())||!Plr())return!1;return Ae((o)=>d(o)?{...o,promptSuggestionUnusedStreak:u}:o,e),g("prompt_suggestion_back_off_notice"),!0}function m(e,o){let n=r(ue());if(n===0)return;if(!Plr()){Ae(c,e);return}let f={was_notice_claimed:n===u,via_config_toggle:o};AM(c,e).then((s)=>{if(s)g("prompt_suggestion_back_off_end",f);else p("prompt_suggestion_back_off_end","reset_unconfirmed",f)}).catch((s)=>t(`Prompt suggestion back-off: could not log the end event: ${s}`,{level:"error"}))}function c(e){return r(e)===0?e:{...e,promptSuggestionUnusedStreak:0}}function S(e){return r(e)>=i?e:{...e,promptSuggestionUnusedStreak:i}}function d(e){let o=r(e);return o>=i&&o!==u}function r(e){let o=e.promptSuggestionUnusedStreak;return typeof o==="number"&&Number.isFinite(o)?o:0}
export{wCt,Wrs,eJr,Plr,b3t,Grs,tJr};
