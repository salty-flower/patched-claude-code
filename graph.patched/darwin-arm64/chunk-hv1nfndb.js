// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{_r,pC,je}from"./chunk-x0a7sawk.js";import{im}from"./chunk-yzy35wkw.js";import{Pm}from"./chunk-d7b0m8qy.js";import{Rm}from"./chunk-vh7e37w8.js";import{z}from"./chunk-mxa4mwnj.js";import{basename as u,dirname as c,isAbsolute as l,join as p,relative as k,sep as f}from"path";import{isAbsolute as S,sep as a}from"path";function g(e){let n=process.cwd();return n.endsWith(a)?n+e:n+a+e}function L$t(e){return(n)=>e.hostFiles.realPath(Pm.workspace(n===""||S(n)?n:g(n)),{native:!0})}function GA(e){return e===void 0?void 0:{hoverRestOn:z(),realPath:L$t(e)}}function m(e){return e.namespace!=="transcript"||e.journal!==void 0||e.sessionJournal!==void 0?void 0:e.agentId??null}function Mf(e,n){if(!z()||n===void 0)return;if(typeof e!=="string")return m(e.key)===null?{backend:n,key:e.key}:void 0;if(!e.endsWith(".jsonl"))return;let t=c(e);if(c(t)!==im())return;let r=u(t),o=u(e,".jsonl");if(e!==p(im(),r,`${o}.jsonl`))return;let d=je.transcript(r,o);return Rm(d)===void 0?{backend:n,key:d}:void 0}function G1s(e,n){if(!z()||n===void 0)return;if(typeof e!=="string")return typeof m(e.key)==="string"?{backend:n,key:e.key}:void 0;let t=k(im(),e);if(t===""||t===".."||t.startsWith(`..${f}`)||l(t))return;let r=t.split(f);if(e!==p(im(),...r))return;let o=r.at(-1);if(r.length<4||r[2]!=="subagents"||o===void 0||!o.startsWith("agent-")||!o.endsWith(".jsonl"))return;let d=o.slice(6,-6),i=r.slice(3,-1);if(!pC([r[0],r[1],d])||i.length>0&&!pC(i))return;let s=je.transcript(r[0],r[1],d,i.length>0?i:void 0);return Rm(s)===void 0?{backend:n,key:s}:void 0}function A2(e){if(!z()||e===void 0)return;return{backend:e,transcriptKey:je.transcript,isKeySegment:_r,realWorkspacePath:L$t(e)}}function Hk(e){return e===void 0?void 0:{source:e,hoverRestOn:z()}}
export{L$t,GA,Mf,G1s,A2,Hk};
