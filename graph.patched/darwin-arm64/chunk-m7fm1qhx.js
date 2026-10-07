// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{q,ni}from"./chunk-fqsygynq.js";import{c}from"./chunk-qfs4y3ww.js";import{te}from"./chunk-yt7xs5e7.js";import{Wu}from"./chunk-mcq8tx7b.js";import{zt}from"./chunk-s46qgfx7.js";import{M9o,L9o,CEe,qtr,Ktr,Yse,Fvn}from"./chunk-5kvchewr.js";import{LMo}from"./chunk-54s7akr9.js";import{writeFile as u}from"fs/promises";var m=30000,k=300000,f=CEe,y=16777216,d="/api/oauth/organizations/:orgUUID/skills/list-skills?include_wiggle_skills=true";async function lNt(o={}){let t=await p(o);if(!t.success&&Yse(t))return p(o);return t}async function p(o){let t=Wu(),l=t?`${d}&entrypoint=${encodeURIComponent(t)}`:d;try{let r=await zt.get(l,{auth:"teleport-org",isBackground:o.isBackground,timeout:m,maxContentLength:y,credentials:o.credentials});if(!r.ok||!Array.isArray(r.data?.skills))return qtr("skills",r);let i=r.data.skills.filter(L9o),n=i.map(M9o);try{LMo(i)}catch(a){te("warn","skills_sync_ownerships_not_recorded"),c(q(a))}return{success:!0,skills:n}}catch(r){return Ktr(r)}}async function DMo(o,t,l,r={}){let i=Wu(),n=[];if(i)n.push(`entrypoint=${encodeURIComponent(i)}`);if(l)n.push(`version=${encodeURIComponent(l)}`);let a=n.length>0?`?${n.join("&")}`:"";try{let s=await zt.get(`/api/oauth/organizations/:orgUUID/skills/${encodeURIComponent(o)}/download${a}`,{auth:"teleport-org",isBackground:r.isBackground,timeout:k,responseType:"arraybuffer",maxContentLength:f,credentials:r.credentials});if(!s.ok||!s.data)return te("warn","skills_sync_download_not_ok",{reason:s.ok?"empty_body":s.reason}),!1;let e=Buffer.from(s.data);if(e.length<2||e[0]!==80||e[1]!==75)return te("warn","skills_sync_download_not_zip",{serverError:Fvn(e),bodyLen:e.length}),!1;return await u(t,e),!0}catch(s){let{kind:e}=ni(s);return te("warn","skills_sync_download_exception",{kind:e}),!1}}
export{lNt,DMo};
