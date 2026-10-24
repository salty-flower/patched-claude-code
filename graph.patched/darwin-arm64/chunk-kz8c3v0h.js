// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{CV}from"./chunk-cjq3wmyf.js";import{Qu,Qmn,dj}from"./chunk-epan1q4y.js";import{pe}from"./chunk-m2fgnje1.js";import{randomBytes as l}from"crypto";function Svi(o,t){let e=o.mapToolResultToToolResultBlockParam(t.data,`toolu_serve_${l(12).toString("hex")}`);return our(e?.content??"",t.data,e?.is_error===!0)}function our(o,t,e=!1,r=[]){return dj({envelope:{v:Qu,outcome:"completed",target:N4t(),is_error:e,content:Qmn(o),output:t,...r.length>0&&{notes:r}},content:o})}function N4t(){return{name:CV(),working_dir:pe()}}
export{Svi,our,N4t};
