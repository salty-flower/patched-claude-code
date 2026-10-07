// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Y_}from"./chunk-15x8wyv9.js";import{axn}from"./chunk-rq5bym46.js";import{WGe}from"./chunk-r7nxemw8.js";import{PR}from"./chunk-fjp59ejk.js";import{im}from"./chunk-mf4s2khr.js";import{fm}from"./chunk-6pw2mkqv.js";import{be}from"./chunk-rnxw3wwn.js";var a=be(PR());var c=fm(),d=Y_(),l=im(),u=PR(),S=WGe();var g=(e)=>`AWS_BEARER_TOKEN_${e.replace(/[\s-]/g,"_").toUpperCase()}`;var r=g;var s=be(im()),oxn=({logger:e,signingName:n}={})=>async()=>{if(e?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"),!n)throw new s.TokenProviderError("Please pass 'signingName' to compute environment variable key",{logger:e});let t=r(n);if(!(t in process.env))throw new s.TokenProviderError(`Token not present in '${t}' environment variable`,{logger:e});let o={token:process.env[t]};return a.setTokenFeature(o,"BEARER_SERVICE_ENV_VARS","3"),o};var i=be(im());var sxn=(e={})=>i.memoize(i.chain(axn(e),async()=>{throw new i.TokenProviderError("Could not load token from any providers",!1)}),(n)=>n.expiration!==void 0&&n.expiration.getTime()-Date.now()<300000,(n)=>n.expiration!==void 0);
export{oxn,sxn};
