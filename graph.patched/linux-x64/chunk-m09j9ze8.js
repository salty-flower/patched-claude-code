// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
function ne(t,r,e){return new Promise((o,i)=>{if(r?.aborted){if(e?.throwOnAbort||e?.abortError)i(e.abortError?.()??Error("aborted"));else o();return}let n=setTimeout((a,u,d)=>{a?.removeEventListener("abort",u),d()},t,r,m,o);function m(){if(clearTimeout(n),e?.throwOnAbort||e?.abortError)i(e.abortError?.()??Error("aborted"));else o()}if(r?.addEventListener("abort",m,{once:!0}),e?.unref)n.unref()})}function c(t,r){t(Error(r))}function Vt(t,r,e){let o,i=new Promise((n,m)=>{o=setTimeout(c,r,m,e)});return Promise.race([t,i]).finally(()=>{if(o!==void 0)clearTimeout(o)})}var b=(t,r)=>{let e=setTimeout(t,r);return()=>clearTimeout(e)};function un(t,r,e=b){let o=()=>{},i=new Promise((n)=>{o=e(()=>n(void 0),r)});return Promise.race([t,i]).finally(o)}async function MN(t,r,e){let o=()=>{t.catch(()=>{})};if(r.aborted)throw o(),e();let i=()=>{};try{return await Promise.race([t,new Promise((n,m)=>{i=()=>m(e()),r.addEventListener("abort",i,{once:!0})})])}catch(n){throw o(),n}finally{r.removeEventListener("abort",i)}}
export{ne,Vt,un,MN};
