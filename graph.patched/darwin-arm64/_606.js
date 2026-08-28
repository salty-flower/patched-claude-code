// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{nEc as o,uEc as a}from"./_700.js";import{Axd as i,Exd as s,Hxd as u}from"./_839.js";async function h(e,t){if(e.kind==="skip")return{getClient:()=>({getRequestHeaders:async()=>new Headers})};let{GoogleAuth:n}=await import("./chunk-8z072kb0.js").then((m)=>i(m.default,1)),r=e.kind==="keyFile"?e.path:void 0;return new n({scopes:c,...r&&{keyFilename:r},...t&&{projectId:t},clientOptions:{transporterOptions:{fetchImplementation:l}}})}async function l(e,t){let n=t?.agent?.options;if(!n?.cert&&!n?.key)return fetch(e,t);let r={cert:n.cert,key:n.key,...n.ca&&{ca:n.ca}};return fetch(e,{...t,tls:r})}function d(e){let t=e._authClientPromise;if(t&&typeof t.catch==="function")t.catch(()=>{});return e}function g(e=!1){if(e)return{Authorization:e.wireAuthorization??null};return{Authorization:null,...!o()&&{"X-Api-Key":null}}}var c;var f=s(()=>{a();c=["https://www.googleapis.com/auth/cloud-platform"]});
export{h as NWb,l as OWb,d as PWb,g as QWb,f as RWb};
