// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{t}from"./chunk-5nh49npx.js";import{df}from"./chunk-fx3z0wwe.js";import{xy}from"./chunk-6g5pmnkm.js";import{K2e}from"./chunk-qb8e16cb.js";import{_c}from"./chunk-h21zbzen.js";function o7n(o){if(!o||Object.keys(o).length===0)return!1;for(let n of _c){let e=o[n];if(!e||e.length===0)continue;for(let r of e)if((r.hooks?.length??0)>0)return!0}return!1}function SZs(o,n,e,r,m=!1,l=!1,u=!1,p){if(!e||Object.keys(e).length===0)return;K2e(e,p);let s=0;for(let i of _c){let f=e[i];if(!f||f.length===0)continue;let a=i;if(m&&i==="Stop")a="SubagentStop",t(`Converting Stop hook to SubagentStop for ${r} (subagents trigger SubagentStop)`);for(let c of f){let S=c.matcher??"",g=c.hooks;if(!g||g.length===0)continue;for(let h of g)o.add(n,a,S,h,{personal:l,checkout:u}),s++}}if(s>0)t(`Registered ${s} frontmatter hook(s) from ${r} for session ${n}`)}function Qkt(o){return xy()&&o!==void 0&&df.has(o)}
export{o7n,SZs,Qkt};
