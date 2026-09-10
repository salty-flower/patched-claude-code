// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{X}from"./chunk-6n7yk222.js";import{eZ,vRe,Aie,ERe,kRe}from"./chunk-4cycy900.js";import{ZR,bke,xV,fb,gfe,Coe}from"./chunk-2byjyg85.js";import{che}from"./chunk-9hc24xz7.js";import{VI}from"./chunk-nj585ctd.js";import{ISe}from"./chunk-k3cv6mb0.js";import{Vie}from"./chunk-z5jb1k2d.js";function PVe(o,e,t,i){VI("conversation_reset"),ZR("conversation_reset"),fb(xV),ERe(),Aie(),eZ(),kRe(),vRe(),che();let s=X();for(let r of Vie(o.sessionHooksRegistry,s))o.sessionHooksRegistry.remove(s,"Stop",r);t(),gfe(),o.markConversationRemote?.(),bke(e),ISe.of(i).emit(s,e.map((r)=>r.uuid)),o.applyMessageOp({type:"replace-all",messages:Coe(e)})}
export{PVe};
