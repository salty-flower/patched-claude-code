// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{wOr,Yyt}from"./chunk-5pkrg96e.js";import{AQ,h$e,oOe}from"./chunk-rdq2tvt1.js";var c=["shift+up","shift+down","ctrl+="].map(AQ);function EDt(s,o){let e=h$e(s,"Chat",o),t=e.at(-1)??null,r=wOr()??"",n=Yyt()!==null||/^(tmux|screen|ssh-session)/.test(r);if(!n&&r!=="Apple_Terminal")return t;return e.findLast((i)=>!i.some((f)=>c.some((a)=>oOe(a,f))))??(n?t:null)}
export{EDt};
