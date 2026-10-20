// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{V}from"./chunk-bvyh9k23.js";import{YKs,fb,Mt}from"./chunk-bvn0epzr.js";import{G0}from"./chunk-80grewx2.js";import{wd}from"./chunk-vk0g8agk.js";import{DQt,xUe}from"./chunk-na9nw575.js";import{P,ee,vy,B}from"./chunk-2txtxkxk.js";B();function t(){let[o,e]=vy((s)=>s+1,0);return P(()=>YKs(e),[]),o}function ysr(o,e){return DQt(o)??DQt(e)??fb()}function W0(o){return Mt(ysr(o.mainLoopModelForSession,o.mainLoopModel))}function O_e(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=G0(),i=t(),r=wd();return ee(()=>xUe(e,o),[e,o,s,r,i])}function qVe(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=G0(),i=t(),r=wd();return ee(()=>ysr(e,o),[e,o,s,r,i])}function Bu(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=G0(),i=t(),r=wd();return ee(()=>W0({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,s,r,i])}
export{ysr,W0,O_e,qVe,Bu};
