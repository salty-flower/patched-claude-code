// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{r$e,Zd}from"./chunk-h61f7dqy.js";import{_t}from"./chunk-j4jfcs5p.js";import{Pot,f6e}from"./chunk-5x73xcbp.js";import{wv,x9e}from"./chunk-561p3yd9.js";import{Gu}from"./chunk-wpyskpd4.js";import{jU,WU}from"./chunk-dgqjhft6.js";import{Gre}from"./chunk-1y6embdw.js";import{yFe}from"./chunk-nx0sgx63.js";import{eQe}from"./chunk-4zjphwyg.js";import{e,r}from"./chunk-80eepr01.js";import{T,N}from"./chunk-5752v0zq.js";N();function R({children:o}){let{bindings:n}=x9e(wv),s=T(null),d=T(new Map),m=T(new Set),a=T(new Set).current,i=T(Pot());return e(f6e,{bindings:n,pendingChordRef:s,pendingChord:null,setPendingChord:()=>{},activeContexts:a,registerActiveContext:()=>{},unregisterActiveContext:()=>{},handlerRegistryRef:d,preDispatchRef:m,keyHandlerRegistry:i.current,children:o})}function S(o){for(let n of o)if(n.type==="assistant"){let s=n.message.model;if(s&&s!==Gu)return s}return}function v(o){if(!("message"in o))return 1;let n=o.message.content;return Array.isArray(n)?n.length:1}async function h(o,n,s,d,{columns:m,verbose:a=!1,chunkSize:i=40,onProgress:l,storageV5:c}={}){let p=S(n),y={...r$e(),verbose:a,...p&&{mainLoopModel:p}},u=eQe(s),b=(t)=>Gre(e(Zd,{session:o,storageV5:c,initialState:y,keybindings:!1,children:r(R,{children:[t[0]===0&&e(jU,{latchAnnouncementSlot:!1}),e(yFe,{children:e(WU,{source:{kind:"static",messages:n,conversationId:"export",renderRange:t},tools:u,commands:[],screen:"prompt"})})]})}),{columns:m,storageV5:c}),f=i;for(let t of n)f+=v(t);for(let t=0;t<f;t+=i){let g=await b([t,t+i]);if(_t(g).trim()==="")break;await d(g),l?.(t+i)}}async function $Ne(o,n,s,{columns:d,storageV5:m}){let a=[];return await h(o,n,s,(i)=>void a.push(_t(i)),{columns:d,storageV5:m}),a.join("")}
export{$Ne};
