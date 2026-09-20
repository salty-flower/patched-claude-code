// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Hn,CA,ke}from"./chunk-aj022wxj.js";import{Cu}from"./chunk-qmm87fyw.js";import{F}from"./chunk-n93bke93.js";import{vu}from"./chunk-rffpe63a.js";import{Jp}from"./chunk-w0wezkwh.js";import{isAbsolute as g,sep as a}from"path";function l(e){let n=process.cwd();return n.endsWith(a)?n+e:n+a+e}function P3e(e){return(n)=>e.hostFiles.realPath(Cu.workspace(n===""||g(n)?n:l(n)),{native:!0})}function rg(e){return e===void 0?void 0:{hoverRestOn:F(),realPath:P3e(e)}}import{basename as c,dirname as u,isAbsolute as S,join as p,relative as m,sep as f}from"path";function kd(e,n){if(!F()||n===void 0)return;if(!e.endsWith(".jsonl"))return;let t=u(e);if(u(t)!==vu())return;let r=c(t),o=c(e,".jsonl");if(e!==p(vu(),r,`${o}.jsonl`))return;let i=ke.transcript(r,o);return Jp(i)===void 0?{backend:n,key:i}:void 0}function Jxr(e,n){if(!F()||n===void 0)return;let t=m(vu(),e);if(t===""||t===".."||t.startsWith(`..${f}`)||S(t))return;let r=t.split(f);if(e!==p(vu(),...r))return;let o=r.at(-1);if(r.length<4||r[2]!=="subagents"||o===void 0||!o.startsWith("agent-")||!o.endsWith(".jsonl"))return;let i=o.slice(6,-6),d=r.slice(3,-1);if(!CA([r[0],r[1],i])||d.length>0&&!CA(d))return;let s=ke.transcript(r[0],r[1],i,d.length>0?d:void 0);return Jp(s)===void 0?{backend:n,key:s}:void 0}function bU(e){if(!F()||e===void 0)return;return{backend:e,transcriptKey:ke.transcript,isKeySegment:Hn,realWorkspacePath:P3e(e)}}function A_(e){return e===void 0?void 0:{source:e,hoverRestOn:F()}}
export{P3e,rg,kd,Jxr,bU,A_};
