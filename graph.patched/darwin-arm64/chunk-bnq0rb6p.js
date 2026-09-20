// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{f}from"./chunk-67jj8qay.js";import{o,v,I,k,u}from"./chunk-s6d8yza1.js";var e=f(()=>u({path:o(),text:o(),chars:v().int().min(0),clipped:I().optional()}));function gkt(){return{init_references:u({docs:k(e()),unavailable:k(u({path:o(),why:o()})).optional()}).optional()}}function hkt(){return{design_system:u({url:o().optional(),default:o().optional(),title:o().optional(),store:I().optional(),docs:k(e()).optional(),unavailable:o().optional()}).optional()}}var t=f(()=>u({dir:o(),files:k(u({path:o(),bytes:v()})),skipped:k(u({path:o(),reason:o()}))})),ykt=f(()=>u({type:t().optional(),system_url:o().optional(),system:t().optional(),skill_in_result:I(),capabilities_skill:I()}));
export{gkt,hkt,ykt};
