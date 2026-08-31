// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{R_}from"./chunk-af80z9sa.js";import{rt}from"./chunk-870sakbg.js";import{se}from"./chunk-vs9s624w.js";var Qtt="session running",mBe="session waiting for a prompt",f="session waiting",c=" \xB7 ",l=/^[0-9a-f]{8}$/,u=20;function B7t(e){let t=e.split(R_).map((n)=>n.trim()).filter(Boolean);if(t.length===0)return;let[r,...i]=t;return i.length===0?r:`${r} ${R_} ${i.join(c)}`}function j7t(e){if(!e.startsWith(Qtt)&&!e.startsWith(mBe))return null;if(e.includes(`
`))return null;let t=e.split(c),r=t[0];if(r!==Qtt&&r!==mBe)return null;let i=t.findLastIndex((p)=>l.test(p)),n=i===-1?void 0:t[i],s=i===-1?t.length:i,o=t.slice(1,s),a=o.length>0?o.join(c):void 0,d=i===-1?[]:t.slice(i+1);return{state:r,name:a,id:n,chips:d}}function W7t(e,t,r=!0){let i=(s)=>se(Qkt(s)),n={...e,chips:[...e.chips]};if(i(n)<=t)return n;if(n.state===mBe){if(n={...n,state:f},i(n)<=t)return n}if(n.id!==void 0&&n.name!==void 0&&r){if(n={...n,id:void 0},i(n)<=t)return n}if(n.name!==void 0){let s=i({...n,name:void 0}),o=t-s-se(c),a=se(n.name),d=a>u?Math.max(o,u):o;if(d>=1&&d<a)n={...n,name:rt(n.name,d)}}return n}function Qkt(e){return[e.state,...e.name?[e.name]:[],...e.id?[e.id]:[],...e.chips].join(c)}
export{Qtt,mBe,B7t,j7t,W7t,Qkt};
