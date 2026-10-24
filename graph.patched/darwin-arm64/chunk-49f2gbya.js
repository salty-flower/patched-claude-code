// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Xbe}from"./chunk-ersar6wn.js";import{R,v,vr}from"./chunk-36ysyspx.js";import{m}from"./chunk-wn8xtaqg.js";import{Y}from"./chunk-923em3jx.js";import{hs,dX}from"./chunk-5xe1amq0.js";import{randomUUID as g}from"crypto";import{constants as h}from"fs";import{lstat as D,mkdir as _,open as c,readlink as F,realpath as I,rename as L,rmdir as p,stat as b}from"fs/promises";import{basename as f,dirname as y,join as E}from"path";var u=dX|h.O_DIRECTORY|h.O_NOFOLLOW|hs;function d(n){return`/proc/self/fd/${n.fd}`}async function O(n){return(await n.stat()).uid===process.getuid?.()}async function $8e(n,o){return"not_linux"}async function R$n(n){let o=E(n.at,`.probe-${g()}`),r=`${o}-moved`,t;try{await _(o,{mode:448}),t=await c(o,u),await L(o,r);let e=await F(d(t)).catch(()=>""),a=await b(d(t)).catch(()=>{return});return f(e)===f(r)&&a?.ino===(await t.stat()).ino||"holds_do_not_follow"}catch(e){return vr(e)??"unknown"}finally{await t?.close(),await Promise.allSettled([p(o),p(r)])}}async function zut(n){let o=Xbe();if(o===null||y(n)!==o)return await _(n,{recursive:!0,mode:448}),{at:n,release:async()=>{}};let r=await $8e(n,2);if(typeof r==="string")throw Y("warn","attachments_in_user_data",{state:"write_refused",reason:r}),m("bridge_attachment_user_data_root",r),new R(`nothing was saved: the attachments folder cannot be used (${r})`,"nothing was saved: the attachments folder cannot be used");return r}
export{$8e,R$n,zut};
