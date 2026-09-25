// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{f}from"./chunk-1y7zyxh8.js";import{o,C,O,T,d}from"./chunk-rvnav1yx.js";var e=f(()=>d({path:o(),text:o(),chars:C().int().min(0),clipped:O().optional()}));function fBt(){return{init_references:d({docs:T(e()),unavailable:T(d({path:o(),why:o()})).optional()}).optional()}}function mBt(){return{design_system:d({url:o().optional(),default:o().optional(),title:o().optional(),store:O().optional(),docs:T(e()).optional(),unavailable:o().optional()}).optional()}}var t=f(()=>d({dir:o(),files:T(d({path:o(),bytes:C()})),skipped:T(d({path:o(),reason:o()}))})),gBt=f(()=>d({type:t().optional(),system_url:o().optional(),system:t().optional(),skill_in_result:O(),capabilities_skill:O(),repl_tool:O().optional()}));
export{fBt,mBt,gBt};
