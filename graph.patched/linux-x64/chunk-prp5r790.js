// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Ug}from"./chunk-yyzqa5fj.js";import{ot}from"./chunk-kfmtzk05.js";import{ie}from"./chunk-8atg8g31.js";var fQe="session running",eNe="session waiting for a prompt",f="session waiting",c=" \xB7 ",l=/^[0-9a-f]{8}$/,u=20;function Qqt(e){let t=e.split(Ug).map((n)=>n.trim()).filter(Boolean);if(t.length===0)return;let[r,...i]=t;return i.length===0?r:`${r} ${Ug} ${i.join(c)}`}function Zqt(e){if(!e.startsWith(fQe)&&!e.startsWith(eNe))return null;if(e.includes(`
`))return null;let t=e.split(c),r=t[0];if(r!==fQe&&r!==eNe)return null;let i=t.findLastIndex((p)=>l.test(p)),n=i===-1?void 0:t[i],s=i===-1?t.length:i,o=t.slice(1,s),a=o.length>0?o.join(c):void 0,d=i===-1?[]:t.slice(i+1);return{state:r,name:a,id:n,chips:d}}function eVt(e,t,r=!0){let i=(s)=>ie(kAt(s)),n={...e,chips:[...e.chips]};if(i(n)<=t)return n;if(n.state===eNe){if(n={...n,state:f},i(n)<=t)return n}if(n.id!==void 0&&n.name!==void 0&&r){if(n={...n,id:void 0},i(n)<=t)return n}if(n.name!==void 0){let s=i({...n,name:void 0}),o=t-s-ie(c),a=ie(n.name),d=a>u?Math.max(o,u):o;if(d>=1&&d<a)n={...n,name:ot(n.name,d)}}return n}function kAt(e){return[e.state,...e.name?[e.name]:[],...e.id?[e.id]:[],...e.chips].join(c)}
export{fQe,eNe,Qqt,Zqt,eVt,kAt};
