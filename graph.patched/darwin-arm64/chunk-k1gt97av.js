// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{PS}from"./chunk-cpzpr7hy.js";import{I$n}from"./chunk-nrzqn6ne.js";import{$3e}from"./chunk-bd84n5am.js";import{sP}from"./chunk-84g8y3pe.js";import{Mm}from"./chunk-gqbxc61m.js";import{jm}from"./chunk-h20sc871.js";import{we}from"./chunk-txt1tvjz.js";var a=we(sP());var c=jm(),d=PS(),l=Mm(),u=sP(),S=$3e();var g=(e)=>`AWS_BEARER_TOKEN_${e.replace(/[\s-]/g,"_").toUpperCase()}`;var r=g;var s=we(Mm()),x$n=({logger:e,signingName:n}={})=>async()=>{if(e?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"),!n)throw new s.TokenProviderError("Please pass 'signingName' to compute environment variable key",{logger:e});let t=r(n);if(!(t in process.env))throw new s.TokenProviderError(`Token not present in '${t}' environment variable`,{logger:e});let o={token:process.env[t]};return a.setTokenFeature(o,"BEARER_SERVICE_ENV_VARS","3"),o};var i=we(Mm());var P$n=(e={})=>i.memoize(i.chain(I$n(e),async()=>{throw new i.TokenProviderError("Could not load token from any providers",!1)}),(n)=>n.expiration!==void 0&&n.expiration.getTime()-Date.now()<300000,(n)=>n.expiration!==void 0);
export{x$n,P$n};
