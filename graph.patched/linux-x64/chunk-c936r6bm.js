// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Xe,U}from"./chunk-ekgz6skk.js";import{a}from"./chunk-cd1a8ced.js";import{t}from"./chunk-n5v91jc3.js";import{l}from"./chunk-jkcb7qdd.js";import{j_,q3n,Yx,p8n}from"./chunk-7p6jp6kj.js";import{mr}from"./chunk-17fr76vj.js";import{Jd,Yb}from"./chunk-rncrmfyt.js";var H9r="https://code.claude.com/docs/en/model-config",D9r=`${H9r}#correct-the-window-for-a-gateway-or-custom-model-id`;function $ts(o,e){if(t(`[autocompact] ${o.detail}`,{level:"warn"}),e.interactive)return o;return e.headless(o.text),null}function Fts(o,e,n){try{return u(o,e,n)}catch(s){return l(Xe(U(s),"unknown-model notice failed")),null}}function u(o,e,n){let{source:s,window:i}=Yb(Jd(o,n),e,n);if(s!=="unknown-model")return null;let d=p8n(o),m=a.CLAUDE_CODE_MAX_CONTEXT_TOKENS;if(d&&m!==void 0&&m>0)return null;let w=i<1e6,r=[];if(!Yx()&&w)r.push("append [1m] to the model name for 1M");if(d)r.push("set CLAUDE_CODE_MAX_CONTEXT_TOKENS to its real window");let c=r.length>0?`; if the model accepts ${w?"more":"less"}, ${r.join(", or ")}`:"";return{model:o,window:i,text:`Claude Code doesn't recognize the model "${j_(o)}", so it assumes a context window of ${mr(i)} tokens. Update Claude Code, or see ${D9r} to set the window.`,detail:`${q3n(o)} Until then auto-compact keeps this session within ${mr(i)} tokens (the context window it assumes)${c}; CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT=1 restores the previous wait-for-the-API behavior.`}}
export{H9r,D9r,$ts,Fts};
