// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{yK}from"./chunk-xfd2zfkd.js";import{up,xDn,AW}from"./chunk-9pp7g5yw.js";import{fe}from"./chunk-90nskyyy.js";import{randomBytes as l}from"crypto";function eoa(o,t){let e=o.mapToolResultToToolResultBlockParam(t.data,`toolu_serve_${l(12).toString("hex")}`);return iHr(e?.content??"",t.data,e?.is_error===!0)}function iHr(o,t,e=!1,r=[]){return AW({envelope:{v:up,outcome:"completed",target:X1t(),is_error:e,content:xDn(o),output:t,...r.length>0&&{notes:r}},content:o})}function X1t(){return{name:yK(),working_dir:fe()}}
export{eoa,iHr,X1t};
