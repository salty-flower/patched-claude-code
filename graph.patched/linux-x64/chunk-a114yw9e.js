// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{lFe,Zd}from"./chunk-5sytjnzz.js";import{bt}from"./chunk-3fgza2mw.js";import{xot,pje}from"./chunk-y7fk9hvk.js";import{wS,C5e}from"./chunk-cvgmjmpe.js";import{Wu}from"./chunk-bwhwnwa0.js";import{F2,B2}from"./chunk-dgvkw5xx.js";import{$re}from"./chunk-syypha8j.js";import{tNe}from"./chunk-ae0gxbdh.js";import{iQe}from"./chunk-3bmeenxf.js";import{e,r}from"./chunk-azctepqx.js";import{E,N}from"./chunk-q0z49y3j.js";N();function R({children:o}){let{bindings:n}=C5e(wS),s=E(null),d=E(new Map),m=E(new Set),a=E(new Set).current,i=E(xot());return e(pje,{bindings:n,pendingChordRef:s,pendingChord:null,setPendingChord:()=>{},activeContexts:a,registerActiveContext:()=>{},unregisterActiveContext:()=>{},handlerRegistryRef:d,preDispatchRef:m,keyHandlerRegistry:i.current,children:o})}function S(o){for(let n of o)if(n.type==="assistant"){let s=n.message.model;if(s&&s!==Wu)return s}return}function v(o){if(!("message"in o))return 1;let n=o.message.content;return Array.isArray(n)?n.length:1}async function h(o,n,s,d,{columns:m,verbose:a=!1,chunkSize:i=40,onProgress:l,storageV5:c}={}){let p=S(n),y={...lFe(),verbose:a,...p&&{mainLoopModel:p}},u=iQe(s),b=(t)=>$re(e(Zd,{session:o,storageV5:c,initialState:y,keybindings:!1,children:r(R,{children:[t[0]===0&&e(F2,{latchAnnouncementSlot:!1}),e(tNe,{children:e(B2,{source:{kind:"static",messages:n,conversationId:"export",renderRange:t},tools:u,commands:[],screen:"prompt"})})]})}),{columns:m,storageV5:c}),f=i;for(let t of n)f+=v(t);for(let t=0;t<f;t+=i){let g=await b([t,t+i]);if(bt(g).trim()==="")break;await d(g),l?.(t+i)}}async function G1e(o,n,s,{columns:d,storageV5:m}){let a=[];return await h(o,n,s,(i)=>void a.push(bt(i)),{columns:d,storageV5:m}),a.join("")}
export{G1e};
