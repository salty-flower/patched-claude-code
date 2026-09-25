// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{gT,wS,af,hp}from"./chunk-97rwyxer.js";import{Te}from"./chunk-tcx7fvpc.js";import{Lf,FWn}from"./chunk-5cz12mxk.js";import{ng}from"./chunk-c15ft47y.js";import{dirname as c,join as r}from"path";function VX(t){return/^[A-Za-z0-9_-]{1,128}$/.test(t)?t:gT(t)}async function IWt(t,e,n){return r(af(await hp(t,ng(n))),E_n(e))}async function Xte(t,e,n){let o=await hp(t,ng(n)),s=r(af(o),E_n(e)),i=wS(o),a=n===void 0?void 0:k7n(i,e);return{path:s,projectKey:i,v5:n===void 0||a===void 0?void 0:{backend:n,key:a}}}function k7n(t,e){let n=Te.dirSyncRecord(t,VX(e));return Lf(n)===void 0?n:void 0}function E_n(t){return`${VX(t)}${FWn}`}var p=".dir-sync-empty.json";function d(t){return`${VX(t)}${p}`}function HWt(t,e){return r(c(t),d(e))}
export{VX,IWt,Xte,k7n,E_n,HWt};
