// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Z}from"./chunk-b5xhmzas.js";import{kpe}from"./chunk-aay5maza.js";import{Fw,M_}from"./chunk-n5274ece.js";var i=200,q2a="started by Claude";function Rds(r,{description:s,toolUseId:o,abortController:t}){let e=kpe(s,i)||q2a,n=Z(e,i),a=Fw("local_script"),l={...M_(a,"local_script",n.length<e.length?`${n}\u2026`:e,o),type:"local_script",status:"running",outputFile:"",abortController:t};return r.register(l),a}function xds(r,s,o){if(s.get(r)?.status!=="running")return!1;return s.update(r,(t)=>t.status!=="running"?t:{...t,status:o,endTime:Date.now(),notified:!0,abortController:void 0}),!0}var L5a={name:"ScriptTask",type:"local_script",async kill(r,s,o,t){let e=s.get(r);if(e?.type!=="local_script"||e.status!=="running")return;e.abortController?.abort(t)}};
export{q2a,Rds,xds,L5a};
