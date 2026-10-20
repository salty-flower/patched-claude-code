// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Sz}from"./chunk-g855r4ff.js";import{bu,lln,C1}from"./chunk-f4yykyp9.js";import{pe}from"./chunk-r2k1mk6b.js";import{randomBytes as l}from"crypto";function Yai(o,t){let e=o.mapToolResultToToolResultBlockParam(t.data,`toolu_serve_${l(12).toString("hex")}`);return Wtr(e?.content??"",t.data,e?.is_error===!0)}function Wtr(o,t,e=!1,r=[]){return C1({envelope:{v:bu,outcome:"completed",target:szt(),is_error:e,content:lln(o),output:t,...r.length>0&&{notes:r}},content:o})}function szt(){return{name:Sz(),working_dir:pe()}}
export{Yai,Wtr,szt};
