// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{jg}from"./chunk-c5jf7pfc.js";import{ot}from"./chunk-c47g9nt4.js";import{ie}from"./chunk-8atg8g31.js";var CQe="session running",gFe="session waiting for a prompt",f="session waiting",c=" \xB7 ",l=/^[0-9a-f]{8}$/,u=20;function yqt(e){let t=e.split(jg).map((n)=>n.trim()).filter(Boolean);if(t.length===0)return;let[r,...i]=t;return i.length===0?r:`${r} ${jg} ${i.join(c)}`}function _qt(e){if(!e.startsWith(CQe)&&!e.startsWith(gFe))return null;if(e.includes(`
`))return null;let t=e.split(c),r=t[0];if(r!==CQe&&r!==gFe)return null;let i=t.findLastIndex((p)=>l.test(p)),n=i===-1?void 0:t[i],s=i===-1?t.length:i,o=t.slice(1,s),a=o.length>0?o.join(c):void 0,d=i===-1?[]:t.slice(i+1);return{state:r,name:a,id:n,chips:d}}function bqt(e,t,r=!0){let i=(s)=>ie($Et(s)),n={...e,chips:[...e.chips]};if(i(n)<=t)return n;if(n.state===gFe){if(n={...n,state:f},i(n)<=t)return n}if(n.id!==void 0&&n.name!==void 0&&r){if(n={...n,id:void 0},i(n)<=t)return n}if(n.name!==void 0){let s=i({...n,name:void 0}),o=t-s-ie(c),a=ie(n.name),d=a>u?Math.max(o,u):o;if(d>=1&&d<a)n={...n,name:ot(n.name,d)}}return n}function $Et(e){return[e.state,...e.name?[e.name]:[],...e.id?[e.id]:[],...e.chips].join(c)}
export{CQe,gFe,yqt,_qt,bqt,$Et};
