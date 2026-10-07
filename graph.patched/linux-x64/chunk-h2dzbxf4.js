// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{V,ni}from"./chunk-fdatg9ax.js";import{c}from"./chunk-z9b8syjk.js";import{te}from"./chunk-hevpq2ht.js";import{zu}from"./chunk-zyrx67ap.js";import{Gt}from"./chunk-m0sj7y8g.js";import{a5o,c5o,wve,Mtr,Htr,qse,CEn}from"./chunk-3499swv4.js";import{yDo}from"./chunk-wbjbdtpn.js";import{writeFile as u}from"fs/promises";var m=30000,k=300000,f=wve,y=16777216,d="/api/oauth/organizations/:orgUUID/skills/list-skills?include_wiggle_skills=true";async function lNt(o={}){let t=await p(o);if(!t.success&&qse(t))return p(o);return t}async function p(o){let t=zu(),l=t?`${d}&entrypoint=${encodeURIComponent(t)}`:d;try{let r=await Gt.get(l,{auth:"teleport-org",isBackground:o.isBackground,timeout:m,maxContentLength:y,credentials:o.credentials});if(!r.ok||!Array.isArray(r.data?.skills))return Mtr("skills",r);let i=r.data.skills.filter(c5o),n=i.map(a5o);try{yDo(i)}catch(a){te("warn","skills_sync_ownerships_not_recorded"),c(V(a))}return{success:!0,skills:n}}catch(r){return Htr(r)}}async function hDo(o,t,l,r={}){let i=zu(),n=[];if(i)n.push(`entrypoint=${encodeURIComponent(i)}`);if(l)n.push(`version=${encodeURIComponent(l)}`);let a=n.length>0?`?${n.join("&")}`:"";try{let s=await Gt.get(`/api/oauth/organizations/:orgUUID/skills/${encodeURIComponent(o)}/download${a}`,{auth:"teleport-org",isBackground:r.isBackground,timeout:k,responseType:"arraybuffer",maxContentLength:f,credentials:r.credentials});if(!s.ok||!s.data)return te("warn","skills_sync_download_not_ok",{reason:s.ok?"empty_body":s.reason}),!1;let e=Buffer.from(s.data);if(e.length<2||e[0]!==80||e[1]!==75)return te("warn","skills_sync_download_not_zip",{serverError:CEn(e),bodyLen:e.length}),!1;return await u(t,e),!0}catch(s){let{kind:e}=ni(s);return te("warn","skills_sync_download_exception",{kind:e}),!1}}
export{lNt,hDo};
