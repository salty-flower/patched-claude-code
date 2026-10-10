// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"./chunk-fdwn5gdv.js";import{o,v,H,A,u}from"./chunk-9cmjz7j9.js";var e=p(()=>u({path:o(),text:o(),chars:v().int().min(0),clipped:H().optional()}));function Kfn(){return{init_references:u({docs:A(e()),unavailable:A(u({path:o(),why:o()})).optional()}).optional()}}function KUt(){return{design_system:u({url:o().optional(),default:o().optional(),title:o().optional(),store:H().optional(),docs:A(e()).optional(),unavailable:o().optional()}).optional()}}var t=p(()=>u({dir:o(),files:A(u({path:o(),bytes:v()})),skipped:A(u({path:o(),reason:o()}))})),Yfn=p(()=>u({type:t().optional(),system_url:o().optional(),system:t().optional(),skill_in_result:H(),capabilities_skill:H(),repl_tool:H().optional()}));
export{Kfn,KUt,Yfn};
