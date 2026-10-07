// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{V}from"./chunk-fdatg9ax.js";import{y,p}from"./chunk-tzahwj8w.js";import{a}from"./chunk-869zfth6.js";import{t}from"./chunk-gvn18sr5.js";import{c}from"./chunk-z9b8syjk.js";import{Ae,hO,ce}from"./chunk-m0sj7y8g.js";function lut(){try{return!1}catch(e){return c(V(e)),!1}}var i=20,u=i+1,IMo=10,m=1209600000,WMr=[{text:"Showing fewer prompt suggestions"},{text:" \xB7 use one to bring them back",dim:!0}];function Jqn(){let e=ce();if(r(e)<i)return!1;if(a.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION===!0)return!1;if(lut())return!1;if(Date.now()-Date.parse(e.firstStartTime??"1970-01-01")<m)return!1;return!0}function uLt(e,o,n){if(e){if(n)n.unusedInARow=0;d(o,!1);return}if(!n||r(ce())>=i)return;if(n.unusedInARow++,n.unusedInARow>=i)n.unusedInARow=0,Ae(_,o)}function OMo(e,o){if(o)o.unusedInARow=0;d(e,!0)}function zMr(e){if(!l(ce())||!Jqn())return!1;return Ae((o)=>l(o)?{...o,promptSuggestionUnusedStreak:u}:o,e),y("prompt_suggestion_back_off_notice"),!0}function d(e,o){let n=r(ce());if(n===0)return;if(!Jqn()){Ae(f,e);return}let g={was_notice_claimed:n===u,via_config_toggle:o};hO(f,e).then((s)=>{if(s)y("prompt_suggestion_back_off_end",g);else p("prompt_suggestion_back_off_end","reset_unconfirmed",g)}).catch((s)=>t(`Prompt suggestion back-off: could not log the end event: ${s}`,{level:"error"}))}function f(e){return r(e)===0?e:{...e,promptSuggestionUnusedStreak:0}}function _(e){return r(e)>=i?e:{...e,promptSuggestionUnusedStreak:i}}function l(e){let o=r(e);return o>=i&&o!==u}function r(e){let o=e.promptSuggestionUnusedStreak;return typeof o==="number"&&Number.isFinite(o)?o:0}
export{lut,IMo,WMr,Jqn,uLt,OMo,zMr};
