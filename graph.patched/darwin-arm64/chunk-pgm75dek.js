// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Qb}from"./chunk-d9rgxb65.js";import{V5n}from"./chunk-gc5rzp62.js";import{oJe}from"./chunk-5mn5jzjq.js";import{VI}from"./chunk-tr7weg2r.js";import{Cg}from"./chunk-wqzedt2p.js";import{Og}from"./chunk-2j8n4dhr.js";import{Ee}from"./chunk-8xa87pyw.js";var a=Ee(VI());var c=Og(),d=Qb(),l=Cg(),u=VI(),S=oJe();var g=(e)=>`AWS_BEARER_TOKEN_${e.replace(/[\s-]/g,"_").toUpperCase()}`;var r=g;var s=Ee(Cg()),W5n=({logger:e,signingName:n}={})=>async()=>{if(e?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"),!n)throw new s.TokenProviderError("Please pass 'signingName' to compute environment variable key",{logger:e});let t=r(n);if(!(t in process.env))throw new s.TokenProviderError(`Token not present in '${t}' environment variable`,{logger:e});let o={token:process.env[t]};return a.setTokenFeature(o,"BEARER_SERVICE_ENV_VARS","3"),o};var i=Ee(Cg());var G5n=(e={})=>i.memoize(i.chain(V5n(e),async()=>{throw new i.TokenProviderError("Could not load token from any providers",!1)}),(n)=>n.expiration!==void 0&&n.expiration.getTime()-Date.now()<300000,(n)=>n.expiration!==void 0);
export{W5n,G5n};
