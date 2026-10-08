// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{f}from"./chunk-y575z4xw.js";import{o,v,H,A,u}from"./chunk-hcyr0654.js";var e=f(()=>u({path:o(),text:o(),chars:v().int().min(0),clipped:H().optional()}));function cln(){return{init_references:u({docs:A(e()),unavailable:A(u({path:o(),why:o()})).optional()}).optional()}}function fLt(){return{design_system:u({url:o().optional(),default:o().optional(),title:o().optional(),store:H().optional(),docs:A(e()).optional(),unavailable:o().optional()}).optional()}}var t=f(()=>u({dir:o(),files:A(u({path:o(),bytes:v()})),skipped:A(u({path:o(),reason:o()}))})),dln=f(()=>u({type:t().optional(),system_url:o().optional(),system:t().optional(),skill_in_result:H(),capabilities_skill:H(),repl_tool:H().optional()}));
export{cln,fLt,dln};
