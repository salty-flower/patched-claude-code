// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{nr,ZP,De}from"./chunk-wq75sevg.js";import{U}from"./chunk-ht3pd6g4.js";import{af}from"./chunk-1affnqfa.js";import{Mp}from"./chunk-f8eqwxpt.js";import{ng}from"./chunk-ts0309p1.js";import{isAbsolute as g,sep as a}from"path";function l(e){let n=process.cwd();return n.endsWith(a)?n+e:n+a+e}function nyt(e){return(n)=>e.hostFiles.realPath(Mp.workspace(n===""||g(n)?n:l(n)),{native:!0})}function _v(e){return e===void 0?void 0:{hoverRestOn:U(),realPath:nyt(e)}}import{basename as c,dirname as u,isAbsolute as S,join as p,relative as m,sep as f}from"path";function xf(e,n){if(!U()||n===void 0)return;if(!e.endsWith(".jsonl"))return;let t=u(e);if(u(t)!==af())return;let r=c(t),o=c(e,".jsonl");if(e!==p(af(),r,`${o}.jsonl`))return;let i=De.transcript(r,o);return ng(i)===void 0?{backend:n,key:i}:void 0}function R6o(e,n){if(!U()||n===void 0)return;let t=m(af(),e);if(t===""||t===".."||t.startsWith(`..${f}`)||S(t))return;let r=t.split(f);if(e!==p(af(),...r))return;let o=r.at(-1);if(r.length<4||r[2]!=="subagents"||o===void 0||!o.startsWith("agent-")||!o.endsWith(".jsonl"))return;let i=o.slice(6,-6),d=r.slice(3,-1);if(!ZP([r[0],r[1],i])||d.length>0&&!ZP(d))return;let s=De.transcript(r[0],r[1],i,d.length>0?d:void 0);return ng(s)===void 0?{backend:n,key:s}:void 0}function uB(e){if(!U()||e===void 0)return;return{backend:e,transcriptKey:De.transcript,isKeySegment:nr,realWorkspacePath:nyt(e)}}function yw(e){return e===void 0?void 0:{source:e,hoverRestOn:U()}}
export{nyt,_v,xf,R6o,uB,yw};
