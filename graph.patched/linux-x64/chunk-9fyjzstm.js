// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Zt,Kd,we}from"./chunk-wsjwtx5h.js";import{sa}from"./chunk-vv42w3zb.js";import{Kn}from"./chunk-cn7kmt56.js";import{DHe}from"./chunk-2d4sqmsz.js";import{D}from"./chunk-jw0x5qwf.js";import{basename as u,dirname as c,isAbsolute as p,join as f,relative as S,sep as a}from"path";function Oc(e,i){if(!D()||i===void 0)return;if(!e.endsWith(".jsonl"))return;let r=c(e);if(c(r)!==sa())return;let n=u(r),t=u(e,".jsonl");if(e!==f(sa(),n,`${t}.jsonl`))return;let o=we.transcript(n,t);return Kn(o)===void 0?{backend:i,key:o}:void 0}function l8n(e,i){if(!D()||i===void 0)return;let r=S(sa(),e);if(r===""||r===".."||r.startsWith(`..${a}`)||p(r))return;let n=r.split(a);if(e!==f(sa(),...n))return;let t=n.at(-1);if(n.length<4||n[2]!=="subagents"||t===void 0||!t.startsWith("agent-")||!t.endsWith(".jsonl"))return;let o=t.slice(6,-6),d=n.slice(3,-1);if(!Kd([n[0],n[1],o])||d.length>0&&!Kd(d))return;let s=we.transcript(n[0],n[1],o,d.length>0?d:void 0);return Kn(s)===void 0?{backend:i,key:s}:void 0}function Og(e){if(!D()||e===void 0)return;return{backend:e,transcriptKey:we.transcript,isKeySegment:Zt,realWorkspacePath:DHe(e)}}function hd(e){return e===void 0?void 0:{source:e,hoverRestOn:D()}}
export{Oc,l8n,Og,hd};
