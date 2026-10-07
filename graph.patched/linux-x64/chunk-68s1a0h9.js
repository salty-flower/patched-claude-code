// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{K_}from"./chunk-4h0f2fyb.js";import{WRn}from"./chunk-f9k69knq.js";import{LGe}from"./chunk-6bns7938.js";import{TR}from"./chunk-4xsawq64.js";import{im}from"./chunk-tmsck56k.js";import{um}from"./chunk-wby8n7tq.js";import{Se}from"./chunk-grvgfqgm.js";var a=Se(TR());var c=um(),d=K_(),l=im(),u=TR(),S=LGe();var g=(e)=>`AWS_BEARER_TOKEN_${e.replace(/[\s-]/g,"_").toUpperCase()}`;var r=g;var s=Se(im()),URn=({logger:e,signingName:n}={})=>async()=>{if(e?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"),!n)throw new s.TokenProviderError("Please pass 'signingName' to compute environment variable key",{logger:e});let t=r(n);if(!(t in process.env))throw new s.TokenProviderError(`Token not present in '${t}' environment variable`,{logger:e});let o={token:process.env[t]};return a.setTokenFeature(o,"BEARER_SERVICE_ENV_VARS","3"),o};var i=Se(im());var BRn=(e={})=>i.memoize(i.chain(WRn(e),async()=>{throw new i.TokenProviderError("Could not load token from any providers",!1)}),(n)=>n.expiration!==void 0&&n.expiration.getTime()-Date.now()<300000,(n)=>n.expiration!==void 0);
export{URn,BRn};
