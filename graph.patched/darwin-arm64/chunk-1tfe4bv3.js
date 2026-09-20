// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{b}from"./chunk-mvpw0rjp.js";import{M9e,wW}from"./chunk-8yjp8tpt.js";import{n,ft}from"./chunk-cskdt2sa.js";import{e}from"./chunk-437ab22y.js";function p$(L){let m=b(10),{children:o,color:x,bold:h,linkHref:u}=L,t;if(m[0]!==o||m[1]!==u){t=[];let l=0;for(const i of o.matchAll(M9e)){let R=wW(i[0]);let g=u===void 0?R:u(R);if(g===void 0){continue}if(i.index>l)t.push(o.slice(l,i.index));t.push(e(ft,{url:g,children:g},i.index)),l=i.index+R.length}let c;if(m[3]!==o||m[4]!==l)c=o.slice(l),m[3]=o,m[4]=l,m[5]=c;else c=m[5];t.push(c);m[0]=o,m[1]=u,m[2]=t}else t=m[2];let c;if(m[6]!==h||m[7]!==x||m[8]!==t)c=e(n,{color:x,bold:h,children:t}),m[6]=h,m[7]=x,m[8]=t,m[9]=c;else c=m[9];return c}
export{p$};
