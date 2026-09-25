// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Dn,mT,Te}from"./chunk-tcx7fvpc.js";import{N}from"./chunk-37kdx3dg.js";import{Cu}from"./chunk-97rwyxer.js";import{Wu}from"./chunk-wvb0gwjm.js";import{Lf}from"./chunk-5cz12mxk.js";import{isAbsolute as g,sep as a}from"path";function l(e){let n=process.cwd();return n.endsWith(a)?n+e:n+a+e}function Jet(e){return(n)=>e.hostFiles.realPath(Wu.workspace(n===""||g(n)?n:l(n)),{native:!0})}function ng(e){return e===void 0?void 0:{hoverRestOn:N(),realPath:Jet(e)}}import{basename as c,dirname as u,isAbsolute as S,join as p,relative as m,sep as f}from"path";function wf(e,n){if(!N()||n===void 0)return;if(!e.endsWith(".jsonl"))return;let t=u(e);if(u(t)!==Cu())return;let r=c(t),o=c(e,".jsonl");if(e!==p(Cu(),r,`${o}.jsonl`))return;let i=Te.transcript(r,o);return Lf(i)===void 0?{backend:n,key:i}:void 0}function zoo(e,n){if(!N()||n===void 0)return;let t=m(Cu(),e);if(t===""||t===".."||t.startsWith(`..${f}`)||S(t))return;let r=t.split(f);if(e!==p(Cu(),...r))return;let o=r.at(-1);if(r.length<4||r[2]!=="subagents"||o===void 0||!o.startsWith("agent-")||!o.endsWith(".jsonl"))return;let i=o.slice(6,-6),d=r.slice(3,-1);if(!mT([r[0],r[1],i])||d.length>0&&!mT(d))return;let s=Te.transcript(r[0],r[1],i,d.length>0?d:void 0);return Lf(s)===void 0?{backend:n,key:s}:void 0}function y6(e){if(!N()||e===void 0)return;return{backend:e,transcriptKey:Te.transcript,isKeySegment:Dn,realWorkspacePath:Jet(e)}}function kw(e){return e===void 0?void 0:{source:e,hoverRestOn:N()}}
export{Jet,ng,wf,zoo,y6,kw};
