// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{fz}from"./chunk-104m6ssk.js";import{Tp,sKn,wW}from"./chunk-8hea3s3z.js";import{ue}from"./chunk-0qf90h64.js";import{randomBytes as l}from"crypto";function F3a(o,t){let e=o.mapToolResultToToolResultBlockParam(t.data,`toolu_serve_${l(12).toString("hex")}`);return vJr(e?.content??"",t.data,e?.is_error===!0)}function vJr(o,t,e=!1,r=[]){return wW({envelope:{v:Tp,outcome:"completed",target:_8t(),is_error:e,content:sKn(o),output:t,...r.length>0&&{notes:r}},content:o})}function _8t(){return{name:fz(),working_dir:ue()}}
export{F3a,vJr,_8t};
