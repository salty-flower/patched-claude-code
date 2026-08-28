// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{qt,Cd,Se}from"./chunk-3vs63y6b.js";import{Ms}from"./chunk-71nbrcp0.js";import{Mn}from"./chunk-chrc29xz.js";import{z_e}from"./chunk-18y7779y.js";import{H}from"./chunk-9p9ys44p.js";import{basename as u,dirname as c,isAbsolute as p,join as f,relative as S,sep as a}from"path";function oc(e,i){if(!H()||i===void 0)return;if(!e.endsWith(".jsonl"))return;let r=c(e);if(c(r)!==Ms())return;let n=u(r),t=u(e,".jsonl");if(e!==f(Ms(),n,`${t}.jsonl`))return;let o=Se.transcript(n,t);return Mn(o)===void 0?{backend:i,key:o}:void 0}function ajn(e,i){if(!H()||i===void 0)return;let r=S(Ms(),e);if(r===""||r===".."||r.startsWith(`..${a}`)||p(r))return;let n=r.split(a);if(e!==f(Ms(),...n))return;let t=n.at(-1);if(n.length<4||n[2]!=="subagents"||t===void 0||!t.startsWith("agent-")||!t.endsWith(".jsonl"))return;let o=t.slice(6,-6),d=n.slice(3,-1);if(!Cd([n[0],n[1],o])||d.length>0&&!Cd(d))return;let s=Se.transcript(n[0],n[1],o,d.length>0?d:void 0);return Mn(s)===void 0?{backend:i,key:s}:void 0}function sh(e){if(!H()||e===void 0)return;return{backend:e,transcriptKey:Se.transcript,isKeySegment:qt,realWorkspacePath:z_e(e)}}function ju(e){return e===void 0?void 0:{source:e,hoverRestOn:H()}}
export{oc,ajn,sh,ju};
