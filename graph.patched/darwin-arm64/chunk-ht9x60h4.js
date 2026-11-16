// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ar}from"./chunk-c7dwhznj.js";import{sc}from"./chunk-b5sd4kg7.js";function Wo(r,m){let{signalB:n,timeoutMs:i,refTimer:u,timeoutError:s,fewListeners:b}=m??{},t=b?new AbortController:ar();if(r?.aborted||n?.aborted)return t.abort(),{signal:t.signal,cleanup:()=>{}};let e,o=()=>{if(e!==void 0)clearTimeout(e);t.abort()};if(i!==void 0){let a=Math.min(i,sc);if(e=s?setTimeout((d)=>d.abort(new DOMException("The operation timed out.","TimeoutError")),a,t):setTimeout(o,a),!u)e.unref?.()}r?.addEventListener("abort",o),n?.addEventListener("abort",o);let l=()=>{if(e!==void 0)clearTimeout(e);r?.removeEventListener("abort",o),n?.removeEventListener("abort",o)};return{signal:t.signal,cleanup:l}}
export{Wo};
