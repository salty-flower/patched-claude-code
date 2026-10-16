// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Qe,U}from"./chunk-wkh5syvr.js";import{a}from"./chunk-k4g6y57j.js";import{t}from"./chunk-bnfhb7sj.js";import{l}from"./chunk-e666gr8q.js";import{b_,uKn,Ax,xKn}from"./chunk-1901fdh6.js";import{dr}from"./chunk-nz45cq1q.js";import{Gd,TS}from"./chunk-996thspe.js";var Gqr="https://code.claude.com/docs/en/model-config",zqr=`${Gqr}#correct-the-window-for-a-gateway-or-custom-model-id`;function v8o(o,e){if(t(`[autocompact] ${o.detail}`,{level:"warn"}),e.interactive)return o;return e.headless(o.text),null}function k8o(o,e,n){try{return u(o,e,n)}catch(s){return l(Qe(U(s),"unknown-model notice failed")),null}}function u(o,e,n){let{source:s,window:i}=TS(Gd(o,n),e,n);if(s!=="unknown-model")return null;let d=xKn(o),m=a.CLAUDE_CODE_MAX_CONTEXT_TOKENS;if(d&&m!==void 0&&m>0)return null;let w=i<1e6,r=[];if(!Ax()&&w)r.push("append [1m] to the model name for 1M");if(d)r.push("set CLAUDE_CODE_MAX_CONTEXT_TOKENS to its real window");let c=r.length>0?`; if the model accepts ${w?"more":"less"}, ${r.join(", or ")}`:"";return{model:o,window:i,text:`Claude Code doesn't recognize the model "${b_(o)}", so it assumes a context window of ${dr(i)} tokens. Update Claude Code, or see ${zqr} to set the window.`,detail:`${uKn(o)} Until then auto-compact keeps this session within ${dr(i)} tokens (the context window it assumes)${c}; CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT=1 restores the previous wait-for-the-API behavior.`}}
export{Gqr,zqr,v8o,k8o};
