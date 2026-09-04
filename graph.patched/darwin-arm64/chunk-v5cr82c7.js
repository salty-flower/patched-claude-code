// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{z,Cs}from"./chunk-yhfssb7x.js";function b6e(t){let e;for(let n in t)if(n.startsWith("_PROTO_")){if(e===void 0)e={...t};delete e[n]}return e??t}var Ykr=1000;function Jkr(){return{eventQueue:[],sink:null,droppedEventCount:0}}function i(t,e){if(t.eventQueue.length>=Ykr)t.eventQueue.shift(),t.droppedEventCount++;t.eventQueue.push(e)}class Qmr{state=Jkr()}var Qkr=new z(()=>new Qmr);function a(){return Cs(Qkr)}function JMr(t){a().state=t}function lDn(t){let e=a().state;if(e.sink!==null)return;if(e.sink=t,e.eventQueue.length>0){let n=e.eventQueue;e.eventQueue=[],queueMicrotask(()=>{for(let o of n)if(o.async)t.logEventAsync(o.eventName,o.metadata);else t.logEvent(o.eventName,o.metadata)})}}function s(t,e){let n=a().state;if(n.sink===null){i(n,{eventName:t,metadata:e,async:!1});return}n.sink.logEvent(t,e)}async function ss(t,e){let n=a().state;if(n.sink===null){i(n,{eventName:t,metadata:e,async:!0});return}await n.sink.logEventAsync(t,e)}
export{b6e,Ykr,Jkr,Qmr,Qkr,JMr,lDn,s,ss};
