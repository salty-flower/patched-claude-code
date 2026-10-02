// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{p}from"./chunk-dsp1md5e.js";import{o,A,O,k,d}from"./chunk-g4gq2k0z.js";var e=p(()=>d({path:o(),text:o(),chars:A().int().min(0),clipped:O().optional()}));function dKt(){return{init_references:d({docs:k(e()),unavailable:k(d({path:o(),why:o()})).optional()}).optional()}}function Vwt(){return{design_system:d({url:o().optional(),default:o().optional(),title:o().optional(),store:O().optional(),docs:k(e()).optional(),unavailable:o().optional()}).optional()}}var t=p(()=>d({dir:o(),files:k(d({path:o(),bytes:A()})),skipped:k(d({path:o(),reason:o()}))})),uKt=p(()=>d({type:t().optional(),system_url:o().optional(),system:t().optional(),skill_in_result:O(),capabilities_skill:O(),repl_tool:O().optional()}));
export{dKt,Vwt,uKt};
