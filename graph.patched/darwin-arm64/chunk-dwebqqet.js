// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{a}from"./chunk-w3k8bej2.js";import{NNt,cIe,eg}from"./chunk-fy12d89p.js";import{_s}from"./chunk-9mcb844f.js";import{ty}from"./chunk-hdmehzg7.js";function Att(o){return r(o,[...ty()?cIe():[],...NNt()?[eg]:[]])}function JOn(o,e){return r(o,[...ty()?cIe():[],...NNt()&&!a.CLAUDE_CODE_SIMPLE?[eg]:[]].filter((t)=>t.isEnabled()&&!_s(e,t)))}function r(o,e){if(e.length===0)return o;let t=new Set(o.map((i)=>i.name)),n=e.filter((i)=>!t.has(i.name));return n.length>0?[...o,...n]:o}
export{Att,JOn};
