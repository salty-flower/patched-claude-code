// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{f}from"./chunk-5r64b6x9.js";import{o,E,H,C,u}from"./chunk-82bgdty3.js";var e=f(()=>u({path:o(),text:o(),chars:E().int().min(0),clipped:H().optional()}));function ovn(){return{init_references:u({docs:C(e()),unavailable:C(u({path:o(),why:o()})).optional()}).optional()}}function E6t(){return{design_system:u({url:o().optional(),default:o().optional(),title:o().optional(),store:H().optional(),docs:C(e()).optional(),unavailable:o().optional()}).optional()}}var t=f(()=>u({dir:o(),files:C(u({path:o(),bytes:E()})),skipped:C(u({path:o(),reason:o()}))})),svn=f(()=>u({type:t().optional(),system_url:o().optional(),system:t().optional(),skill_in_result:H(),capabilities_skill:H(),repl_tool:H().optional()}));
export{ovn,E6t,svn};
