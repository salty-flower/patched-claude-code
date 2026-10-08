// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{mt,F}from"./chunk-vd0a9d2s.js";var gjt=180000;class s{busy=!1;running=null;key=null;edgeAt=0;busySince=0;idleWaiters=new Set;endWaiters=new Set;valveTimer=null}var f=new mt(()=>new s);function u(){return f.of(F())}function a(n){if(n.valveTimer!==null)clearTimeout(n.valveTimer),n.valveTimer=null;let r=[...n.idleWaiters];n.idleWaiters.clear(),d(r)}function d(n){for(let r of n)queueMicrotask(r)}function hjt(n,r=null){let e=u(),o=r===null||r===e.key;if(n?e.busy&&o:!e.busy||!o)return;if(e.busy)a(e),d([...e.endWaiters]),e.endWaiters.clear();e.busy=n,e.running=n?Symbol("foreground turn"):null,e.key=n?r:null,e.busySince=n?performance.now():0,e.edgeAt=Date.now()}function IIe(){return u().busy}function FGo(){return u().edgeAt}function zXn(n=performance.now(),r=gjt){let e=u();return e.busy&&n-e.busySince<r}function $Go(n=performance.now(),r=gjt){let e=u();return e.busy&&n-e.busySince>=r}function UGo(n,r,e=gjt){if(r.aborted)return()=>{};let o=u(),l=!1,i=()=>{if(r.removeEventListener("abort",t),!l&&!r.aborted)n()},t=()=>{l=!0,o.idleWaiters.delete(i),r.removeEventListener("abort",t)};if(!zXn(performance.now(),e))return queueMicrotask(i),t;if(o.idleWaiters.add(i),r.addEventListener("abort",t,{once:!0}),o.valveTimer===null){let c=o.busySince+e-performance.now();o.valveTimer=setTimeout(a,Math.max(0,c),o),o.valveTimer.unref?.()}return t}
export{gjt,hjt,IIe,FGo,zXn,$Go,UGo};
