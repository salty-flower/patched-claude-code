// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Hr}from"./chunk-764j5mtt.js";import{rt}from"./chunk-j35pah18.js";import{ok,Tx,ik}from"./chunk-me5zajm3.js";import{se}from"./chunk-vs9s624w.js";var vCt=3,Oz=Math.max(2*ok,2*(ik+Tx)),Nz=20;function Kme(i,m,r=vCt+1){let e=Math.max(Nz,m-Oz),t=i.split(`
`).map((n)=>rt(n,e));if(t.length<=r)return t.join(`
`);if(r<=1){let n=` \u2026 (+${t.length-1} more lines)`;return rt(Hr(i),Math.max(1,e-se(n)))+n}let o=r-1;return t.slice(0,o).join(`
`)+`
\u2026 (+${t.length-o} more lines)`}
export{vCt,Oz,Nz,Kme};
