// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Qe,N}from"./chunk-36ysyspx.js";import{i}from"./chunk-9a41hw1t.js";import{t}from"./chunk-d7b0m8qy.js";import{l}from"./chunk-thm21ca7.js";import{yS,cnr,Nx,Anr}from"./chunk-27xjmczp.js";import{yr}from"./chunk-2k4ev690.js";import{_c,Tb}from"./chunk-31gxg38t.js";var cio="https://code.claude.com/docs/en/model-config",uio=`${cio}#correct-the-window-for-a-gateway-or-custom-model-id`;function Kgs(o,e){if(t(`[autocompact] ${o.detail}`,{level:"warn"}),e.interactive)return o;return e.headless(o.text),null}function qgs(o,e,n){try{return u(o,e,n)}catch(d){return l(Qe(N(d),"unknown-model notice failed")),null}}function u(o,e,n){let{source:d,window:r}=Tb(_c(o,n),e,n);if(d!=="unknown-model")return null;let m=Anr(o),a=i.CLAUDE_CODE_MAX_CONTEXT_TOKENS;if(m&&a!==void 0&&a>0)return null;let w=r<1e6,s=[];if(!Nx()&&w)s.push("append [1m] to the model name for 1M");if(m)s.push("set CLAUDE_CODE_MAX_CONTEXT_TOKENS to its real window");let c=s.length>0?`; if the model accepts ${w?"more":"less"}, ${s.join(", or ")}`:"";return{model:o,window:r,text:`Claude Code doesn't recognize the model "${yS(o)}", so it assumes a context window of ${yr(r)} tokens. Update Claude Code, or see ${uio} to set the window.`,detail:`${cnr(o)} Until then auto-compact keeps this session within ${yr(r)} tokens (the context window it assumes)${c}; CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT=1 restores the previous wait-for-the-API behavior.`}}
export{cio,uio,Kgs,qgs};
