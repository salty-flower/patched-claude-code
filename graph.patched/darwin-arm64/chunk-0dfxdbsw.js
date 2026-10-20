// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Rr,b0,je}from"./chunk-jjgc4sar.js";import{ag}from"./chunk-hf1d5ysc.js";import{tm}from"./chunk-tdxkq523.js";import{ig}from"./chunk-tx4cjw3a.js";import{z}from"./chunk-p017vfx2.js";import{basename as u,dirname as c,isAbsolute as l,join as p,relative as k,sep as f}from"path";import{isAbsolute as S,sep as a}from"path";function g(e){let n=process.cwd();return n.endsWith(a)?n+e:n+a+e}function N0t(e){return(n)=>e.hostFiles.realPath(tm.workspace(n===""||S(n)?n:g(n)),{native:!0})}function VT(e){return e===void 0?void 0:{hoverRestOn:z(),realPath:N0t(e)}}function m(e){return e.namespace!=="transcript"||e.journal!==void 0||e.sessionJournal!==void 0?void 0:e.agentId??null}function sf(e,n){if(!z()||n===void 0)return;if(typeof e!=="string")return m(e.key)===null?{backend:n,key:e.key}:void 0;if(!e.endsWith(".jsonl"))return;let t=c(e);if(c(t)!==ag())return;let r=u(t),o=u(e,".jsonl");if(e!==p(ag(),r,`${o}.jsonl`))return;let d=je.transcript(r,o);return ig(d)===void 0?{backend:n,key:d}:void 0}function axs(e,n){if(!z()||n===void 0)return;if(typeof e!=="string")return typeof m(e.key)==="string"?{backend:n,key:e.key}:void 0;let t=k(ag(),e);if(t===""||t===".."||t.startsWith(`..${f}`)||l(t))return;let r=t.split(f);if(e!==p(ag(),...r))return;let o=r.at(-1);if(r.length<4||r[2]!=="subagents"||o===void 0||!o.startsWith("agent-")||!o.endsWith(".jsonl"))return;let d=o.slice(6,-6),i=r.slice(3,-1);if(!b0([r[0],r[1],d])||i.length>0&&!b0(i))return;let s=je.transcript(r[0],r[1],d,i.length>0?i:void 0);return ig(s)===void 0?{backend:n,key:s}:void 0}function Lj(e){if(!z()||e===void 0)return;return{backend:e,transcriptKey:je.transcript,isKeySegment:Rr,realWorkspacePath:N0t(e)}}function KT(e){return e===void 0?void 0:{source:e,hoverRestOn:z()}}
export{N0t,VT,sf,axs,Lj,KT};
