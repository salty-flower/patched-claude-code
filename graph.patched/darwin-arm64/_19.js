// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Lvc as F,luc as h,puc as f}from"./_668.js";import{A0c as v,a0c as d}from"./_763.js";import{N8c as R,O8c as L,z8c as P}from"./_785.js";import{G9c as l,H_c as B,J9c as G,P9c as b}from"./_786.js";import{tfd as p,yfd as k}from"./_806.js";import{Vid as m,krd as x}from"./_812.js";import{Nrd as u,wsd as C}from"./_814.js";x();C();F();k();L();v();G();B();import{realpath as K}from"fs/promises";async function N(o){try{let t=await P();if(!t){p("Not in a GitHub repository, skipping path mapping update");return}let e=m(),n=b(e)??e,r;try{r=u(await K(n))}catch{r=n}let a=t.toLowerCase(),s=f().githubRepoPaths?.[a]??[];if(s[0]===r){p(`Path ${r} already tracked for repo ${a}`);return}let w=s.filter((c)=>c!==r),y=[r,...w];await h((c)=>({...c,githubRepoPaths:{...c.githubRepoPaths,[a]:y}}),o),p(`Added ${r} to tracked paths for repo ${a}`)}catch(t){p(`Error updating repo path mapping: ${t}`)}}function O(o){let t=f(),e=o.toLowerCase();return t.githubRepoPaths?.[e]??[]}async function _(o){let t=await Promise.all(o.map(d));return o.filter((e,i)=>t[i])}async function q(o,t){try{let e=await l(o);if(!e)return!1;let i=R(e);if(!i)return!1;return i.toLowerCase()===t.toLowerCase()}catch{return!1}}function I(o,t,e){let i=f(),n=o.toLowerCase(),r=i.githubRepoPaths?.[n]??[],a=r.filter((s)=>s!==t);if(a.length===r.length)return;let g={...i.githubRepoPaths};if(a.length===0)delete g[n];else g[n]=a;h((s)=>({...s,githubRepoPaths:g}),e),p(`Removed ${t} from tracked paths for repo ${n}`)}
export{N as Ib,O as Jb,_ as Kb,q as Lb,I as Mb};
