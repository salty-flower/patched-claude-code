// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Z}from"./chunk-h4js79s0.js";import{_pe}from"./chunk-hf1k28h8.js";import{Nw,M_}from"./chunk-7k96963f.js";var i=200,sja="started by Claude";function tds(r,{description:s,toolUseId:o,abortController:t}){let e=_pe(s,i)||sja,n=Z(e,i),a=Nw("local_script"),l={...M_(a,"local_script",n.length<e.length?`${n}\u2026`:e,o),type:"local_script",status:"running",outputFile:"",abortController:t};return r.register(l),a}function nds(r,s,o){if(s.get(r)?.status!=="running")return!1;return s.update(r,(t)=>t.status!=="running"?t:{...t,status:o,endTime:Date.now(),notified:!0,abortController:void 0}),!0}var q3a={name:"ScriptTask",type:"local_script",async kill(r,s,o,t){let e=s.get(r);if(e?.type!=="local_script"||e.status!=="running")return;e.abortController?.abort(t)}};
export{sja,tds,nds,q3a};
