// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{or,AI,De}from"./chunk-sd0xvc0m.js";import{B}from"./chunk-a48152q4.js";import{yf}from"./chunk-pzha2ryw.js";import{Wp}from"./chunk-b5feae42.js";import{_g}from"./chunk-yj45yszw.js";import{isAbsolute as g,sep as a}from"path";function l(e){let n=process.cwd();return n.endsWith(a)?n+e:n+a+e}function Rbt(e){return(n)=>e.hostFiles.realPath(Wp.workspace(n===""||g(n)?n:l(n)),{native:!0})}function Ok(e){return e===void 0?void 0:{hoverRestOn:B(),realPath:Rbt(e)}}import{basename as c,dirname as u,isAbsolute as S,join as p,relative as m,sep as f}from"path";function xp(e,n){if(!B()||n===void 0)return;if(!e.endsWith(".jsonl"))return;let t=u(e);if(u(t)!==yf())return;let r=c(t),o=c(e,".jsonl");if(e!==p(yf(),r,`${o}.jsonl`))return;let i=De.transcript(r,o);return _g(i)===void 0?{backend:n,key:i}:void 0}function j8o(e,n){if(!B()||n===void 0)return;let t=m(yf(),e);if(t===""||t===".."||t.startsWith(`..${f}`)||S(t))return;let r=t.split(f);if(e!==p(yf(),...r))return;let o=r.at(-1);if(r.length<4||r[2]!=="subagents"||o===void 0||!o.startsWith("agent-")||!o.endsWith(".jsonl"))return;let i=o.slice(6,-6),d=r.slice(3,-1);if(!AI([r[0],r[1],i])||d.length>0&&!AI(d))return;let s=De.transcript(r[0],r[1],i,d.length>0?d:void 0);return _g(s)===void 0?{backend:n,key:s}:void 0}function fj(e){if(!B()||e===void 0)return;return{backend:e,transcriptKey:De.transcript,isKeySegment:or,realWorkspacePath:Rbt(e)}}function Mw(e){return e===void 0?void 0:{source:e,hoverRestOn:B()}}
export{Rbt,Ok,xp,j8o,fj,Mw};
