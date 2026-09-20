// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{sge}from"./chunk-6vm9fw1n.js";import{It,bW,b0,Sgt,fme}from"./chunk-pgetpn99.js";var y=/^([A-Za-z][A-Za-z0-9+.-]*):\/\/([^/?#]*)(.*)$/;function _(e){let n=e.match(y);if(!n)return e;let r=n[1].toLowerCase();if(r==="http")r="https";let i=n[2].toLowerCase().replace(/:(?:443|80)$/,"").replace(/\.(?=$|:\d+$)/,"");return`${r}://${i}${n[3]??""}`}function ute(e,n,r,i="url"){if(e.size===0)return null;let s=fme(n),o=new Set([...Sgt(n),s,`${s}/`]);if(typeof r==="string")o.add(bW(r).trim());for(let[u,c]of e){let t=u.indexOf(":");if(t<=0)continue;let p=u.slice(0,t).trim(),l=u.slice(t+1).trim();if(p!==i||l==="")continue;let f=b0(l.replace(/\*$/,""));if(f?.slug===n.slug&&f.env===n.env)return c;let a=new Set([l,_(l)]);for(let m of a)for(let g of o)if(sge(m,g))return c}return null}function d(e){let n=It(e),r=b0(e);return[...n!==null?[n]:[],...r!==null&&(n===null||n.slug!==r.slug||n.env!==r.env)?[r]:[]]}function MOn(e,n){if(e.size===0||typeof n!=="object"||n===null)return null;let{url:r,type_url:i,from_url:s,files:o}=n,u=typeof o==="object"&&o!==null&&!Array.isArray(o)?Object.values(o).map((t)=>typeof t==="object"&&t!==null?t.artifact:void 0):[],c=[[r,["url"]],[i,["url","type_url"]],[s,["url","from_url"]],...u.map((t)=>[t,["url","from_url"]])];for(let[t,p]of c){if(typeof t!=="string")continue;for(let l of d(t))for(let f of p){let a=ute(e,l,t,f);if(a!==null)return a}}return null}
export{ute,MOn};
