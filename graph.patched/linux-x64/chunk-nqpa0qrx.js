// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{gn,HH,Ee}from"./chunk-fpk3t24b.js";import{O}from"./chunk-h9wtyp3p.js";import{dc}from"./chunk-1tk5haqn.js";import{Jc}from"./chunk-4c106gcs.js";import{Ad}from"./chunk-6f5agm7e.js";import{isAbsolute as g,sep as a}from"path";function l(e){let n=process.cwd();return n.endsWith(a)?n+e:n+a+e}function iMe(e){return(n)=>e.hostFiles.realPath(dc.workspace(n===""||g(n)?n:l(n)),{native:!0})}function Sp(e){return e===void 0?void 0:{hoverRestOn:O(),realPath:iMe(e)}}import{basename as c,dirname as u,isAbsolute as S,join as p,relative as m,sep as f}from"path";function cu(e,n){if(!O()||n===void 0)return;if(!e.endsWith(".jsonl"))return;let t=u(e);if(u(t)!==Jc())return;let r=c(t),o=c(e,".jsonl");if(e!==p(Jc(),r,`${o}.jsonl`))return;let i=Ee.transcript(r,o);return Ad(i)===void 0?{backend:n,key:i}:void 0}function y6n(e,n){if(!O()||n===void 0)return;let t=m(Jc(),e);if(t===""||t===".."||t.startsWith(`..${f}`)||S(t))return;let r=t.split(f);if(e!==p(Jc(),...r))return;let o=r.at(-1);if(r.length<4||r[2]!=="subagents"||o===void 0||!o.startsWith("agent-")||!o.endsWith(".jsonl"))return;let i=o.slice(6,-6),d=r.slice(3,-1);if(!HH([r[0],r[1],i])||d.length>0&&!HH(d))return;let s=Ee.transcript(r[0],r[1],i,d.length>0?d:void 0);return Ad(s)===void 0?{backend:n,key:s}:void 0}function LM(e){if(!O()||e===void 0)return;return{backend:e,transcriptKey:Ee.transcript,isKeySegment:gn,realWorkspacePath:iMe(e)}}function Ch(e){return e===void 0?void 0:{source:e,hoverRestOn:O()}}
export{iMe,Sp,cu,y6n,LM,Ch};
