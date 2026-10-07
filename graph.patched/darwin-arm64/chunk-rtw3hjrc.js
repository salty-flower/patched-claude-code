// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{yt,F}from"./chunk-8mvda08c.js";var E$t=180000;class a{busy=!1;edgeAt=0;busySince=0;idleWaiters=new Set;valveTimer=null}var d=new yt(()=>new a);function t(){return d.of(F())}function l(r){if(r.valveTimer!==null)clearTimeout(r.valveTimer),r.valveTimer=null;let e=[...r.idleWaiters];r.idleWaiters.clear();for(let n of e)queueMicrotask(n)}function v$t(r){let e=t();if(r===e.busy)return;if(e.busy=r,e.busySince=r?performance.now():0,e.edgeAt=Date.now(),!r)l(e)}function vxe(){return t().busy}function FNo(){return t().edgeAt}function G3n(r=performance.now(),e=E$t){let n=t();return n.busy&&r-n.busySince<e}function $No(r=performance.now(),e=E$t){let n=t();return n.busy&&r-n.busySince>=e}function UNo(r,e,n=E$t){if(e.aborted)return()=>{};let o=t(),s=!1,i=()=>{if(e.removeEventListener("abort",u),!s&&!e.aborted)r()},u=()=>{s=!0,o.idleWaiters.delete(i),e.removeEventListener("abort",u)};if(!G3n(performance.now(),n))return queueMicrotask(i),u;if(o.idleWaiters.add(i),e.addEventListener("abort",u,{once:!0}),o.valveTimer===null){let c=o.busySince+n-performance.now();o.valveTimer=setTimeout(l,Math.max(0,c),o),o.valveTimer.unref?.()}return u}
export{E$t,v$t,vxe,FNo,G3n,$No,UNo};
