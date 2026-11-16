// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Cq}from"./chunk-8q61qac6.js";import{Ee,x,At,j}from"./chunk-07a1744w.js";j();var Zto=()=>a,a=()=>{},c=()=>{return};function Fe(t,i){let n=Ee(Cq),r=x(null);if(r.current===null)r.current={select:i,last:null,source:null,get:c,notifier:n,subscribe:Zto};let e=r.current;if(e.select=i,e.source!==t||e.notifier!==n)e.notifier=n,e.subscribe=t?n?.paced(t.subscribe)??t.subscribe:Zto;if(e.source!==t)e.source=t,e.last=null,e.get=t?()=>{let s=t.getSnapshot(),o=e.select;if(!o)return s;let u=e.last;if(u!==null&&u.snapshot===s&&u.select===o)return u.selected;let l=o(s);return e.last={snapshot:s,select:o,selected:l},l}:c;return At(e.subscribe,e.get,e.get)}
export{Zto,Fe};
