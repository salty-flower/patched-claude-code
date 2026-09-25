// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{V,DU}from"./chunk-s8xs8s76.js";import{fp}from"./chunk-twxt3h9y.js";import{O8n,D8n}from"./chunk-3fbjv6p6.js";import{Sl}from"./chunk-kdpydqc7.js";class i{activePark=null}var s=new V(()=>new i);async function ZFe(r,e,n,a){if(!fp())return!1;let o=s.of(r),t=await O8n(e,n,a);switch(t.kind){case"refused":return!1;case"already":if(o.activePark?.needs!==e)d(o,e,{tempo:"idle",needs:void 0,detail:""},a);return!0;case"wrote":return d(o,e,t.prior,a),!0}}function d(r,e,n,a){r.activePark?.unsubscribe();let o=DU(()=>{if(fp())return;let t=r.activePark;if(!t||t.needs!==e)return;r.activePark=null,t.unsubscribe(),D8n(e,t.prior,t.storageV5).catch(Sl)});r.activePark={needs:e,prior:n,storageV5:a,unsubscribe:o}}
export{ZFe};
