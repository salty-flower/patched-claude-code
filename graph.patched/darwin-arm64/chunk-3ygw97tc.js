// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{C}from"./chunk-wryttfdq.js";import{SP}from"./chunk-x875pyqe.js";import{P}from"./chunk-8txsa0tf.js";function ml(t,e){let o=typeof e==="object"&&e!==null&&"action"in e?String(e.action):typeof e==="object"&&e!==null?Object.keys(e).slice(0,3).join(","):String(e);throw new C(`Artifact ${t}: no arm for ${o} (routing table and handler disagree)`,"Artifact action routing table and handler disagree")}var r=500,lMi=4000;function HI(t,e=r){let o=Array.isArray(t)?t.slice(0,e):[],n=o.filter(P);return{rows:n,unreadable:o.length-n.length,pastCap:Array.isArray(t)?t.length-o.length:0}}function PV(t,e){return SP(typeof t==="string"?t:typeof t==="number"||typeof t==="boolean"?String(t):"",e)}
export{ml,lMi,HI,PV};
