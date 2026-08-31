// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{K}from"./chunk-38213y7h.js";import{QX,UTe,Fne,BTe,jTe}from"./chunk-5ahs0h92.js";import{yk}from"./chunk-yx9c8yaw.js";import{BW,Sv,a7}from"./chunk-fy12d89p.js";import{zte}from"./chunk-0dmh9bdb.js";import{Xue}from"./chunk-vtkm0ky0.js";import{P0}from"./chunk-t0drmbm8.js";function SUe(o,s,t){P0("conversation_reset"),yk("conversation_reset"),Sv(BW),BTe(),Fne(),QX(),jTe(),UTe(),Xue();let e=K();for(let r of zte(o.sessionHooksRegistry,e))o.sessionHooksRegistry.remove(e,"Stop",r);t(),a7(),o.applyMessageOp({type:"replace-all",messages:s})}
export{SUe};
