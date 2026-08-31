// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{ia}from"./chunk-a1zrnecx.js";import{eEt}from"./chunk-02taz3zn.js";import{dpe}from"./chunk-rx5c8qdz.js";import{Ll}from"./chunk-3ev166yw.js";import{Jh}from"./chunk-7fjxb7mj.js";import{Gc}from"./chunk-04t0qmth.js";import{j}from"./chunk-5nnrmmhw.js";var a=j(Jh(),1);var c=Ll(),d=ia(),l=Gc(),u=Jh(),S=dpe();var g=(e)=>`AWS_BEARER_TOKEN_${e.replace(/[\s-]/g,"_").toUpperCase()}`;var r=g;var s=j(Gc(),1),Ywt=({logger:e,signingName:n}={})=>async()=>{if(e?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"),!n)throw new s.TokenProviderError("Please pass 'signingName' to compute environment variable key",{logger:e});let t=r(n);if(!(t in process.env))throw new s.TokenProviderError(`Token not present in '${t}' environment variable`,{logger:e});let o={token:process.env[t]};return a.setTokenFeature(o,"BEARER_SERVICE_ENV_VARS","3"),o};var i=j(Gc(),1);var Xwt=(e={})=>i.memoize(i.chain(eEt(e),async()=>{throw new i.TokenProviderError("Could not load token from any providers",!1)}),(n)=>n.expiration!==void 0&&n.expiration.getTime()-Date.now()<300000,(n)=>n.expiration!==void 0);
export{Ywt,Xwt};
