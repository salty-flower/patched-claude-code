// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{z,p6}from"./chunk-8mvda08c.js";import{Fu}from"./chunk-s46qgfx7.js";import{Qkr,Zkr}from"./chunk-q410peh0.js";import{Vl}from"./chunk-t5y3xk7a.js";class i{activePark=null}var s=new z(()=>new i);async function LKe(r,e,n,a){if(!Fu())return!1;let o=s.of(r),t=await Qkr(e,n,a);switch(t.kind){case"refused":return!1;case"already":if(o.activePark?.needs!==e)d(o,e,{tempo:"idle",needs:void 0,detail:""},a);return!0;case"wrote":return d(o,e,t.prior,a),!0}}function d(r,e,n,a){r.activePark?.unsubscribe();let o=p6(()=>{if(Fu())return;let t=r.activePark;if(!t||t.needs!==e)return;r.activePark=null,t.unsubscribe(),Zkr(e,t.prior,t.storageV5).catch(Vl)});r.activePark={needs:e,prior:n,storageV5:a,unsubscribe:o}}
export{LKe};
