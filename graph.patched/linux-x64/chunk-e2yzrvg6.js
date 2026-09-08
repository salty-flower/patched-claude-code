// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import{X}from"./chunk-k6vqz9fa.js";import{b7,wve,woe,Eve,Ave}from"./chunk-s4jfa5rt.js";import{fC,GHe,VW,R_,$ue}from"./chunk-9wa0ka8p.js";import{zoe}from"./chunk-tpbaacey.js";import{cpe}from"./chunk-ksnqt1rs.js";import{jR}from"./chunk-2c0zm87n.js";import{Yye}from"./chunk-z8vany77.js";function WGe(o,e,r,i){jR("conversation_reset"),fC("conversation_reset"),R_(VW),Eve(),woe(),b7(),Ave(),wve(),cpe();let s=X();for(let t of zoe(o.sessionHooksRegistry,s))o.sessionHooksRegistry.remove(s,"Stop",t);r(),$ue(),GHe(e),Yye.of(i).emit(s,e.map((t)=>t.uuid)),o.applyMessageOp({type:"replace-all",messages:e})}
export{WGe};
