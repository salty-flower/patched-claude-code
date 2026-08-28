// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Jid as i,Thd as s,Uhd as c,krd as v}from"./_812.js";import{Exd as l}from"./_839.js";function S(t){let e;for(let n in t)if(n.startsWith("_PROTO_")){if(e===void 0)e={...t};delete e[n]}return e??t}function E(){return{eventQueue:[],sink:null,droppedEventCount:0}}function r(t,e){if(t.eventQueue.length>=d)t.eventQueue.shift(),t.droppedEventCount++;t.eventQueue.push(e)}class u{state=E()}function a(){return p.of(i().host)}function _(t){a().state=t}function A(t){let e=a().state;if(e.sink!==null)return;if(e.sink=t,e.eventQueue.length>0){let n=e.eventQueue;e.eventQueue=[],queueMicrotask(()=>{for(let o of n)if(o.async)t.logEventAsync(o.eventName,o.metadata);else t.logEvent(o.eventName,o.metadata)})}}function k(t,e){let n=a().state;if(n.sink===null){r(n,{eventName:t,metadata:e,async:!1});return}n.sink.logEvent(t,e)}async function m(t,e){let n=a().state;if(n.sink===null){r(n,{eventName:t,metadata:e,async:!0});return}await n.sink.logEventAsync(t,e)}var d=1000,p;var y=l(()=>{v();c();p=new s(()=>new u)});
export{S as Sad,d as Tad,E as Uad,u as Vad,p as Wad,_ as Xad,A as Yad,k as Zad,m as _ad,y as $ad};
