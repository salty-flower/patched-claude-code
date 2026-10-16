// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Er,qM,Ue}from"./chunk-zg8w8y5z.js";import{z}from"./chunk-qeqy4res.js";import{$m}from"./chunk-sbc6y92x.js";import{Nf}from"./chunk-cwsn6mdf.js";import{Nm}from"./chunk-n1y0nb3t.js";import{basename as u,dirname as c,isAbsolute as l,join as p,relative as k,sep as f}from"path";import{isAbsolute as S,sep as a}from"path";function g(e){let n=process.cwd();return n.endsWith(a)?n+e:n+a+e}function EIt(e){return(n)=>e.hostFiles.realPath(Nf.workspace(n===""||S(n)?n:g(n)),{native:!0})}function cA(e){return e===void 0?void 0:{hoverRestOn:z(),realPath:EIt(e)}}function m(e){return e.namespace!=="transcript"||e.journal!==void 0||e.sessionJournal!==void 0?void 0:e.agentId??null}function Bp(e,n){if(!z()||n===void 0)return;if(typeof e!=="string")return m(e.key)===null?{backend:n,key:e.key}:void 0;if(!e.endsWith(".jsonl"))return;let t=c(e);if(c(t)!==$m())return;let r=u(t),o=u(e,".jsonl");if(e!==p($m(),r,`${o}.jsonl`))return;let d=Ue.transcript(r,o);return Nm(d)===void 0?{backend:n,key:d}:void 0}function s_s(e,n){if(!z()||n===void 0)return;if(typeof e!=="string")return typeof m(e.key)==="string"?{backend:n,key:e.key}:void 0;let t=k($m(),e);if(t===""||t===".."||t.startsWith(`..${f}`)||l(t))return;let r=t.split(f);if(e!==p($m(),...r))return;let o=r.at(-1);if(r.length<4||r[2]!=="subagents"||o===void 0||!o.startsWith("agent-")||!o.endsWith(".jsonl"))return;let d=o.slice(6,-6),i=r.slice(3,-1);if(!qM([r[0],r[1],d])||i.length>0&&!qM(i))return;let s=Ue.transcript(r[0],r[1],d,i.length>0?i:void 0);return Nm(s)===void 0?{backend:n,key:s}:void 0}function j1(e){if(!z()||e===void 0)return;return{backend:e,transcriptKey:Ue.transcript,isKeySegment:Er,realWorkspacePath:EIt(e)}}function uA(e){return e===void 0?void 0:{source:e,hoverRestOn:z()}}
export{EIt,cA,Bp,s_s,j1,uA};
