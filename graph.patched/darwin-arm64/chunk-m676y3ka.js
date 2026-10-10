// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ee}from"./chunk-4bw62nzm.js";import{On}from"./chunk-ae84tp6z.js";import{Ce,ce}from"./chunk-bk5ct2gw.js";import{t}from"./chunk-gyf58rwf.js";import{od}from"./chunk-f606a53w.js";import{Qbe,ur}from"./chunk-bf3z2ftn.js";import{M9e,L9e}from"./chunk-97q60twp.js";import{realpath as u}from"fs/promises";async function sHo(e){try{let o=await M9e();if(!o){t("Not in a GitHub repository, skipping path mapping update");return}let r=Ee(),s=ur(r)??r,i;try{i=On(await u(s))}catch{i=s}let n=o.toLowerCase(),p=ce().githubRepoPaths?.[n]??[];if(p[0]===i){t(`Path ${i} already tracked for repo ${n}`);return}let f=p.filter((c)=>c!==i),h=[i,...f];await Ce((c)=>({...c,githubRepoPaths:{...c.githubRepoPaths,[n]:h}}),e),t(`Added ${i} to tracked paths for repo ${n}`)}catch(o){t(`Error updating repo path mapping: ${o}`)}}function qin(e){let o=ce(),r=e.toLowerCase();return o.githubRepoPaths?.[r]??[]}async function Kin(e){let o=await Promise.all(e.map(od));return e.filter((r,a)=>o[a])}async function ZIr(e,o){try{let r=await Qbe(e);if(!r)return!1;let a=L9e(r);if(!a)return!1;return a.toLowerCase()===o.toLowerCase()}catch{return!1}}function eOr(e,o,r){let a=ce(),s=e.toLowerCase(),i=a.githubRepoPaths?.[s]??[],n=i.filter((p)=>p!==o);if(n.length===i.length)return;let g={...a.githubRepoPaths};if(n.length===0)delete g[s];else g[s]=n;Ce((p)=>({...p,githubRepoPaths:g}),r),t(`Removed ${o} from tracked paths for repo ${s}`)}
export{sHo,qin,Kin,ZIr,eOr};
