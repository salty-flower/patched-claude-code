// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K,xU}from"./chunk-g4zaymy2.js";import{Nf}from"./chunk-ghnc2x4f.js";import{gXt,yXt}from"./chunk-82saapk3.js";import{ea}from"./chunk-9ep0zqeb.js";class i{activePark=null}var s=new K(()=>new i);async function spe(r,e,n,a){if(!Nf())return!1;let o=s.of(r),t=await gXt(e,n,a);switch(t.kind){case"refused":return!1;case"already":if(o.activePark?.needs!==e)d(o,e,{tempo:"idle",needs:void 0,detail:""},a);return!0;case"wrote":return d(o,e,t.prior,a),!0}}function d(r,e,n,a){r.activePark?.unsubscribe();let o=xU(()=>{if(Nf())return;let t=r.activePark;if(!t||t.needs!==e)return;r.activePark=null,t.unsubscribe(),yXt(e,t.prior,t.storageV5).catch(ea)});r.activePark={needs:e,prior:n,storageV5:a,unsubscribe:o}}
export{spe};
