// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{rje,vf}from"./chunk-5zhvdrb2.js";import{Et}from"./chunk-1nj7y1sr.js";import{elt,dWe}from"./chunk-73qfv3w2.js";import{dw,E9e}from"./chunk-d1ha7s5v.js";import{rd}from"./chunk-xbnpr8bf.js";import{U1,j1}from"./chunk-gppwqxc4.js";import{cse}from"./chunk-jzyq1s6b.js";import{dUe}from"./chunk-dd300mnp.js";import{Htt}from"./chunk-mm7y31fj.js";import{e,r}from"./chunk-ys8dsnqt.js";import{v,F}from"./chunk-v59pjxqq.js";F();function R({children:o}){let{bindings:n}=E9e(dw),s=v(null),d=v(new Map),m=v(new Set),a=v(new Set).current,i=v(elt());return e(dWe,{bindings:n,pendingChordRef:s,pendingChord:null,setPendingChord:()=>{},activeContexts:a,registerActiveContext:()=>{},unregisterActiveContext:()=>{},handlerRegistryRef:d,preDispatchRef:m,keyHandlerRegistry:i.current,children:o})}function S(o){for(let n of o)if(n.type==="assistant"){let s=n.message.model;if(s&&s!==rd)return s}return}function h(o){if(!("message"in o))return 1;let n=o.message.content;return Array.isArray(n)?n.length:1}async function C(o,n,s,d,{columns:m,verbose:a=!1,chunkSize:i=40,onProgress:l,storageV5:c}={}){let p=S(n),y={...rje(),verbose:a,...p&&{mainLoopModel:p}},u=Htt(s),b=(t)=>cse(e(vf,{session:o,storageV5:c,initialState:y,keybindings:!1,children:r(R,{children:[t[0]===0&&e(U1,{latchAnnouncementSlot:!1}),e(dUe,{children:e(j1,{source:{kind:"static",messages:n,conversationId:"export",renderRange:t},tools:u,commands:[],screen:"prompt"})})]})}),{columns:m,storageV5:c}),f=i;for(let t of n)f+=h(t);for(let t=0;t<f;t+=i){let g=await b([t,t+i]);if(Et(g).trim()==="")break;await d(g),l?.(t+i)}}async function L1e(o,n,s,{columns:d,storageV5:m}){let a=[];return await C(o,n,s,(i)=>void a.push(Et(i)),{columns:d,storageV5:m}),a.join("")}
export{L1e};
