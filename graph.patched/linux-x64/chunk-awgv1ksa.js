// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{J,Hz}from"./chunk-30zk17wm.js";import{mm}from"./chunk-1e5y3pjf.js";import{Ptn,Dtn}from"./chunk-y1479ye3.js";import{Aa}from"./chunk-dmdmtq6p.js";class i{activePark=null}var s=new J(()=>new i);async function Ume(r,e,n,a){if(!mm())return!1;let o=s.of(r),t=await Ptn(e,n,a);switch(t.kind){case"refused":return!1;case"already":if(o.activePark?.needs!==e)d(o,e,{tempo:"idle",needs:void 0,detail:""},a);return!0;case"wrote":return d(o,e,t.prior,a),!0}}function d(r,e,n,a){r.activePark?.unsubscribe();let o=Hz(()=>{if(mm())return;let t=r.activePark;if(!t||t.needs!==e)return;r.activePark=null,t.unsubscribe(),Dtn(e,t.prior,t.storageV5).catch(Aa)});r.activePark={needs:e,prior:n,storageV5:a,unsubscribe:o}}
export{Ume};
