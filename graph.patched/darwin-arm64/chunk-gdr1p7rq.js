// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{f}from"./chunk-2pfss7d0.js";import{o,v,H,T,u}from"./chunk-seb9y51t.js";var e=f(()=>u({path:o(),text:o(),chars:v().int().min(0),clipped:H().optional()}));function oon(){return{init_references:u({docs:T(e()),unavailable:T(u({path:o(),why:o()})).optional()}).optional()}}function U0t(){return{design_system:u({url:o().optional(),default:o().optional(),title:o().optional(),store:H().optional(),docs:T(e()).optional(),unavailable:o().optional()}).optional()}}var t=f(()=>u({dir:o(),files:T(u({path:o(),bytes:v()})),skipped:T(u({path:o(),reason:o()}))})),son=f(()=>u({type:t().optional(),system_url:o().optional(),system:t().optional(),skill_in_result:H(),capabilities_skill:H(),repl_tool:H().optional()}));
export{oon,U0t,son};
