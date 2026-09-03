// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{rn,qd,Ae}from"./chunk-zjtbqw2e.js";import{L}from"./chunk-ma94d7pd.js";import{ou}from"./chunk-t2jwg94b.js";import{ia}from"./chunk-0s8h31st.js";import{zn}from"./chunk-d0r3tzx0.js";import{isAbsolute as g,sep as a}from"path";function l(e){let n=process.cwd();return n.endsWith(a)?n+e:n+a+e}function JMe(e){return(n)=>e.hostFiles.realPath(ou.workspace(n===""||g(n)?n:l(n)),{native:!0})}function Iu(e){return e===void 0?void 0:{hoverRestOn:L(),realPath:JMe(e)}}import{basename as c,dirname as u,isAbsolute as S,join as p,relative as m,sep as f}from"path";function jl(e,n){if(!L()||n===void 0)return;if(!e.endsWith(".jsonl"))return;let t=u(e);if(u(t)!==ia())return;let r=c(t),o=c(e,".jsonl");if(e!==p(ia(),r,`${o}.jsonl`))return;let i=Ae.transcript(r,o);return zn(i)===void 0?{backend:n,key:i}:void 0}function FYn(e,n){if(!L()||n===void 0)return;let t=m(ia(),e);if(t===""||t===".."||t.startsWith(`..${f}`)||S(t))return;let r=t.split(f);if(e!==p(ia(),...r))return;let o=r.at(-1);if(r.length<4||r[2]!=="subagents"||o===void 0||!o.startsWith("agent-")||!o.endsWith(".jsonl"))return;let i=o.slice(6,-6),d=r.slice(3,-1);if(!qd([r[0],r[1],i])||d.length>0&&!qd(d))return;let s=Ae.transcript(r[0],r[1],i,d.length>0?d:void 0);return zn(s)===void 0?{backend:n,key:s}:void 0}function Xg(e){if(!L()||e===void 0)return;return{backend:e,transcriptKey:Ae.transcript,isKeySegment:rn,realWorkspacePath:JMe(e)}}function hu(e){return e===void 0?void 0:{source:e,hoverRestOn:L()}}
export{JMe,Iu,jl,FYn,Xg,hu};
