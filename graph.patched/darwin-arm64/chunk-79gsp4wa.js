// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Zt,Xd,Te}from"./chunk-8ath6mn8.js";import{aa}from"./chunk-4ngx0mjr.js";import{Kn}from"./chunk-1hpjnncp.js";import{Nwe}from"./chunk-xn9j1h6b.js";import{O}from"./chunk-vvpqfcj1.js";import{basename as u,dirname as c,isAbsolute as p,join as f,relative as S,sep as a}from"path";function Nc(e,i){if(!O()||i===void 0)return;if(!e.endsWith(".jsonl"))return;let r=c(e);if(c(r)!==aa())return;let n=u(r),t=u(e,".jsonl");if(e!==f(aa(),n,`${t}.jsonl`))return;let o=Te.transcript(n,t);return Kn(o)===void 0?{backend:i,key:o}:void 0}function w5n(e,i){if(!O()||i===void 0)return;let r=S(aa(),e);if(r===""||r===".."||r.startsWith(`..${a}`)||p(r))return;let n=r.split(a);if(e!==f(aa(),...n))return;let t=n.at(-1);if(n.length<4||n[2]!=="subagents"||t===void 0||!t.startsWith("agent-")||!t.endsWith(".jsonl"))return;let o=t.slice(6,-6),d=n.slice(3,-1);if(!Xd([n[0],n[1],o])||d.length>0&&!Xd(d))return;let s=Te.transcript(n[0],n[1],o,d.length>0?d:void 0);return Kn(s)===void 0?{backend:i,key:s}:void 0}function Ng(e){if(!O()||e===void 0)return;return{backend:e,transcriptKey:Te.transcript,isKeySegment:Zt,realWorkspacePath:Nwe(e)}}function _d(e){return e===void 0?void 0:{source:e,hoverRestOn:O()}}
export{Nc,w5n,Ng,_d};
