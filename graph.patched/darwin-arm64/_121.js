// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Eba as n,Eta as s,Fba as c,Gta as b,Vka as l,Wka as g,wea as r,xea as u}from"./_444.js";import{lKb as p,uKb as h}from"./_580.js";import{bad as a}from"./_797.js";import{xad as T}from"./_798.js";u();c();g();b();a();h();function M(o){return f(o,[...n()?l():[],...r()?[s]:[]])}function P(o,e){return f(o,[...n()?l():[],...r()&&!T.CLAUDE_CODE_SIMPLE?[s]:[]].filter((t)=>t.isEnabled()&&!p(e,t)))}function f(o,e){if(e.length===0)return o;let t=new Set(o.map((i)=>i.name)),m=e.filter((i)=>!t.has(i.name));return m.length>0?[...o,...m]:o}
export{M as Nn,P as On};
