// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{_n,bE,Ce}from"./chunk-tfmhv9d3.js";import{M}from"./chunk-wmtek349.js";import{Tc}from"./chunk-w930ag8r.js";import{Cc}from"./chunk-v6bnm6m1.js";import{Md}from"./chunk-jreee4z9.js";import{isAbsolute as g,sep as a}from"path";function l(e){let n=process.cwd();return n.endsWith(a)?n+e:n+a+e}function W1e(e){return(n)=>e.hostFiles.realPath(Tc.workspace(n===""||g(n)?n:l(n)),{native:!0})}function Xf(e){return e===void 0?void 0:{hoverRestOn:M(),realPath:W1e(e)}}import{basename as c,dirname as u,isAbsolute as S,join as p,relative as m,sep as f}from"path";function Cu(e,n){if(!M()||n===void 0)return;if(!e.endsWith(".jsonl"))return;let t=u(e);if(u(t)!==Cc())return;let r=c(t),o=c(e,".jsonl");if(e!==p(Cc(),r,`${o}.jsonl`))return;let i=Ce.transcript(r,o);return Md(i)===void 0?{backend:n,key:i}:void 0}function Htr(e,n){if(!M()||n===void 0)return;let t=m(Cc(),e);if(t===""||t===".."||t.startsWith(`..${f}`)||S(t))return;let r=t.split(f);if(e!==p(Cc(),...r))return;let o=r.at(-1);if(r.length<4||r[2]!=="subagents"||o===void 0||!o.startsWith("agent-")||!o.endsWith(".jsonl"))return;let i=o.slice(6,-6),d=r.slice(3,-1);if(!bE([r[0],r[1],i])||d.length>0&&!bE(d))return;let s=Ce.transcript(r[0],r[1],i,d.length>0?d:void 0);return Md(s)===void 0?{backend:n,key:s}:void 0}function dF(e){if(!M()||e===void 0)return;return{backend:e,transcriptKey:Ce.transcript,isKeySegment:_n,realWorkspacePath:W1e(e)}}function ny(e){return e===void 0?void 0:{source:e,hoverRestOn:M()}}
export{W1e,Xf,Cu,Htr,dF,ny};
