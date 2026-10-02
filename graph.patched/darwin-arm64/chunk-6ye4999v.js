// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{eg}from"./chunk-2j7zyd8v.js";import{M9}from"./chunk-3wz0srxw.js";import{iye,Tdt,kdt}from"./chunk-9add1rv0.js";function K1(n,e,t){let i=n.trim(),u=i===e?[e]:[i,e];for(let s of u){let o=r(s,t);if(o!==void 0)return o}let{paths:a,vetted:c}=M9(e);if(!c)return{ok:!1,reason:"unvettable_chain"};for(let s of a){let o=r(s,t);if(o!==void 0)return o}return{ok:!0,pathsToCheck:a}}function RO(n,e){return r(n,e)?.reason}function r(n,e){if(eg(n))return{ok:!1,reason:"nt_namespace"};if(iye(n,e))return{ok:!1,reason:"untrusted_unc"};if(Tdt(n,e))return{ok:!1,reason:"untrusted_automount"};let t=kdt(n,e);if(t!==void 0)return{ok:!1,reason:"suspicious_windows_spelling",spelling:t};return}
export{K1,RO};
