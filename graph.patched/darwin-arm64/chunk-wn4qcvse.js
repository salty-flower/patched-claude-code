// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{NP}from"./chunk-m8nhymg4.js";import{tp}from"./chunk-e44qnbvj.js";import{Xns,Jns}from"./chunk-sck5gyxr.js";import{Jd}from"./chunk-rx6swq4t.js";import{W}from"./chunk-z1a5ffdv.js";class i{activePark=null}var s=new W(()=>new i);async function CIt(r,e,n,a){if(!tp())return!1;let o=s.of(r),t=await Xns(e,n,a);switch(t.kind){case"refused":return!1;case"already":if(o.activePark?.needs!==e)d(o,e,{tempo:"idle",needs:void 0,detail:""},a);return!0;case"wrote":return d(o,e,t.prior,a),!0}}function d(r,e,n,a){r.activePark?.unsubscribe();let o=NP(()=>{if(tp())return;let t=r.activePark;if(!t||t.needs!==e)return;r.activePark=null,t.unsubscribe(),Jns(e,t.prior,t.storageV5).catch(Jd)});r.activePark={needs:e,prior:n,storageV5:a,unsubscribe:o}}
export{CIt};
