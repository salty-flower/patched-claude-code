// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-7ap5zh1s.js";import{o,k,O,A,u}from"./chunk-m507bxk0.js";var e=p(()=>u({path:o(),text:o(),chars:k().int().min(0),clipped:O().optional()}));function nhr(){return{init_references:u({docs:A(e()),unavailable:A(u({path:o(),why:o()})).optional()}).optional()}}function yIn(){return{design_system:u({url:o().optional(),default:o().optional(),title:o().optional(),store:O().optional(),docs:A(e()).optional(),unavailable:o().optional()}).optional()}}var t=p(()=>u({dir:o(),files:A(u({path:o(),bytes:k()})),skipped:A(u({path:o(),reason:o()}))})),rhr=p(()=>u({type:t().optional(),system_url:o().optional(),system:t().optional(),skill_in_result:O(),capabilities_skill:O(),repl_tool:O().optional()}));
export{nhr,yIn,rhr};
