// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{_n,LE,ve}from"./chunk-d6akndrs.js";import{Ic}from"./chunk-wbbe5mtc.js";import{N}from"./chunk-95e36pja.js";import{Hc}from"./chunk-2dxb0egv.js";import{Wd}from"./chunk-8rqwttv3.js";import{isAbsolute as g,sep as a}from"path";function l(e){let n=process.cwd();return n.endsWith(a)?n+e:n+a+e}function gUe(e){return(n)=>e.hostFiles.realPath(Ic.workspace(n===""||g(n)?n:l(n)),{native:!0})}function om(e){return e===void 0?void 0:{hoverRestOn:N(),realPath:gUe(e)}}import{basename as c,dirname as u,isAbsolute as S,join as p,relative as m,sep as f}from"path";function Ru(e,n){if(!N()||n===void 0)return;if(!e.endsWith(".jsonl"))return;let t=u(e);if(u(t)!==Hc())return;let r=c(t),o=c(e,".jsonl");if(e!==p(Hc(),r,`${o}.jsonl`))return;let i=ve.transcript(r,o);return Wd(i)===void 0?{backend:n,key:i}:void 0}function Kor(e,n){if(!N()||n===void 0)return;let t=m(Hc(),e);if(t===""||t===".."||t.startsWith(`..${f}`)||S(t))return;let r=t.split(f);if(e!==p(Hc(),...r))return;let o=r.at(-1);if(r.length<4||r[2]!=="subagents"||o===void 0||!o.startsWith("agent-")||!o.endsWith(".jsonl"))return;let i=o.slice(6,-6),d=r.slice(3,-1);if(!LE([r[0],r[1],i])||d.length>0&&!LE(d))return;let s=ve.transcript(r[0],r[1],i,d.length>0?d:void 0);return Wd(s)===void 0?{backend:n,key:s}:void 0}function IF(e){if(!N()||e===void 0)return;return{backend:e,transcriptKey:ve.transcript,isKeySegment:_n,realWorkspacePath:gUe(e)}}function cy(e){return e===void 0?void 0:{source:e,hoverRestOn:N()}}
export{gUe,om,Ru,Kor,IF,cy};
