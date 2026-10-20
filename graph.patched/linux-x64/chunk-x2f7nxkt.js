// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Te}from"./chunk-dxktn51d.js";import{Fn}from"./chunk-h9cj3xp8.js";import{Ae,ue}from"./chunk-7p6jp6kj.js";import{t}from"./chunk-n5v91jc3.js";import{au}from"./chunk-bjv5j0w5.js";import{pAe,br}from"./chunk-32vra4sg.js";import{pet,met}from"./chunk-mr8a4qvf.js";import{realpath as u}from"fs/promises";async function R8o(r){try{let o=await pet();if(!o){t("Not in a GitHub repository, skipping path mapping update");return}let e=Te(),s=br(e)??e,i;try{i=Fn(await u(s))}catch{i=s}let a=o.toLowerCase(),p=ue().githubRepoPaths?.[a]??[];if(p[0]===i){t(`Path ${i} already tracked for repo ${a}`);return}let f=p.filter((c)=>c!==i),h=[i,...f];await Ae((c)=>({...c,githubRepoPaths:{...c.githubRepoPaths,[a]:h}}),r),t(`Added ${i} to tracked paths for repo ${a}`)}catch(o){t(`Error updating repo path mapping: ${o}`)}}function zbn(r){let o=ue(),e=r.toLowerCase();return o.githubRepoPaths?.[e]??[]}async function Kbn(r){let o=await Promise.all(r.map(au));return r.filter((e,n)=>o[n])}async function bVr(r,o){try{let e=await pAe(r);if(!e)return!1;let n=met(e);if(!n)return!1;return n.toLowerCase()===o.toLowerCase()}catch{return!1}}function SVr(r,o,e){let n=ue(),s=r.toLowerCase(),i=n.githubRepoPaths?.[s]??[],a=i.filter((p)=>p!==o);if(a.length===i.length)return;let g={...n.githubRepoPaths};if(a.length===0)delete g[s];else g[s]=a;Ae((p)=>({...p,githubRepoPaths:g}),e),t(`Removed ${o} from tracked paths for repo ${s}`)}
export{R8o,zbn,Kbn,bVr,SVr};
