// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{tfd as g,yfd as p}from"./_806.js";import{Hid as c,Iid as f}from"./_812.js";import{mrd as d}from"./_813.js";import{Bsd as n}from"./_815.js";f();p();d();function v(){let i=n(),e=new Map,o=0;return{emit(t,r){if(o===0){e.set(t,r);return}i.emit(t,r)},subscribe(t){o++;let r=[...e];e.clear();for(let[u,m]of r)t(u,m);let l=i.subscribe(t),s=!0;return()=>{if(s)s=!1,o--,l()}}}}var b=new c(v);function T(i){return(e,o)=>{g(`[remote-tools] ${e}: ${o}`),b.of(i).emit(e,o)}}
export{v as yc,b as zc,T as Ac};
