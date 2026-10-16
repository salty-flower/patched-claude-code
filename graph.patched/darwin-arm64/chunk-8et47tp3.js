// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{au,Yrn,HU}from"./chunk-dxfmgtda.js";import{de}from"./chunk-xqs3dvj3.js";import{IG}from"./chunk-vswna8r7.js";import{randomBytes as l}from"crypto";function rJs(o,t){let e=o.mapToolResultToToolResultBlockParam(t.data,`toolu_serve_${l(12).toString("hex")}`);return g7n(e?.content??"",t.data,e?.is_error===!0)}function g7n(o,t,e=!1,r=[]){return HU({envelope:{v:au,outcome:"completed",target:Rjt(),is_error:e,content:Yrn(o),output:t,...r.length>0&&{notes:r}},content:o})}function Rjt(){return{name:IG(),working_dir:de()}}
export{rJs,g7n,Rjt};
