// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{fZc as T,gYc as f}from"./_757.js";import{L1c as j,u1c as o}from"./_766.js";import{W1c as m,X1c as a,b2c as c,j2c as b}from"./_768.js";import{etd as s,gtd as h}from"./_825.js";import{Exd as y}from"./_839.js";import{basename as S,dirname as g,isAbsolute as V,join as k,relative as v,sep as l}from"path";function I(e,i){if(!s()||i===void 0)return;if(!e.endsWith(".jsonl"))return;let r=g(e);if(g(r)!==o())return;let n=S(r),t=S(e,".jsonl");if(e!==k(o(),n,`${t}.jsonl`))return;let d=c.transcript(n,t);return f(d)===void 0?{backend:i,key:d}:void 0}function O(e,i){if(!s()||i===void 0)return;let r=v(o(),e);if(r===""||r===".."||r.startsWith(`..${l}`)||V(r))return;let n=r.split(l);if(e!==k(o(),...n))return;let t=n.at(-1);if(n.length<4||n[2]!=="subagents"||t===void 0||!t.startsWith("agent-")||!t.endsWith(".jsonl"))return;let d=t.slice(6,-6),u=n.slice(3,-1);if(!a([n[0],n[1],d])||u.length>0&&!a(u))return;let p=c.transcript(n[0],n[1],d,u.length>0?u:void 0);return f(p)===void 0?{backend:i,key:p}:void 0}function D(e){if(!s()||e===void 0)return;return{backend:e,transcriptKey:c.transcript,isKeySegment:m}}function A(e){return e===void 0?void 0:{source:e,hoverRestOn:s()}}var x=y(()=>{h();b();T();j()});
export{I as Ekb,O as Fkb,D as Gkb,A as Hkb,x as Ikb};
