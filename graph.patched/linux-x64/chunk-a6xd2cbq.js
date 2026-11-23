// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{yd}from"./chunk-v5mfbma0.js";import{$Bt}from"./chunk-dxfba42p.js";import{M,x,j}from"./chunk-mp0bjfh5.js";j();function Fi(n,e,t){let r=yd(),i=r?.getDisplayText(n,e),o=i===void 0,s=r?"action_not_found":"no_context",u=x(!1);if(M(()=>{if(o&&!u.current)u.current=!0,$Bt(n,e,t,s)},[o,n,e,t,s]),o)return t;return i===null?"":i}
export{Fi};
