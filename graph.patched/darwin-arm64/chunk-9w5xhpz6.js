// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{sn,np,Ce}from"./chunk-a190bznh.js";import{L}from"./chunk-0xdcm8sp.js";import{fu}from"./chunk-84crg0gy.js";import{pa}from"./chunk-h9sag63s.js";import{qn}from"./chunk-f4hwpxyv.js";import{isAbsolute as g,sep as a}from"path";function l(e){let n=process.cwd();return n.endsWith(a)?n+e:n+a+e}function v1e(e){return(n)=>e.hostFiles.realPath(fu.workspace(n===""||g(n)?n:l(n)),{native:!0})}function ju(e){return e===void 0?void 0:{hoverRestOn:L(),realPath:v1e(e)}}import{basename as c,dirname as u,isAbsolute as S,join as p,relative as m,sep as f}from"path";function fl(e,n){if(!L()||n===void 0)return;if(!e.endsWith(".jsonl"))return;let t=u(e);if(u(t)!==pa())return;let r=c(t),o=c(e,".jsonl");if(e!==p(pa(),r,`${o}.jsonl`))return;let i=Ce.transcript(r,o);return qn(i)===void 0?{backend:n,key:i}:void 0}function ger(e,n){if(!L()||n===void 0)return;let t=m(pa(),e);if(t===""||t===".."||t.startsWith(`..${f}`)||S(t))return;let r=t.split(f);if(e!==p(pa(),...r))return;let o=r.at(-1);if(r.length<4||r[2]!=="subagents"||o===void 0||!o.startsWith("agent-")||!o.endsWith(".jsonl"))return;let i=o.slice(6,-6),d=r.slice(3,-1);if(!np([r[0],r[1],i])||d.length>0&&!np(d))return;let s=Ce.transcript(r[0],r[1],i,d.length>0?d:void 0);return qn(s)===void 0?{backend:n,key:s}:void 0}function Qg(e){if(!L()||e===void 0)return;return{backend:e,transcriptKey:Ce.transcript,isKeySegment:sn,realWorkspacePath:v1e(e)}}function vu(e){return e===void 0?void 0:{source:e,hoverRestOn:L()}}
export{v1e,ju,fl,ger,Qg,vu};
