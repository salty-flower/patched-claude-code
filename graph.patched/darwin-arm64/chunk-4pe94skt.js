// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{_}from"./chunk-0jrfbepr.js";import{DUe,RQ}from"./chunk-3yv85b0k.js";import{n,ht}from"./chunk-t50adtrb.js";import{e}from"./chunk-v5r13aq1.js";function iM(T){let y=_(9),{children:o,color:f,bold:x}=T,t;if(y[0]!==o){t=[];let l=0;for(const a of o.matchAll(DUe)){let m=RQ(a[0]);if(a.index>l)t.push(o.slice(l,a.index));t.push(e(ht,{url:m,children:m},a.index)),l=a.index+m.length}let c;if(y[2]!==o||y[3]!==l)c=o.slice(l),y[2]=o,y[3]=l,y[4]=c;else c=y[4];t.push(c);y[0]=o,y[1]=t}else t=y[1];let c;if(y[5]!==x||y[6]!==f||y[7]!==t)c=e(n,{color:f,bold:x,children:t}),y[5]=x,y[6]=f,y[7]=t,y[8]=c;else c=y[8];return c}
export{iM};
