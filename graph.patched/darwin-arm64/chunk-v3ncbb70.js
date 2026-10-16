// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ce}from"./chunk-xzypj06m.js";import{Nn}from"./chunk-r0a9v21k.js";import{Ae,ue}from"./chunk-1901fdh6.js";import{t}from"./chunk-bnfhb7sj.js";import{wc}from"./chunk-wrzcmmn0.js";import{Kke,mr}from"./chunk-td5pjp2j.js";import{oQe,iQe}from"./chunk-8kj4j9d0.js";import{realpath as u}from"fs/promises";async function u6o(r){try{let o=await oQe();if(!o){t("Not in a GitHub repository, skipping path mapping update");return}let e=Ce(),s=mr(e)??e,i;try{i=Nn(await u(s))}catch{i=s}let a=o.toLowerCase(),p=ue().githubRepoPaths?.[a]??[];if(p[0]===i){t(`Path ${i} already tracked for repo ${a}`);return}let f=p.filter((c)=>c!==i),h=[i,...f];await Ae((c)=>({...c,githubRepoPaths:{...c.githubRepoPaths,[a]:h}}),r),t(`Added ${i} to tracked paths for repo ${a}`)}catch(o){t(`Error updating repo path mapping: ${o}`)}}function $gn(r){let o=ue(),e=r.toLowerCase();return o.githubRepoPaths?.[e]??[]}async function Ugn(r){let o=await Promise.all(r.map(wc));return r.filter((e,n)=>o[n])}async function hjr(r,o){try{let e=await Kke(r);if(!e)return!1;let n=iQe(e);if(!n)return!1;return n.toLowerCase()===o.toLowerCase()}catch{return!1}}function yjr(r,o,e){let n=ue(),s=r.toLowerCase(),i=n.githubRepoPaths?.[s]??[],a=i.filter((p)=>p!==o);if(a.length===i.length)return;let g={...n.githubRepoPaths};if(a.length===0)delete g[s];else g[s]=a;Ae((p)=>({...p,githubRepoPaths:g}),e),t(`Removed ${o} from tracked paths for repo ${s}`)}
export{u6o,$gn,Ugn,hjr,yjr};
