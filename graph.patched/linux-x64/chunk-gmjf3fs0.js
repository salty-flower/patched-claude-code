// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{nP}from"./chunk-dzd4rkt0.js";import{j}from"./chunk-5nnrmmhw.js";var o=["https://www.googleapis.com/auth/cloud-platform"];async function Q0e(e,t){if(e.kind==="skip")return{getClient:()=>({getRequestHeaders:async()=>new Headers})};let{GoogleAuth:n}=await import("./chunk-a95rdd32.js").then((m)=>j(m.default,1)),r=e.kind==="keyFile"?e.path:void 0;return new n({scopes:o,...r&&{keyFilename:r},...t&&{projectId:t},clientOptions:{transporterOptions:{fetchImplementation:byr}}})}async function byr(e,t){let n=t?.agent?.options;if(!n?.cert&&!n?.key)return fetch(e,t);let r={cert:n.cert,key:n.key,...n.ca&&{ca:n.ca}};return fetch(e,{...t,tls:r})}function E9(e){let t=e._authClientPromise;if(t&&typeof t.catch==="function")t.catch(()=>{});return e}function A9(e=!1){if(e)return{Authorization:e.wireAuthorization??null};return{Authorization:null,...!nP()&&{"X-Api-Key":null}}}
export{Q0e,byr,E9,A9};
