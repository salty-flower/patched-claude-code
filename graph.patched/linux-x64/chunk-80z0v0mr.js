// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{y}from"./chunk-a5ahs27a.js";import{aNe,KJ}from"./chunk-rv365wnb.js";import{t,ut}from"./chunk-snr8xejh.js";import{e}from"./chunk-ys8dsnqt.js";function Gz(g){let m=y(9),{children:o,color:f,bold:x}=g,r;if(m[0]!==o){r=[];let s=0;for(const a of o.matchAll(aNe)){let u=KJ(a[0]);if(a.index>s)r.push(o.slice(s,a.index));r.push(e(ut,{url:u,children:u},a.index)),s=a.index+u.length}let c;if(m[2]!==o||m[3]!==s)c=o.slice(s),m[2]=o,m[3]=s,m[4]=c;else c=m[4];r.push(c);m[0]=o,m[1]=r}else r=m[1];let c;if(m[5]!==x||m[6]!==f||m[7]!==r)c=e(t,{color:f,bold:x,children:r}),m[5]=x,m[6]=f,m[7]=r,m[8]=c;else c=m[8];return c}
export{Gz};
