// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{K}from"./chunk-zhtwayh2.js";import{GY,WAe,Ure,GAe,qAe}from"./chunk-66g436g1.js";import{pk,I9,Ty,mue}from"./chunk-1692k4g5.js";import{ere}from"./chunk-5k70ygvq.js";import{bpe}from"./chunk-0pdgmnn6.js";import{Bx}from"./chunk-wts8cfz5.js";function x6e(o,s,t){Bx("conversation_reset"),pk("conversation_reset"),Ty(I9),GAe(),Ure(),GY(),qAe(),WAe(),bpe();let e=K();for(let r of ere(o.sessionHooksRegistry,e))o.sessionHooksRegistry.remove(e,"Stop",r);t(),mue(),o.applyMessageOp({type:"replace-all",messages:s})}
export{x6e};
