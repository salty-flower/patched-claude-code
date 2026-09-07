// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{y}from"./chunk-wdpeygc3.js";import{HBe,C7}from"./chunk-nfmdzyhb.js";import{n,ct}from"./chunk-bkvzfc5q.js";import{e}from"./chunk-smtaex5n.js";function k$(g){let m=y(9),{children:o,color:f,bold:x}=g,t;if(m[0]!==o){t=[];let l=0;for(const a of o.matchAll(HBe)){let u=C7(a[0]);if(a.index>l)t.push(o.slice(l,a.index));t.push(e(ct,{url:u,children:u},a.index)),l=a.index+u.length}let c;if(m[2]!==o||m[3]!==l)c=o.slice(l),m[2]=o,m[3]=l,m[4]=c;else c=m[4];t.push(c);m[0]=o,m[1]=t}else t=m[1];let c;if(m[5]!==x||m[6]!==f||m[7]!==t)c=e(n,{color:f,bold:x,children:t}),m[5]=x,m[6]=f,m[7]=t,m[8]=c;else c=m[8];return c}
export{k$};
