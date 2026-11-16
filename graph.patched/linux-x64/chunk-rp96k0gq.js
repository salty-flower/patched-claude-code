// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{t}from"./chunk-ray9kegj.js";import{gp}from"./chunk-2vbvs9gw.js";import{Vy}from"./chunk-44cwn2d3.js";import{B5e}from"./chunk-r830kygb.js";import{Ec}from"./chunk-374g520d.js";function g_r(o){if(!o||Object.keys(o).length===0)return!1;for(let n of Ec){let e=o[n];if(!e||e.length===0)continue;for(let r of e)if((r.hooks?.length??0)>0)return!0}return!1}function DHi(o,n,e,r,m=!1,l=!1,u=!1,p){if(!e||Object.keys(e).length===0)return;B5e(e,p);let s=0;for(let i of Ec){let f=e[i];if(!f||f.length===0)continue;let a=i;if(m&&i==="Stop")a="SubagentStop",t(`Converting Stop hook to SubagentStop for ${r} (subagents trigger SubagentStop)`);for(let c of f){let S=c.matcher??"",g=c.hooks;if(!g||g.length===0)continue;for(let h of g)o.add(n,a,S,h,{personal:l,checkout:u}),s++}}if(s>0)t(`Registered ${s} frontmatter hook(s) from ${r} for session ${n}`)}function cLt(o){return Vy()&&o!==void 0&&gp.has(o)}
export{g_r,DHi,cLt};
