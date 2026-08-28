// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{d2b as u,e2b as r,i2b as w}from"./_624.js";import{H8b as l,I8b as s,R8b as S}from"./_657.js";import{H_c as T,P9c as f}from"./_786.js";import{Aad as h,yad as m}from"./_798.js";import{fbd as a,lbd as O}from"./_801.js";import{xgd as R}from"./_810.js";import{Vid as n,krd as _}from"./_812.js";import{ysd as i}from"./_815.js";import{Exd as E}from"./_839.js";import{realpathSync as v}from"fs";import{homedir as b}from"os";import{isAbsolute as g}from"path";async function V(){return d()&&await l()}function H(){return d()&&s()}function d(){return!1}function G(){return"external_build"}function x(){let o=m.CLAUDE_CODE_REMOTE_TOOLS_SERVE;return o===void 0||i(o)}function y(){let o=b();if(!g(o))return!0;let t=o;try{t=v(o)}catch{}let c=[n(),f(n())].filter((e)=>e!==null).map(r);return[o,t].some((e)=>c.some((p)=>u(r(e),p)))}var C=E(()=>{h();R();O();_();T();w();S()});
export{V as Y1b,H as Z1b,d as _1b,G as $1b,y as a2b,C as b2b};
