// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Wt,Ad,ve}from"./chunk-fz00m7zs.js";import{Os}from"./chunk-6ypvgjr3.js";import{On}from"./chunk-gxpna0zj.js";import{Jbe}from"./chunk-cy5p0mbb.js";import{D}from"./chunk-6fnbbyjg.js";import{basename as u,dirname as c,isAbsolute as p,join as f,relative as S,sep as a}from"path";function oc(e,i){if(!D()||i===void 0)return;if(!e.endsWith(".jsonl"))return;let r=c(e);if(c(r)!==Os())return;let n=u(r),t=u(e,".jsonl");if(e!==f(Os(),n,`${t}.jsonl`))return;let o=ve.transcript(n,t);return On(o)===void 0?{backend:i,key:o}:void 0}function nGn(e,i){if(!D()||i===void 0)return;let r=S(Os(),e);if(r===""||r===".."||r.startsWith(`..${a}`)||p(r))return;let n=r.split(a);if(e!==f(Os(),...n))return;let t=n.at(-1);if(n.length<4||n[2]!=="subagents"||t===void 0||!t.startsWith("agent-")||!t.endsWith(".jsonl"))return;let o=t.slice(6,-6),d=n.slice(3,-1);if(!Ad([n[0],n[1],o])||d.length>0&&!Ad(d))return;let s=ve.transcript(n[0],n[1],o,d.length>0?d:void 0);return On(s)===void 0?{backend:i,key:s}:void 0}function sh(e){if(!D()||e===void 0)return;return{backend:e,transcriptKey:ve.transcript,isKeySegment:Wt,realWorkspacePath:Jbe(e)}}function Uu(e){return e===void 0?void 0:{source:e,hoverRestOn:D()}}
export{oc,nGn,sh,Uu};
