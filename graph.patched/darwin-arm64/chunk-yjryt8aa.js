// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{PE}from"./chunk-ersar6wn.js";import{Sr}from"./chunk-21mz1tvc.js";import{Ko}from"./chunk-z6efcye4.js";import{Vo}from"./chunk-hdf6qbgr.js";import{FNe}from"./chunk-32v5ghb4.js";import{xb,nJ,LC,Io}from"./chunk-31gxg38t.js";import{Kls}from"./chunk-ymjmmx6h.js";import{YR}from"./chunk-n5pe8xrn.js";function M5t(){return nJ(Vo)}async function _Zr(){await Promise.all([YR(),FNe()])}function SZr(e,r){return Kls(r.scope)&&!Io(e)}function B$e(e,r){return SZr(e,r)&&!t(r)}function t(e){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-zkvegk0m.js").mcpClientModule().isFirstPartyDesignServerConfig(e)}function bZr(e){switch(e.type){case void 0:case"stdio":case"http":case"sse":case"ws":return!0;case"sdk":case"sse-ide":case"ws-ide":case"claudeai-proxy":return!1}}function i(e){return Object.assign(xb(),Ko(e,bZr))}async function wZr({storageV5:e}={}){if(PE()||Sr())return{configs:xb(),deniedBySettings:!1};await _Zr();let{servers:r}=await LC({},{purpose:"deviceBridge",storageV5:e});return{configs:i(r),deniedBySettings:M5t()}}async function QRn(e={}){let{configs:r,deniedBySettings:o}=await wZr(e);return o?xb():r}
export{M5t,_Zr,SZr,B$e,bZr,wZr,QRn};
