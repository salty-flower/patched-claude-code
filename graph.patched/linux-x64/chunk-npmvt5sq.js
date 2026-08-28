// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{DI}from"./chunk-qbwsw6nn.js";import{Z}from"./chunk-by569dsf.js";var o=["https://www.googleapis.com/auth/cloud-platform"];async function pRe(e,t){if(e.kind==="skip")return{getClient:()=>({getRequestHeaders:async()=>new Headers})};let{GoogleAuth:n}=await import("./chunk-5bkb7qra.js").then((m)=>Z(m.default,1)),r=e.kind==="keyFile"?e.path:void 0;return new n({scopes:o,...r&&{keyFilename:r},...t&&{projectId:t},clientOptions:{transporterOptions:{fetchImplementation:Rcr}}})}async function Rcr(e,t){let n=t?.agent?.options;if(!n?.cert&&!n?.key)return fetch(e,t);let r={cert:n.cert,key:n.key,...n.ca&&{ca:n.ca}};return fetch(e,{...t,tls:r})}function A3(e){let t=e._authClientPromise;if(t&&typeof t.catch==="function")t.catch(()=>{});return e}function k3(e=!1){if(e)return{Authorization:e.wireAuthorization??null};return{Authorization:null,...!DI()&&{"X-Api-Key":null}}}
export{pRe,Rcr,A3,k3};
