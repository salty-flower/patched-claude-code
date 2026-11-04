// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{IR}from"./chunk-ecyypctx.js";import{W}from"./chunk-8915xd28.js";import{Xf}from"./chunk-axsjfnwn.js";import{THo,AHo}from"./chunk-ay4x1r8g.js";import{wd}from"./chunk-fz08tv6f.js";class i{activePark=null}var s=new W(()=>new i);async function Mbt(r,e,n,a){if(!Xf())return!1;let o=s.of(r),t=await THo(e,n,a);switch(t.kind){case"refused":return!1;case"already":if(o.activePark?.needs!==e)d(o,e,{tempo:"idle",needs:void 0,detail:""},a);return!0;case"wrote":return d(o,e,t.prior,a),!0}}function d(r,e,n,a){r.activePark?.unsubscribe();let o=IR(()=>{if(Xf())return;let t=r.activePark;if(!t||t.needs!==e)return;r.activePark=null,t.unsubscribe(),AHo(e,t.prior,t.storageV5).catch(wd)});r.activePark={needs:e,prior:n,storageV5:a,unsubscribe:o}}
export{Mbt};
