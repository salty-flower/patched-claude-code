// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{d2}from"./chunk-3eegwag5.js";import{bu,Van,_B}from"./chunk-h3dn4j2q.js";import{pe}from"./chunk-6vj87cqe.js";import{randomBytes as l}from"crypto";function iai(o,t){let e=o.mapToolResultToToolResultBlockParam(t.data,`toolu_serve_${l(12).toString("hex")}`);return Ttr(e?.content??"",t.data,e?.is_error===!0)}function Ttr(o,t,e=!1,r=[]){return _B({envelope:{v:bu,outcome:"completed",target:zzt(),is_error:e,content:Van(o),output:t,...r.length>0&&{notes:r}},content:o})}function zzt(){return{name:d2(),working_dir:pe()}}
export{iai,Ttr,zzt};
