// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{K}from"./chunk-30zk17wm.js";import{YX,Owe,$ne,Nwe,Fwe}from"./chunk-8xab064f.js";import{hC}from"./chunk-bbye6npr.js";import{NG,yk,oY}from"./chunk-h6btyxas.js";import{Vte}from"./chunk-g9y9ch08.js";import{Wue}from"./chunk-0hr1ec8y.js";import{II}from"./chunk-n8nmdgpp.js";function h1e(o,s,t){II("conversation_reset"),hC("conversation_reset"),yk(NG),Nwe(),$ne(),YX(),Fwe(),Owe(),Wue();let e=K();for(let r of Vte(o.sessionHooksRegistry,e))o.sessionHooksRegistry.remove(e,"Stop",r);t(),oY(),o.applyMessageOp({type:"replace-all",messages:s})}
export{h1e};
