// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Z}from"./chunk-zmmnrc9r.js";import{Cae}from"./chunk-snn1ce1x.js";import{ew,Rg}from"./chunk-yrezdw36.js";var i=200,H7i="started by Claude";function sjo(r,{description:s,toolUseId:o,abortController:t}){let e=Cae(s,i)||H7i,n=Z(e,i),a=ew("local_script"),l={...Rg(a,"local_script",n.length<e.length?`${n}\u2026`:e,o),type:"local_script",status:"running",outputFile:"",abortController:t};return r.register(l),a}function ijo(r,s,o){if(s.get(r)?.status!=="running")return!1;return s.update(r,(t)=>t.status!=="running"?t:{...t,status:o,endTime:Date.now(),notified:!0,abortController:void 0}),!0}var aaa={name:"ScriptTask",type:"local_script",async kill(r,s,o,t){let e=s.get(r);if(e?.type!=="local_script"||e.status!=="running")return;e.abortController?.abort(t)}};
export{H7i,sjo,ijo,aaa};
