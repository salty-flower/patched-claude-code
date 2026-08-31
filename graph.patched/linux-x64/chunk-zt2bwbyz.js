// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{pJe}from"./chunk-1vhz7b90.js";import{N2,cO,ro,JYe}from"./chunk-41nyh22r.js";var g=/^([A-Za-z][A-Za-z0-9+.-]*):\/\/([^/?#]*)(.*)$/;function vfr(e){let t=e.match(g);if(!t)return e;let n=t[1].toLowerCase();if(n==="http")n="https";let r=t[2].toLowerCase().replace(/:(?:443|80)$/,"").replace(/\.(?=$|:\d+$)/,"");return`${n}://${r}${t[3]??""}`}function _at(e,t,n){if(e.size===0)return null;let r=JYe(t),c=new Set([ro(t),r,`${r}/`]);if(typeof n==="string")c.add(N2(n).trim());for(let[o,a]of e){let s=o.indexOf(":");if(s<=0)continue;let f=o.slice(0,s).trim(),i=o.slice(s+1).trim();if(f!=="url"||i==="")continue;let l=cO(i.replace(/\*$/,""));if(l?.slug===t.slug&&l.env===t.env)return a;let u=new Set([i,vfr(i)]);for(let p of u)for(let m of c)if(pJe(p,m))return a}return null}
export{vfr,_at};
