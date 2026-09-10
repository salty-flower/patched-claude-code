// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{_n,Ov,ke}from"./chunk-qrernxw9.js";import{Pc}from"./chunk-cmg3b5hg.js";import{N}from"./chunk-mtqrv1h8.js";import{Ic}from"./chunk-v365e4sa.js";import{zd}from"./chunk-f4019nt1.js";import{isAbsolute as g,sep as a}from"path";function l(e){let n=process.cwd();return n.endsWith(a)?n+e:n+a+e}function tBe(e){return(n)=>e.hostFiles.realPath(Pc.workspace(n===""||g(n)?n:l(n)),{native:!0})}function rm(e){return e===void 0?void 0:{hoverRestOn:N(),realPath:tBe(e)}}import{basename as c,dirname as u,isAbsolute as S,join as p,relative as m,sep as f}from"path";function Cu(e,n){if(!N()||n===void 0)return;if(!e.endsWith(".jsonl"))return;let t=u(e);if(u(t)!==Ic())return;let r=c(t),o=c(e,".jsonl");if(e!==p(Ic(),r,`${o}.jsonl`))return;let i=ke.transcript(r,o);return zd(i)===void 0?{backend:n,key:i}:void 0}function uor(e,n){if(!N()||n===void 0)return;let t=m(Ic(),e);if(t===""||t===".."||t.startsWith(`..${f}`)||S(t))return;let r=t.split(f);if(e!==p(Ic(),...r))return;let o=r.at(-1);if(r.length<4||r[2]!=="subagents"||o===void 0||!o.startsWith("agent-")||!o.endsWith(".jsonl"))return;let i=o.slice(6,-6),d=r.slice(3,-1);if(!Ov([r[0],r[1],i])||d.length>0&&!Ov(d))return;let s=ke.transcript(r[0],r[1],i,d.length>0?d:void 0);return zd(s)===void 0?{backend:n,key:s}:void 0}function kN(e){if(!N()||e===void 0)return;return{backend:e,transcriptKey:ke.transcript,isKeySegment:_n,realWorkspacePath:tBe(e)}}function ly(e){return e===void 0?void 0:{source:e,hoverRestOn:N()}}
export{tBe,rm,Cu,uor,kN,ly};
