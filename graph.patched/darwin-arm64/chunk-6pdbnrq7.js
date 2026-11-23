// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{lno}from"./chunk-wc3psek1.js";import{Gi}from"./chunk-b2f7pn4f.js";import{ce,Ee,dde,an,x,y,j}from"./chunk-07a1744w.js";j();var hM=150,Lo=250,$Rn=700,lpt=1000,T8=600;function Ui(n,r,t=hM){let e=n()-r;if(e>=0)return e<t;return r<=Date.now()}function Tdr(n){let r=Gi(),[t,e]=y(()=>({key:n,at:Date.now()}));if(t.key!==n)e({key:n,at:Date.now()});let a=MT(t.at);return function(){return Ui(r,a(t.at))}}function MT(n){let[r]=y(()=>n!==0&&Date.now()-n>=hM?n:0),t=n===r?0:n,e=x({stamp:0,at:0,painted:!1}),a=Ee(lno)??s;return dde(()=>{if(t===0||e.current.stamp===t&&e.current.painted)return;let o=e.current.stamp===t?e.current.at:t;e.current={stamp:t,at:o,painted:!1};let u=a(()=>{e.current={stamp:t,at:Math.max(e.current.at,Date.now()),painted:!0},u()});return u},[t,a]),an(()=>{if(t!==0&&e.current.stamp===t&&!e.current.painted)e.current={stamp:t,at:Math.max(t,Date.now()),painted:!1}},[t]),ce((o)=>o===e.current.stamp?e.current.at:o,[])}function s(){return()=>{}}
export{hM,Lo,$Rn,lpt,T8,Ui,Tdr,MT};
