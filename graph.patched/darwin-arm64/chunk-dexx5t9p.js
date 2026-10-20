// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Ce}from"./chunk-kpqr86hf.js";import{$n}from"./chunk-f66mhvm1.js";import{Te,ue}from"./chunk-bvn0epzr.js";import{t}from"./chunk-tdxkq523.js";import{Ac}from"./chunk-c2wcenam.js";import{_Te,br}from"./chunk-tx4cjw3a.js";import{bet,Eet}from"./chunk-j3zya9y2.js";import{realpath as u}from"fs/promises";async function lYo(r){try{let o=await bet();if(!o){t("Not in a GitHub repository, skipping path mapping update");return}let e=Ce(),s=br(e)??e,i;try{i=$n(await u(s))}catch{i=s}let a=o.toLowerCase(),p=ue().githubRepoPaths?.[a]??[];if(p[0]===i){t(`Path ${i} already tracked for repo ${a}`);return}let f=p.filter((c)=>c!==i),h=[i,...f];await Te((c)=>({...c,githubRepoPaths:{...c.githubRepoPaths,[a]:h}}),r),t(`Added ${i} to tracked paths for repo ${a}`)}catch(o){t(`Error updating repo path mapping: ${o}`)}}function abn(r){let o=ue(),e=r.toLowerCase();return o.githubRepoPaths?.[e]??[]}async function lbn(r){let o=await Promise.all(r.map(Ac));return r.filter((e,n)=>o[n])}async function zVr(r,o){try{let e=await _Te(r);if(!e)return!1;let n=Eet(e);if(!n)return!1;return n.toLowerCase()===o.toLowerCase()}catch{return!1}}function VVr(r,o,e){let n=ue(),s=r.toLowerCase(),i=n.githubRepoPaths?.[s]??[],a=i.filter((p)=>p!==o);if(a.length===i.length)return;let g={...n.githubRepoPaths};if(a.length===0)delete g[s];else g[s]=a;Te((p)=>({...p,githubRepoPaths:g}),e),t(`Removed ${o} from tracked paths for repo ${s}`)}
export{lYo,abn,lbn,zVr,VVr};
