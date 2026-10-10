// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{lt,B}from"./chunk-4bw62nzm.js";var Qzt=180000;class s{busy=!1;running=null;key=null;edgeAt=0;busySince=0;idleWaiters=new Set;endWaiters=new Set;valveTimer=null}var f=new lt(()=>new s);function u(){return f.of(B())}function a(n){if(n.valveTimer!==null)clearTimeout(n.valveTimer),n.valveTimer=null;let r=[...n.idleWaiters];n.idleWaiters.clear(),d(r)}function d(n){for(let r of n)queueMicrotask(r)}function Zzt(n,r=null){let e=u(),o=r===null||r===e.key;if(n?e.busy&&o:!e.busy||!o)return;if(e.busy)a(e),d([...e.endWaiters]),e.endWaiters.clear();e.busy=n,e.running=n?Symbol("foreground turn"):null,e.key=n?r:null,e.busySince=n?performance.now():0,e.edgeAt=Date.now()}function dHe(){return u().busy}function r8o(){return u().edgeAt}function Mtr(n=performance.now(),r=Qzt){let e=u();return e.busy&&n-e.busySince<r}function o8o(n=performance.now(),r=Qzt){let e=u();return e.busy&&n-e.busySince>=r}function s8o(n,r,e=Qzt){if(r.aborted)return()=>{};let o=u(),l=!1,i=()=>{if(r.removeEventListener("abort",t),!l&&!r.aborted)n()},t=()=>{l=!0,o.idleWaiters.delete(i),r.removeEventListener("abort",t)};if(!Mtr(performance.now(),e))return queueMicrotask(i),t;if(o.idleWaiters.add(i),r.addEventListener("abort",t,{once:!0}),o.valveTimer===null){let c=o.busySince+e-performance.now();o.valveTimer=setTimeout(a,Math.max(0,c),o),o.valveTimer.unref?.()}return t}
export{Qzt,Zzt,dHe,r8o,Mtr,o8o,s8o};
