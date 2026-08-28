// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{bwa as k,cwa as g,ewa as v}from"./_444.js";import{h8a as P,s7a as p}from"./_472.js";import{Skc as S,ukc as i}from"./_668.js";import{Thd as s,Uhd as l,krd as f,umd as u}from"./_812.js";f();v();P();S();l();class d{activePark=null}var c=new s(()=>new d);async function W(r,e,n,a){if(!i())return!1;let o=c.of(r),t=await k(e,n,a);switch(t.kind){case"refused":return!1;case"already":if(o.activePark?.needs!==e)m(o,e,{tempo:"idle",needs:void 0,detail:""},a);return!0;case"wrote":return m(o,e,t.prior,a),!0}}function m(r,e,n,a){r.activePark?.unsubscribe();let o=u(()=>{if(i())return;let t=r.activePark;if(!t||t.needs!==e)return;r.activePark=null,t.unsubscribe(),g(e,t.prior,t.storageV5).catch(p)});r.activePark={needs:e,prior:n,storageV5:a,unsubscribe:o}}
export{W as Jk};
