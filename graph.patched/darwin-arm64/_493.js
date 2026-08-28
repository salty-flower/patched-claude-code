// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{ieb as a,jeb as c}from"./_496.js";import{leb as d,neb as y}from"./_497.js";import{TIb as R,_Ib as l,iJb as o,lJb as s}from"./_577.js";import{Exd as f}from"./_839.js";function L(e,n){switch(n.type){case"kill":{if(n.text.length===0)return e.mode.type==="idle"?e:{...e,mode:{type:"idle"}};return{ring:e.mode.type==="killing"&&e.ring.length>0?[n.direction==="prepend"?n.text+e.ring[0]:e.ring[0]+n.text,...e.ring.slice(1)]:[n.text,...e.ring].slice(0,I),mode:{type:"killing"}}}case"yank":return{...e,mode:{type:"yanked",start:n.start,length:n.length,index:0}};case"yankPop":{if(e.mode.type!=="yanked"||e.ring.length<=1)return e;let t=(e.mode.index+1)%e.ring.length;return{...e,mode:{...e.mode,index:t}}}case"updateYankLength":if(e.mode.type!=="yanked")return e;return{...e,mode:{...e.mode,length:n.length}};case"interrupt":if(e.mode.type==="idle")return e;return{...e,mode:{type:"idle"}}}}function H(e){return e.ring[0]??""}function N(e){if(e.mode.type!=="yanked"||e.ring.length<=1)return null;let n=(e.mode.index+1)%e.ring.length,{start:t,length:g}=e.mode;return{text:e.ring[n]??"",start:t,length:g}}function m(){let e=b;return{get state(){return e},dispatch(n){e=L(e,n)}}}function P(w){let x=a(5),{handle:r,children:p}=w,h;if(x[0]!==r)h=()=>r??m(),x[0]=r,x[1]=h;else h=x[1];let[M]=o(h);const u=r??M;let K;if(x[2]!==p||x[3]!==u)K=d(i.Provider,{value:u,children:p}),x[2]=p,x[3]=u,x[4]=K;else K=x[4];return K}function S(){let k=l(i);if(!k){throw ReferenceError("useKillRing cannot be called outside of a <KillRingProvider /> (mounted around every Ink root by src/ink.ts)")}return k}var I=10,b,i;var v=f(()=>{s();y();c();b={ring:[],mode:{type:"idle"}};i=R(null)});
export{H as Vdb,N as Wdb,m as Xdb,P as Ydb,S as Zdb,v as _db};
