// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{PH}from"./chunk-dxktn51d.js";import{W}from"./chunk-2fbnw5gg.js";import{Kp}from"./chunk-7p6jp6kj.js";import{PXr,IXr}from"./chunk-pm2c1ws2.js";import{bl}from"./chunk-cskmvz0m.js";class i{activePark=null}var s=new W(()=>new i);async function Nnt(r,e,n,a){if(!Kp())return!1;let o=s.of(r),t=await PXr(e,n,a);switch(t.kind){case"refused":return!1;case"already":if(o.activePark?.needs!==e)d(o,e,{tempo:"idle",needs:void 0,detail:""},a);return!0;case"wrote":return d(o,e,t.prior,a),!0}}function d(r,e,n,a){r.activePark?.unsubscribe();let o=PH(()=>{if(Kp())return;let t=r.activePark;if(!t||t.needs!==e)return;r.activePark=null,t.unsubscribe(),IXr(e,t.prior,t.storageV5).catch(bl)});r.activePark={needs:e,prior:n,storageV5:a,unsubscribe:o}}
export{Nnt};
