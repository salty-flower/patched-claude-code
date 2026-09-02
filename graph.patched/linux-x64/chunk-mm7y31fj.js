// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{a}from"./chunk-m9gbfvns.js";import{OOt,aLe,eg}from"./chunk-h6btyxas.js";import{ys}from"./chunk-t0yzptsk.js";import{e_}from"./chunk-nzvbw2b4.js";function Htt(o){return r(o,[...e_()?aLe():[],...OOt()?[eg]:[]])}function VDn(o,e){return r(o,[...e_()?aLe():[],...OOt()&&!a.CLAUDE_CODE_SIMPLE?[eg]:[]].filter((t)=>t.isEnabled()&&!ys(e,t)))}function r(o,e){if(e.length===0)return o;let t=new Set(o.map((i)=>i.name)),n=e.filter((i)=>!t.has(i.name));return n.length>0?[...o,...n]:o}
export{Htt,VDn};
