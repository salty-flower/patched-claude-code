// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{ee}from"./chunk-hs50vfa7.js";import{y,f}from"./chunk-sc069zjc.js";import{a}from"./chunk-1fpwxv0g.js";import{t}from"./chunk-3wz0srxw.js";import{u}from"./chunk-zwbw6dvp.js";import{Te,MD,ce}from"./chunk-er6f56rj.js";function mtt(){try{return!1}catch(e){return u(ee(e)),!1}}var i=20,g=i+1,Cco=10,m=1209600000,_fr=[{text:"Showing fewer prompt suggestions"},{text:" \xB7 use one to bring them back",dim:!0}];function hIn(){let e=ce();if(r(e)<i)return!1;if(a.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION===!0)return!1;if(mtt())return!1;if(Date.now()-Date.parse(e.firstStartTime??"1970-01-01")<m)return!1;return!0}function VCt(e,o,n){if(e){if(n)n.unusedInARow=0;p(o,!1);return}if(!n||r(ce())>=i)return;if(n.unusedInARow++,n.unusedInARow>=i)n.unusedInARow=0,Te(_,o)}function Aco(e,o){if(o)o.unusedInARow=0;p(e,!0)}function Sfr(e){if(!d(ce())||!hIn())return!1;return Te((o)=>d(o)?{...o,promptSuggestionUnusedStreak:g}:o,e),y("prompt_suggestion_back_off_notice"),!0}function p(e,o){let n=r(ce());if(n===0)return;if(!hIn()){Te(c,e);return}let l={was_notice_claimed:n===g,via_config_toggle:o};MD(c,e).then((s)=>{if(s)y("prompt_suggestion_back_off_end",l);else f("prompt_suggestion_back_off_end","reset_unconfirmed",l)}).catch((s)=>t(`Prompt suggestion back-off: could not log the end event: ${s}`,{level:"error"}))}function c(e){return r(e)===0?e:{...e,promptSuggestionUnusedStreak:0}}function _(e){return r(e)>=i?e:{...e,promptSuggestionUnusedStreak:i}}function d(e){let o=r(e);return o>=i&&o!==g}function r(e){let o=e.promptSuggestionUnusedStreak;return typeof o==="number"&&Number.isFinite(o)?o:0}
export{mtt,Cco,_fr,hIn,VCt,Aco,Sfr};
