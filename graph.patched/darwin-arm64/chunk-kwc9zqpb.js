// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{v,Ht,j}from"./chunk-xyxaqzpf.js";j();var ren=()=>d,d=()=>{},c=()=>{return};function Ue(t,u){let l=v(null);if(l.current===null)l.current={select:u,last:null,source:null,get:c};let e=l.current;if(e.select=u,e.source!==t)e.source=t,e.last=null,e.get=t?()=>{let n=t.getSnapshot(),s=e.select;if(!s)return n;let o=e.last;if(o!==null&&o.snapshot===n&&o.select===s)return o.selected;let r=s(n);return e.last={snapshot:n,select:s,selected:r},r}:c;return Ht(t?t.subscribe:ren,e.get,e.get)}
export{ren,Ue};
