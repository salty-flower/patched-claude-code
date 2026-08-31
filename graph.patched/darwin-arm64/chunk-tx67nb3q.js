// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{sP}from"./chunk-2qvmm0t6.js";import{j}from"./chunk-rqyyny1n.js";var o=["https://www.googleapis.com/auth/cloud-platform"];async function eOe(e,t){if(e.kind==="skip")return{getClient:()=>({getRequestHeaders:async()=>new Headers})};let{GoogleAuth:n}=await import("./chunk-pz8y8qh4.js").then((m)=>j(m.default,1)),r=e.kind==="keyFile"?e.path:void 0;return new n({scopes:o,...r&&{keyFilename:r},...t&&{projectId:t},clientOptions:{transporterOptions:{fetchImplementation:v_r}}})}async function v_r(e,t){let n=t?.agent?.options;if(!n?.cert&&!n?.key)return fetch(e,t);let r={cert:n.cert,key:n.key,...n.ca&&{ca:n.ca}};return fetch(e,{...t,tls:r})}function vz(e){let t=e._authClientPromise;if(t&&typeof t.catch==="function")t.catch(()=>{});return e}function Rz(e=!1){if(e)return{Authorization:e.wireAuthorization??null};return{Authorization:null,...!sP()&&{"X-Api-Key":null}}}
export{eOe,v_r,vz,Rz};
