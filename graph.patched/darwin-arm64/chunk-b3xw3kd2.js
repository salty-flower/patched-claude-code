// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ee}from"./chunk-8mvda08c.js";import{Fn}from"./chunk-5qeme8w3.js";import{Ae,ce}from"./chunk-s46qgfx7.js";import{t}from"./chunk-f8eqwxpt.js";import{Rc}from"./chunk-prs2t84m.js";import{UVe,pr}from"./chunk-ts0309p1.js";import{OVe,MVe}from"./chunk-s7j36v3t.js";import{realpath as u}from"fs/promises";async function oyo(e){try{let o=await OVe();if(!o){t("Not in a GitHub repository, skipping path mapping update");return}let r=Ee(),s=pr(r)??r,i;try{i=Fn(await u(s))}catch{i=s}let n=o.toLowerCase(),p=ce().githubRepoPaths?.[n]??[];if(p[0]===i){t(`Path ${i} already tracked for repo ${n}`);return}let f=p.filter((c)=>c!==i),h=[i,...f];await Ae((c)=>({...c,githubRepoPaths:{...c.githubRepoPaths,[n]:h}}),e),t(`Added ${i} to tracked paths for repo ${n}`)}catch(o){t(`Error updating repo path mapping: ${o}`)}}function wJt(e){let o=ce(),r=e.toLowerCase();return o.githubRepoPaths?.[r]??[]}async function EJt(e){let o=await Promise.all(e.map(Rc));return e.filter((r,a)=>o[a])}async function y_r(e,o){try{let r=await UVe(e);if(!r)return!1;let a=MVe(r);if(!a)return!1;return a.toLowerCase()===o.toLowerCase()}catch{return!1}}function __r(e,o,r){let a=ce(),s=e.toLowerCase(),i=a.githubRepoPaths?.[s]??[],n=i.filter((p)=>p!==o);if(n.length===i.length)return;let g={...a.githubRepoPaths};if(n.length===0)delete g[s];else g[s]=n;Ae((p)=>({...p,githubRepoPaths:g}),r),t(`Removed ${o} from tracked paths for repo ${s}`)}
export{oyo,wJt,EJt,y_r,__r};
