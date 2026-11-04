// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{f}from"./chunk-tkh9f09d.js";import{o,E,I,T,u}from"./chunk-97je7cvf.js";var e=f(()=>u({path:o(),text:o(),chars:E().int().min(0),clipped:I().optional()}));function z9n(){return{init_references:u({docs:T(e()),unavailable:T(u({path:o(),why:o()})).optional()}).optional()}}function kmn(){return{design_system:u({url:o().optional(),default:o().optional(),title:o().optional(),store:I().optional(),docs:T(e()).optional(),unavailable:o().optional()}).optional()}}var t=f(()=>u({dir:o(),files:T(u({path:o(),bytes:E()})),skipped:T(u({path:o(),reason:o()}))})),V9n=f(()=>u({type:t().optional(),system_url:o().optional(),system:t().optional(),skill_in_result:I(),capabilities_skill:I(),repl_tool:I().optional()}));
export{z9n,kmn,V9n};
