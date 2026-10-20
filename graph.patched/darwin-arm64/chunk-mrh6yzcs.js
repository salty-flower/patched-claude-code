// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{f}from"./chunk-ynakaye4.js";import{o,E,O,C,u}from"./chunk-xv841za9.js";var e=f(()=>u({path:o(),text:o(),chars:E().int().min(0),clipped:O().optional()}));function hAn(){return{init_references:u({docs:C(e()),unavailable:C(u({path:o(),why:o()})).optional()}).optional()}}function Zqt(){return{design_system:u({url:o().optional(),default:o().optional(),title:o().optional(),store:O().optional(),docs:C(e()).optional(),unavailable:o().optional()}).optional()}}var t=f(()=>u({dir:o(),files:C(u({path:o(),bytes:E()})),skipped:C(u({path:o(),reason:o()}))})),yAn=f(()=>u({type:t().optional(),system_url:o().optional(),system:t().optional(),skill_in_result:O(),capabilities_skill:O(),repl_tool:O().optional()}));
export{hAn,Zqt,yAn};
