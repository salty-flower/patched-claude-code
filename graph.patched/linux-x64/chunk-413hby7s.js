// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Y}from"./chunk-bj7g1p32.js";import{MJ,$Ae,Lre,MAe,OAe}from"./chunk-tr0gn2b6.js";import{iC,Hz,H_,aue}from"./chunk-y3swhsrk.js";import{Vne}from"./chunk-srca89dm.js";import{bfe}from"./chunk-0f17k2rm.js";import{PI}from"./chunk-q2ys7ygz.js";function _2e(o,s,t){PI("conversation_reset"),iC("conversation_reset"),H_(Hz),MAe(),Lre(),MJ(),OAe(),$Ae(),bfe();let e=Y();for(let r of Vne(o.sessionHooksRegistry,e))o.sessionHooksRegistry.remove(e,"Stop",r);t(),aue(),o.applyMessageOp({type:"replace-all",messages:s})}
export{_2e};
