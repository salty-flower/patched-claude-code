// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{f}from"./chunk-ras5x31x.js";import{o,E,M,A,u}from"./chunk-w8db6ytr.js";var e=f(()=>u({path:o(),text:o(),chars:E().int().min(0),clipped:M().optional()}));function $an(){return{init_references:u({docs:A(e()),unavailable:A(u({path:o(),why:o()})).optional()}).optional()}}function J0t(){return{design_system:u({url:o().optional(),default:o().optional(),title:o().optional(),store:M().optional(),docs:A(e()).optional(),unavailable:o().optional()}).optional()}}var t=f(()=>u({dir:o(),files:A(u({path:o(),bytes:E()})),skipped:A(u({path:o(),reason:o()}))})),Fan=f(()=>u({type:t().optional(),system_url:o().optional(),system:t().optional(),skill_in_result:M(),capabilities_skill:M(),repl_tool:M().optional()}));
export{$an,J0t,Fan};
