// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Ee}from"./chunk-g79wjybr.js";import{Ln}from"./chunk-gwj7v27h.js";import{Ae,ce}from"./chunk-cxjvwxsa.js";import{t}from"./chunk-p46wpkfz.js";import{Ad}from"./chunk-5v4f7g5r.js";import{k_e,yr}from"./chunk-amnc8bbv.js";import{mYe,hYe}from"./chunk-chs8nhab.js";import{realpath as u}from"fs/promises";async function jko(e){try{let o=await mYe();if(!o){t("Not in a GitHub repository, skipping path mapping update");return}let r=Ee(),s=yr(r)??r,i;try{i=Ln(await u(s))}catch{i=s}let n=o.toLowerCase(),p=ce().githubRepoPaths?.[n]??[];if(p[0]===i){t(`Path ${i} already tracked for repo ${n}`);return}let f=p.filter((c)=>c!==i),h=[i,...f];await Ae((c)=>({...c,githubRepoPaths:{...c.githubRepoPaths,[n]:h}}),e),t(`Added ${i} to tracked paths for repo ${n}`)}catch(o){t(`Error updating repo path mapping: ${o}`)}}function ptn(e){let o=ce(),r=e.toLowerCase();return o.githubRepoPaths?.[r]??[]}async function ftn(e){let o=await Promise.all(e.map(Ad));return e.filter((r,a)=>o[a])}async function qkr(e,o){try{let r=await k_e(e);if(!r)return!1;let a=hYe(r);if(!a)return!1;return a.toLowerCase()===o.toLowerCase()}catch{return!1}}function Vkr(e,o,r){let a=ce(),s=e.toLowerCase(),i=a.githubRepoPaths?.[s]??[],n=i.filter((p)=>p!==o);if(n.length===i.length)return;let g={...a.githubRepoPaths};if(n.length===0)delete g[s];else g[s]=n;Ae((p)=>({...p,githubRepoPaths:g}),r),t(`Removed ${o} from tracked paths for repo ${s}`)}
export{jko,ptn,ftn,qkr,Vkr};
