// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{f}from"./chunk-wp37h1qm.js";import{o,E,M,C,u}from"./chunk-6kgnb6mn.js";var e=f(()=>u({path:o(),text:o(),chars:E().int().min(0),clipped:M().optional()}));function Mrn(){return{init_references:u({docs:C(e()),unavailable:C(u({path:o(),why:o()})).optional()}).optional()}}function kMt(){return{design_system:u({url:o().optional(),default:o().optional(),title:o().optional(),store:M().optional(),docs:C(e()).optional(),unavailable:o().optional()}).optional()}}var t=f(()=>u({dir:o(),files:C(u({path:o(),bytes:E()})),skipped:C(u({path:o(),reason:o()}))})),Hrn=f(()=>u({type:t().optional(),system_url:o().optional(),system:t().optional(),skill_in_result:M(),capabilities_skill:M(),repl_tool:M().optional()}));
export{Mrn,kMt,Hrn};
