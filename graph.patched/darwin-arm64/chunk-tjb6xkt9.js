// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Q}from"./chunk-hdbxv3pp.js";import{IJ,$Ce,Foe,UCe,BCe}from"./chunk-3xb6ym4e.js";import{F9,Xy,Rk,sde}from"./chunk-darxmw8c.js";import{Ire}from"./chunk-8mfdj3ha.js";import{Efe}from"./chunk-h6dvxpq1.js";import{uH}from"./chunk-4j30jhq0.js";function rje(o,s,t){uH("conversation_reset"),Rk("conversation_reset"),Xy(F9),UCe(),Foe(),IJ(),BCe(),$Ce(),Efe();let e=Q();for(let r of Ire(o.sessionHooksRegistry,e))o.sessionHooksRegistry.remove(e,"Stop",r);t(),sde(),o.applyMessageOp({type:"replace-all",messages:s})}
export{rje};
