// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{DP}from"./chunk-r3adsed5.js";import{tp}from"./chunk-a5a37ds7.js";import{Ans,Cns}from"./chunk-g8pc7yw4.js";import{Qd}from"./chunk-ea1fhjdw.js";import{W}from"./chunk-z1a5ffdv.js";class i{activePark=null}var s=new W(()=>new i);async function SOt(r,e,n,a){if(!tp())return!1;let o=s.of(r),t=await Ans(e,n,a);switch(t.kind){case"refused":return!1;case"already":if(o.activePark?.needs!==e)d(o,e,{tempo:"idle",needs:void 0,detail:""},a);return!0;case"wrote":return d(o,e,t.prior,a),!0}}function d(r,e,n,a){r.activePark?.unsubscribe();let o=DP(()=>{if(tp())return;let t=r.activePark;if(!t||t.needs!==e)return;r.activePark=null,t.unsubscribe(),Cns(e,t.prior,t.storageV5).catch(Qd)});r.activePark={needs:e,prior:n,storageV5:a,unsubscribe:o}}
export{SOt};
