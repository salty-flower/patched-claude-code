// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Q}from"./chunk-yhfssb7x.js";import{gQ,tRe,Pie,nRe,rRe}from"./chunk-6j3359ht.js";import{m3,iS,jk,tpe}from"./chunk-5e9qk3ys.js";import{Ooe}from"./chunk-sqqb4t8f.js";import{gme}from"./chunk-p7px6kyx.js";import{TH}from"./chunk-rrbmvjw6.js";function FWe(o,s,t){TH("conversation_reset"),jk("conversation_reset"),iS(m3),nRe(),Pie(),gQ(),rRe(),tRe(),gme();let e=Q();for(let r of Ooe(o.sessionHooksRegistry,e))o.sessionHooksRegistry.remove(e,"Stop",r);t(),tpe(),o.applyMessageOp({type:"replace-all",messages:s})}
export{FWe};
