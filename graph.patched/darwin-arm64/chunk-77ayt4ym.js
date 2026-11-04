// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Sd}from"./chunk-t696xmwt.js";import{IOt}from"./chunk-mbw4k5qs.js";import{M,R,j}from"./chunk-rt5zqm44.js";j();function mi(n,e,t){let r=Sd(),i=r?.getDisplayText(n,e),o=i===void 0,s=r?"action_not_found":"no_context",u=R(!1);if(M(()=>{if(o&&!u.current)u.current=!0,IOt(n,e,t,s)},[o,n,e,t,s]),o)return t;return i===null?"":i}
export{mi};
