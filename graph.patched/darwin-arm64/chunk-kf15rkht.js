// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{l}from"./chunk-shf1fjz2.js";import{Fi}from"./chunk-k59kdd19.js";import{b,Q,t}from"./chunk-wvb0gwjm.js";import{f}from"./chunk-1y7zyxh8.js";import{CWt,__n}from"./chunk-z03ccycr.js";import{Xte,HWt}from"./chunk-fjbc9k92.js";import{o,C,Je,z,R}from"./chunk-rvnav1yx.js";var y=1,d=["flag_off","consent_off","not_served","arm_slow","arm_failed","cancelled","no_word"];var c=f(()=>Je({version:R(y),kind:R("created_empty_unfilled"),sessionId:o().min(1).max(256),createdAtMs:C().int().nonnegative(),why:z(d)}));function p(s,n){let e;try{e=Q(s.toString("utf8"))}catch{return null}let r=c().safeParse(e);return r.success&&r.data.sessionId===n?r.data:null}async function S({recordPath:s,v5:n,markerPath:e,sessionId:r,why:i,nowMs:a=Date.now}){try{if((await CWt(s,n)).kind!=="absent")return;let m={version:y,kind:"created_empty_unfilled",sessionId:r,createdAtMs:a(),why:i};await __n(e,Buffer.from(b(m),"utf8"))}catch(m){t(`[dirSync] created-empty marker for ${r} not written: ${l(m)}; a later attach will not be warned that this session is empty`)}}async function w3r(s,n){let e=await CWt(s);return e.kind==="ok"?p(e.content,n):null}async function E3r({gitRoot:s,sessionId:n,storageV5:e,why:r}){let i=Fi(n);try{let a=await Xte(s,i,e);await S({recordPath:a.path,v5:a.v5,markerPath:HWt(a.path,i),sessionId:i,why:r})}catch(a){t(`[dirSync] created-empty marker for ${i} not written: could not work out its path: ${l(a)}; a later attach will not be warned that this session is empty`)}}
export{w3r,E3r};
