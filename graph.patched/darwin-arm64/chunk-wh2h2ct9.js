// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{t}from"./chunk-tdxkq523.js";import{ff}from"./chunk-58pv6r0f.js";import{sy}from"./chunk-nvse89hm.js";import{GMe}from"./chunk-w4zhnchg.js";import{Cc}from"./chunk-q6vwcyd6.js";function lPn(o){if(!o||Object.keys(o).length===0)return!1;for(let n of Cc){let e=o[n];if(!e||e.length===0)continue;for(let r of e)if((r.hooks?.length??0)>0)return!0}return!1}function Lds(o,n,e,r,m=!1,l=!1,u=!1,p){if(!e||Object.keys(e).length===0)return;GMe(e,p);let s=0;for(let i of Cc){let f=e[i];if(!f||f.length===0)continue;let a=i;if(m&&i==="Stop")a="SubagentStop",t(`Converting Stop hook to SubagentStop for ${r} (subagents trigger SubagentStop)`);for(let c of f){let S=c.matcher??"",g=c.hooks;if(!g||g.length===0)continue;for(let h of g)o.add(n,a,S,h,{personal:l,checkout:u}),s++}}if(s>0)t(`Registered ${s} frontmatter hook(s) from ${r} for session ${n}`)}function Jst(o){return sy()&&o!==void 0&&ff.has(o)}
export{lPn,Lds,Jst};
