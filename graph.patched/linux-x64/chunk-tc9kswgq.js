// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{y6}from"./chunk-84hfcbts.js";import{ve,x,Ct,j}from"./chunk-mp0bjfh5.js";j();var Pto=()=>a,a=()=>{},c=()=>{return};function Fe(t,i){let n=ve(y6),r=x(null);if(r.current===null)r.current={select:i,last:null,source:null,get:c,notifier:n,subscribe:Pto};let e=r.current;if(e.select=i,e.source!==t||e.notifier!==n)e.notifier=n,e.subscribe=t?n?.paced(t.subscribe)??t.subscribe:Pto;if(e.source!==t)e.source=t,e.last=null,e.get=t?()=>{let s=t.getSnapshot(),o=e.select;if(!o)return s;let u=e.last;if(u!==null&&u.snapshot===s&&u.select===o)return u.selected;let l=o(s);return e.last={snapshot:s,select:o,selected:l},l}:c;return Ct(e.subscribe,e.get,e.get)}
export{Pto,Fe};
