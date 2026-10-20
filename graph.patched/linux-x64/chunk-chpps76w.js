// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{t}from"./chunk-n5v91jc3.js";import{ff}from"./chunk-4v4w26w4.js";import{ry}from"./chunk-6yrb8n5d.js";import{NMe}from"./chunk-cf6fnnta.js";import{Tc}from"./chunk-m7gr14b0.js";function Vxn(o){if(!o||Object.keys(o).length===0)return!1;for(let n of Tc){let e=o[n];if(!e||e.length===0)continue;for(let r of e)if((r.hooks?.length??0)>0)return!0}return!1}function sds(o,n,e,r,m=!1,l=!1,u=!1,p){if(!e||Object.keys(e).length===0)return;NMe(e,p);let s=0;for(let i of Tc){let f=e[i];if(!f||f.length===0)continue;let a=i;if(m&&i==="Stop")a="SubagentStop",t(`Converting Stop hook to SubagentStop for ${r} (subagents trigger SubagentStop)`);for(let c of f){let S=c.matcher??"",g=c.hooks;if(!g||g.length===0)continue;for(let h of g)o.add(n,a,S,h,{personal:l,checkout:u}),s++}}if(s>0)t(`Registered ${s} frontmatter hook(s) from ${r} for session ${n}`)}function Vst(o){return ry()&&o!==void 0&&ff.has(o)}
export{Vxn,sds,Vst};
