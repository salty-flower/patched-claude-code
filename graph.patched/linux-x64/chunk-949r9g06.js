// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{$to}from"./chunk-1fpwqakg.js";import{Wi}from"./chunk-bzk3ayzm.js";import{ce,ve,tde,an,x,y,j}from"./chunk-mp0bjfh5.js";j();var p0=150,Lo=250,vRn=700,ept=1000,_9=600;function $i(n,r,t=p0){let e=n()-r;if(e>=0)return e<t;return r<=Date.now()}function ndr(n){let r=Wi(),[t,e]=y(()=>({key:n,at:Date.now()}));if(t.key!==n)e({key:n,at:Date.now()});let a=PT(t.at);return function(){return $i(r,a(t.at))}}function PT(n){let[r]=y(()=>n!==0&&Date.now()-n>=p0?n:0),t=n===r?0:n,e=x({stamp:0,at:0,painted:!1}),a=ve($to)??s;return tde(()=>{if(t===0||e.current.stamp===t&&e.current.painted)return;let o=e.current.stamp===t?e.current.at:t;e.current={stamp:t,at:o,painted:!1};let u=a(()=>{e.current={stamp:t,at:Math.max(e.current.at,Date.now()),painted:!0},u()});return u},[t,a]),an(()=>{if(t!==0&&e.current.stamp===t&&!e.current.painted)e.current={stamp:t,at:Math.max(t,Date.now()),painted:!1}},[t]),ce((o)=>o===e.current.stamp?e.current.at:o,[])}function s(){return()=>{}}
export{p0,Lo,vRn,ept,_9,$i,ndr,PT};
