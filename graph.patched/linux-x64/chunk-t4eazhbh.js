// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{au,Hrn,AU}from"./chunk-dpk0tdne.js";import{de}from"./chunk-30b5ph10.js";import{wG}from"./chunk-5hv9xsb3.js";import{randomBytes as l}from"crypto";function wJs(o,t){let e=o.mapToolResultToToolResultBlockParam(t.data,`toolu_serve_${l(12).toString("hex")}`);return QXn(e?.content??"",t.data,e?.is_error===!0)}function QXn(o,t,e=!1,r=[]){return AU({envelope:{v:au,outcome:"completed",target:yjt(),is_error:e,content:Hrn(o),output:t,...r.length>0&&{notes:r}},content:o})}function yjt(){return{name:wG(),working_dir:de()}}
export{wJs,QXn,yjt};
