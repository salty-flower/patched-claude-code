// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{cV}from"./chunk-6gbr53yq.js";import{Ap,N6n,b2}from"./chunk-5rr41v9n.js";import{ue}from"./chunk-y3a8g8e0.js";import{randomBytes as l}from"crypto";function VKa(o,t){let e=o.mapToolResultToToolResultBlockParam(t.data,`toolu_serve_${l(12).toString("hex")}`);return GXr(e?.content??"",t.data,e?.is_error===!0)}function GXr(o,t,e=!1,r=[]){return b2({envelope:{v:Ap,outcome:"completed",target:Y8t(),is_error:e,content:N6n(o),output:t,...r.length>0&&{notes:r}},content:o})}function Y8t(){return{name:cV(),working_dir:ue()}}
export{VKa,GXr,Y8t};
