// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{h1r}from"./chunk-qfycx4yg.js";import{sa}from"./chunk-v5qk8x3w.js";import{ue,Ee,Ore,Zt,R,y,j}from"./chunk-rt5zqm44.js";j();var OO=150,Co=250;var aJ=600;function la(n,r,t=OO){let e=n()-r;if(e>=0)return e<t;return r<=Date.now()}function o3n(n){let r=sa(),[t,e]=y(()=>({key:n,at:Date.now()}));if(t.key!==n)e({key:n,at:Date.now()});let a=Vk(t.at);return function(){return la(r,a(t.at))}}function Vk(n){let[r]=y(()=>n!==0&&Date.now()-n>=OO?n:0),t=n===r?0:n,e=R({stamp:0,at:0,painted:!1}),a=Ee(h1r)??s;return Ore(()=>{if(t===0||e.current.stamp===t&&e.current.painted)return;let o=e.current.stamp===t?e.current.at:t;e.current={stamp:t,at:o,painted:!1};let u=a(()=>{e.current={stamp:t,at:Math.max(e.current.at,Date.now()),painted:!0},u()});return u},[t,a]),Zt(()=>{if(t!==0&&e.current.stamp===t&&!e.current.painted)e.current={stamp:t,at:Math.max(t,Date.now()),painted:!1}},[t]),ue((o)=>o===e.current.stamp?e.current.at:o,[])}function s(){return()=>{}}
export{OO,Co,aJ,la,o3n,Vk};
