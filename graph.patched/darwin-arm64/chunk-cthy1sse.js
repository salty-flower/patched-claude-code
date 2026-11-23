// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{t}from"./chunk-bdfv2ky4.js";import{hp}from"./chunk-97kv5dxm.js";import{qy}from"./chunk-h43k8nw5.js";import{K5e}from"./chunk-46hp8syp.js";import{kc}from"./chunk-gywtf5sd.js";function $_r(o){if(!o||Object.keys(o).length===0)return!1;for(let n of kc){let e=o[n];if(!e||e.length===0)continue;for(let r of e)if((r.hooks?.length??0)>0)return!0}return!1}function dNi(o,n,e,r,m=!1,l=!1,u=!1,p){if(!e||Object.keys(e).length===0)return;K5e(e,p);let s=0;for(let i of kc){let f=e[i];if(!f||f.length===0)continue;let a=i;if(m&&i==="Stop")a="SubagentStop",t(`Converting Stop hook to SubagentStop for ${r} (subagents trigger SubagentStop)`);for(let c of f){let S=c.matcher??"",g=c.hooks;if(!g||g.length===0)continue;for(let h of g)o.add(n,a,S,h,{personal:l,checkout:u}),s++}}if(s>0)t(`Registered ${s} frontmatter hook(s) from ${r} for session ${n}`)}function mLt(o){return qy()&&o!==void 0&&hp.has(o)}
export{$_r,dNi,mLt};
