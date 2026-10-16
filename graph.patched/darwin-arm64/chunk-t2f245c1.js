// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{kr,J0,Ue}from"./chunk-z5vzymyr.js";import{G}from"./chunk-278j353c.js";import{Fm}from"./chunk-mn5cr59w.js";import{Lf}from"./chunk-bnfhb7sj.js";import{Nm}from"./chunk-td5pjp2j.js";import{basename as u,dirname as c,isAbsolute as l,join as p,relative as k,sep as f}from"path";import{isAbsolute as S,sep as a}from"path";function g(e){let n=process.cwd();return n.endsWith(a)?n+e:n+a+e}function MIt(e){return(n)=>e.hostFiles.realPath(Lf.workspace(n===""||S(n)?n:g(n)),{native:!0})}function fA(e){return e===void 0?void 0:{hoverRestOn:G(),realPath:MIt(e)}}function m(e){return e.namespace!=="transcript"||e.journal!==void 0||e.sessionJournal!==void 0?void 0:e.agentId??null}function Bp(e,n){if(!G()||n===void 0)return;if(typeof e!=="string")return m(e.key)===null?{backend:n,key:e.key}:void 0;if(!e.endsWith(".jsonl"))return;let t=c(e);if(c(t)!==Fm())return;let r=u(t),o=u(e,".jsonl");if(e!==p(Fm(),r,`${o}.jsonl`))return;let d=Ue.transcript(r,o);return Nm(d)===void 0?{backend:n,key:d}:void 0}function G_s(e,n){if(!G()||n===void 0)return;if(typeof e!=="string")return typeof m(e.key)==="string"?{backend:n,key:e.key}:void 0;let t=k(Fm(),e);if(t===""||t===".."||t.startsWith(`..${f}`)||l(t))return;let r=t.split(f);if(e!==p(Fm(),...r))return;let o=r.at(-1);if(r.length<4||r[2]!=="subagents"||o===void 0||!o.startsWith("agent-")||!o.endsWith(".jsonl"))return;let d=o.slice(6,-6),i=r.slice(3,-1);if(!J0([r[0],r[1],d])||i.length>0&&!J0(i))return;let s=Ue.transcript(r[0],r[1],d,i.length>0?i:void 0);return Nm(s)===void 0?{backend:n,key:s}:void 0}function QB(e){if(!G()||e===void 0)return;return{backend:e,transcriptKey:Ue.transcript,isKeySegment:kr,realWorkspacePath:MIt(e)}}function mA(e){return e===void 0?void 0:{source:e,hoverRestOn:G()}}
export{MIt,fA,Bp,G_s,QB,mA};
