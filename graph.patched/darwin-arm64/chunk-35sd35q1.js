// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{G}from"./chunk-g4zaymy2.js";import{DK,$be,yee,Bbe,Ube}from"./chunk-zz2h5e3t.js";import{y0}from"./chunk-k7g7zf27.js";import{M8,YJ,SC}from"./chunk-j5h9ds58.js";import{RZ}from"./chunk-2sx8ae03.js";import{vle}from"./chunk-4s8az3tm.js";import{Ok}from"./chunk-9yh64pnd.js";function ANe(o,s,t){Ok("conversation_reset"),y0("conversation_reset"),SC(YJ),Bbe(),yee(),DK(),Ube(),$be(),vle();let e=G();for(let r of RZ(o.sessionHooksRegistry,e))o.sessionHooksRegistry.remove(e,"Stop",r);t(),M8(),o.applyMessageOp({type:"replace-all",messages:s})}
export{ANe};
