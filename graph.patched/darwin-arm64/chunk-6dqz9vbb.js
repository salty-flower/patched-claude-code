// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{la}from"./chunk-7r5fpyac.js";import{bkt}from"./chunk-yq8skdqe.js";import{jl}from"./chunk-6abf03hf.js";import{vhe}from"./chunk-fh4ry0ws.js";import{b_}from"./chunk-25hk3ney.js";import{uu}from"./chunk-egq5etbf.js";import{G}from"./chunk-agfzafth.js";var a=G(b_(),1);var c=jl(),d=la(),l=uu(),u=b_(),S=vhe();var g=(e)=>`AWS_BEARER_TOKEN_${e.replace(/[\s-]/g,"_").toUpperCase()}`;var r=g;var s=G(uu(),1),mkt=({logger:e,signingName:n}={})=>async()=>{if(e?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"),!n)throw new s.TokenProviderError("Please pass 'signingName' to compute environment variable key",{logger:e});let t=r(n);if(!(t in process.env))throw new s.TokenProviderError(`Token not present in '${t}' environment variable`,{logger:e});let o={token:process.env[t]};return a.setTokenFeature(o,"BEARER_SERVICE_ENV_VARS","3"),o};var i=G(uu(),1);var gkt=(e={})=>i.memoize(i.chain(bkt(e),async()=>{throw new i.TokenProviderError("Could not load token from any providers",!1)}),(n)=>n.expiration!==void 0&&n.expiration.getTime()-Date.now()<300000,(n)=>n.expiration!==void 0);
export{mkt,gkt};
