// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{vbe}from"./chunk-r3adsed5.js";import{bVo,xye}from"./chunk-374g520d.js";import{P8e}from"./chunk-a5a37ds7.js";function Hns(e){if(!e?.length)return;let o=Object.create(null);for(let r of e){if(!r?.org_max_permission||r.org_max_permission==="allow")continue;let n=xye().safeParse(r.org_max_permission);o[r.name]=n.success?n.data:"blocked"}return Object.keys(o).length>0?o:void 0}function R0t(e,o){let r=vbe({readFrom:o??e.readFrom}),n=r===void 0?{scope:"dynamic"}:{scope:"project",readFrom:r},s;if(e.type==="http"||e.type==="sse"){let{tools:t,...c}=e,a=bVo(c),i=Hns(t);s={...a,...i&&{toolPermissions:i},...n}}else s={...e,...n};if(p(e))delete s.displayName;return P8e(e,s)}function exi(e,o){let r=R0t(e,o);if(!p(e))return r;let{scope:n,displayName:s}=e,t=r;if(t.scope=n,typeof s==="string")t.displayName=s;return t}function p(e){let o="scope"in e?e.scope:void 0;return o!==void 0&&o!=="dynamic"&&o!=="claudeai"}
export{Hns,R0t,exi};
