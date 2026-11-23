// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-q8mq1ny3.js";import{o,E,I,C,u}from"./chunk-xrhk683g.js";var e=p(()=>u({path:o(),text:o(),chars:E().int().min(0),clipped:I().optional()}));function Dmr(){return{init_references:u({docs:C(e()),unavailable:C(u({path:o(),why:o()})).optional()}).optional()}}function nOn(){return{design_system:u({url:o().optional(),default:o().optional(),title:o().optional(),store:I().optional(),docs:C(e()).optional(),unavailable:o().optional()}).optional()}}var t=p(()=>u({dir:o(),files:C(u({path:o(),bytes:E()})),skipped:C(u({path:o(),reason:o()}))})),Lmr=p(()=>u({type:t().optional(),system_url:o().optional(),system:t().optional(),skill_in_result:I(),capabilities_skill:I(),repl_tool:I().optional()}));
export{Dmr,nOn,Lmr};
