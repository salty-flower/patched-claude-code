// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{i2e,Cp}from"./chunk-km4np6mj.js";import{Et}from"./chunk-nag2zkkq.js";import{nlt,f9e}from"./chunk-jnz6ntmk.js";import{dT,Cze}from"./chunk-rrxdw3hn.js";import{rd}from"./chunk-89sa2r2x.js";import{qU,GU}from"./chunk-0y6jfx8k.js";import{cse}from"./chunk-7a2df4p4.js";import{gBe}from"./chunk-gj1kt5ej.js";import{Att}from"./chunk-dwebqqet.js";import{e,r}from"./chunk-wk3xnwvn.js";import{C,F}from"./chunk-w6mhhrt2.js";F();function R({children:o}){let{bindings:n}=Cze(dT),s=C(null),d=C(new Map),m=C(new Set),a=C(new Set).current,i=C(nlt());return e(f9e,{bindings:n,pendingChordRef:s,pendingChord:null,setPendingChord:()=>{},activeContexts:a,registerActiveContext:()=>{},unregisterActiveContext:()=>{},handlerRegistryRef:d,preDispatchRef:m,keyHandlerRegistry:i.current,children:o})}function S(o){for(let n of o)if(n.type==="assistant"){let s=n.message.model;if(s&&s!==rd)return s}return}function v(o){if(!("message"in o))return 1;let n=o.message.content;return Array.isArray(n)?n.length:1}async function h(o,n,s,d,{columns:m,verbose:a=!1,chunkSize:i=40,onProgress:l,storageV5:c}={}){let p=S(n),y={...i2e(),verbose:a,...p&&{mainLoopModel:p}},u=Att(s),b=(t)=>cse(e(Cp,{session:o,storageV5:c,initialState:y,keybindings:!1,children:r(R,{children:[t[0]===0&&e(qU,{latchAnnouncementSlot:!1}),e(gBe,{children:e(GU,{source:{kind:"static",messages:n,conversationId:"export",renderRange:t},tools:u,commands:[],screen:"prompt"})})]})}),{columns:m,storageV5:c}),f=i;for(let t of n)f+=v(t);for(let t=0;t<f;t+=i){let g=await b([t,t+i]);if(Et(g).trim()==="")break;await d(g),l?.(t+i)}}async function OUe(o,n,s,{columns:d,storageV5:m}){let a=[];return await h(o,n,s,(i)=>void a.push(Et(i)),{columns:d,storageV5:m}),a.join("")}
export{OUe};
