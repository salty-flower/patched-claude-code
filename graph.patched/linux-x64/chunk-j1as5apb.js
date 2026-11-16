// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{WPr,Byt}from"./chunk-1dgfh01q.js";import{yQ,uUe,ZPe}from"./chunk-dxfba42p.js";var c=["shift+up","shift+down","ctrl+="].map(yQ);function _Dt(s,o){let e=uUe(s,"Chat",o),t=e.at(-1)??null,r=WPr()??"",n=Byt()!==null||/^(tmux|screen|ssh-session)/.test(r);if(!n&&r!=="Apple_Terminal")return t;return e.findLast((i)=>!i.some((f)=>c.some((a)=>ZPe(a,f))))??(n?t:null)}
export{_Dt};
