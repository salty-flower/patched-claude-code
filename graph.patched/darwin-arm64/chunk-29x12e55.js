// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Gd,UXt,ZF}from"./chunk-hwpb27as.js";import{se}from"./chunk-qr9z1wer.js";import{Z2}from"./chunk-08y6bv7r.js";import{randomBytes as l}from"crypto";function QUs(o,t){let e=o.mapToolResultToToolResultBlockParam(t.data,`toolu_serve_${l(12).toString("hex")}`);return z6n(e?.content??"",t.data,e?.is_error===!0)}function z6n(o,t,e=!1,r=[]){return ZF({envelope:{v:Gd,outcome:"completed",target:YDt(),is_error:e,content:UXt(o),output:t,...r.length>0&&{notes:r}},content:o})}function YDt(){return{name:Z2(),working_dir:se()}}
export{QUs,z6n,YDt};
