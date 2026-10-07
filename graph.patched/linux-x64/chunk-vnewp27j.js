// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{nr,JP,De}from"./chunk-7n5tp35k.js";import{B}from"./chunk-f16c4jnr.js";import{af}from"./chunk-h3056rfm.js";import{Hp}from"./chunk-gvn18sr5.js";import{ng}from"./chunk-j3629m0a.js";import{isAbsolute as g,sep as a}from"path";function l(e){let n=process.cwd();return n.endsWith(a)?n+e:n+a+e}function Ght(e){return(n)=>e.hostFiles.realPath(Hp.workspace(n===""||g(n)?n:l(n)),{native:!0})}function gE(e){return e===void 0?void 0:{hoverRestOn:B(),realPath:Ght(e)}}import{basename as c,dirname as u,isAbsolute as S,join as p,relative as m,sep as f}from"path";function xf(e,n){if(!B()||n===void 0)return;if(!e.endsWith(".jsonl"))return;let t=u(e);if(u(t)!==af())return;let r=c(t),o=c(e,".jsonl");if(e!==p(af(),r,`${o}.jsonl`))return;let i=De.transcript(r,o);return ng(i)===void 0?{backend:n,key:i}:void 0}function zGo(e,n){if(!B()||n===void 0)return;let t=m(af(),e);if(t===""||t===".."||t.startsWith(`..${f}`)||S(t))return;let r=t.split(f);if(e!==p(af(),...r))return;let o=r.at(-1);if(r.length<4||r[2]!=="subagents"||o===void 0||!o.startsWith("agent-")||!o.endsWith(".jsonl"))return;let i=o.slice(6,-6),d=r.slice(3,-1);if(!JP([r[0],r[1],i])||d.length>0&&!JP(d))return;let s=De.transcript(r[0],r[1],i,d.length>0?d:void 0);return ng(s)===void 0?{backend:n,key:s}:void 0}function QB(e){if(!B()||e===void 0)return;return{backend:e,transcriptKey:De.transcript,isKeySegment:nr,realWorkspacePath:Ght(e)}}function hw(e){return e===void 0?void 0:{source:e,hoverRestOn:B()}}
export{Ght,gE,xf,zGo,QB,hw};
