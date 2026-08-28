// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{q}from"./chunk-2vv5hpw3.js";import{IK,M_e,fee,O_e,$_e}from"./chunk-64kf9jzg.js";import{h0}from"./chunk-b2ayc3xb.js";import{L8,WJ,bk}from"./chunk-hrvkymct.js";import{AZ}from"./chunk-mvtec2z7.js";import{ale}from"./chunk-7b1snkza.js";import{xH}from"./chunk-cypew82r.js";function k1e(o,s,t){xH("conversation_reset"),h0("conversation_reset"),bk(WJ),O_e(),fee(),IK(),$_e(),M_e(),ale();let e=q();for(let r of AZ(o.sessionHooksRegistry,e))o.sessionHooksRegistry.remove(e,"Stop",r);t(),L8(),o.applyMessageOp({type:"replace-all",messages:s})}
export{k1e};
