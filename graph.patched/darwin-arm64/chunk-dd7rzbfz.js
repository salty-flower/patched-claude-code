// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{I6}from"./chunk-9ydebr8y.js";import{Ee,R,Tt,j}from"./chunk-rt5zqm44.js";j();var s1r=()=>a,a=()=>{},c=()=>{return};function He(t,i){let n=Ee(I6),r=R(null);if(r.current===null)r.current={select:i,last:null,source:null,get:c,notifier:n,subscribe:s1r};let e=r.current;if(e.select=i,e.source!==t||e.notifier!==n)e.notifier=n,e.subscribe=t?n?.paced(t.subscribe)??t.subscribe:s1r;if(e.source!==t)e.source=t,e.last=null,e.get=t?()=>{let s=t.getSnapshot(),o=e.select;if(!o)return s;let u=e.last;if(u!==null&&u.snapshot===s&&u.select===o)return u.selected;let l=o(s);return e.last={snapshot:s,select:o,selected:l},l}:c;return Tt(e.subscribe,e.get,e.get)}
export{s1r,He};
