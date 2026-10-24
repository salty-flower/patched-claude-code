// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{In}from"./chunk-gp4v3dbd.js";import{jH,mC,Qb,MS}from"./chunk-yzy35wkw.js";import{je}from"./chunk-x0a7sawk.js";import{Rm,R8r}from"./chunk-vh7e37w8.js";import{GA}from"./chunk-hv1nfndb.js";import{dirname as v,join as a}from"path";import{realpath as f}from"fs";import{promisify as m}from"util";var h=m(f.native);function c(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:jH(e)||"empty-id"}async function d(e,t,{isRootResolved:n=!1}={}){return n?In(e):MS(e,GA(t))}async function Pbs(e,t,n,i){return a(Qb(await d(e,n,i)),abr(t))}async function Ibs(e,t,n,i){let o=await d(e,n,i),p=a(Qb(o),abr(t)),r=mC(o),s=n===void 0?void 0:mco(r,t);return{path:p,projectKey:r,v5:n===void 0||s===void 0?void 0:{backend:n,key:s}}}function mco(e,t){let n=je.dirSyncRecord(e,c(t));return Rm(n)===void 0?n:void 0}function abr(e){return`${c(e)}${R8r}`}
export{Pbs,Ibs,mco,abr};
