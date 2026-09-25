// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{E}from"./chunk-shf1fjz2.js";import{u}from"./chunk-0dpks9t0.js";import{eNe}from"./chunk-5cz12mxk.js";import{Jt,Hk,XM}from"./chunk-etkg2s89.js";import{JF,yn,gce}from"./chunk-8fzw8ekp.js";import{lstat as P,realpath as c,rm as R}from"fs/promises";import{basename as N,dirname as T,isAbsolute as d,join as a}from"path";var g="side.git",l=/^[A-Za-z0-9][A-Za-z0-9_-]{0,127}$/,p=/^[a-z][a-z0-9-]{0,31}(?:\/[a-z0-9][a-z0-9_-]{0,63})?$/;function bWt(t){return a(t,eNe,g)}function Rl(t,r){let e=`${Hk}${t}/${r}`;return l.test(t)&&p.test(r)&&XM(e)?e:null}var f="receiving";function m7n(t,r){let e=`${Hk}${f}/${t}/${String(r)}`;return l.test(t)&&Number.isSafeInteger(r)&&r>=0&&XM(e)?e:null}async function pce(t,r){if(!l.test(r))return null;return m(t,`${Hk}${r}/`)}async function m(t,r){let e=await yn(t,["for-each-ref","--format=%(objectname) %(refname)",r]);if(e.exitCode!==0)return null;let o=e.stdout.split(`
`).filter((i)=>i!=="").map((i)=>{let[n="",s=""]=i.split(" ");return{name:s,id:n}}).filter((i)=>i.name.startsWith(r)&&XM(i.name));return o.every((i)=>Jt.test(i.id))?o:null}async function g7n(t,r){let e=await pce(t,r),o=e===null?null:await m(t,`${Hk}${f}/${r}/`);if(e===null||o===null||!await gce(t,[...e,...o].map((n)=>n.name)))return!1;let i=a(t.gitDir,...Hk.split("/"),r);try{let[n,s]=await Promise.all([c(i),c(t.gitDir)]);if(n!==a(s,...Hk.split("/"),r))return!1;return await R(n,{recursive:!0,force:!0}),!0}catch(n){return E(n)==="ENOENT"}}async function Rht(t,r,e,o=JF){await g7n({gitDir:t,sessionRoot:r,timeoutMs:o},e).catch(u)}
export{bWt,Rl,m7n,pce,g7n,Rht};
