// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Yw}from"./chunk-kpqr86hf.js";import{_r}from"./chunk-jrcdjayr.js";import{As}from"./chunk-pv6z4j91.js";import{Yo}from"./chunk-gn7avpe5.js";import{uHe}from"./chunk-qwytg6a7.js";import{ZS,oX,Gk,Oo}from"./chunk-na9nw575.js";import{vYo}from"./chunk-jwwn96h6.js";import{KP}from"./chunk-4adppd9q.js";function hzt(){return oX(Yo)}async function bKr(){await Promise.all([KP(),uHe()])}function wKr(e,r){return vYo(r.scope)&&!Oo(e)}function iLe(e,r){return wKr(e,r)&&!t(r)}function t(e){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-nnt9x56c.js").mcpClientModule().isFirstPartyDesignServerConfig(e)}function EKr(e){switch(e.type){case void 0:case"stdio":case"http":case"sse":case"ws":return!0;case"sdk":case"sse-ide":case"ws-ide":case"claudeai-proxy":return!1}}function i(e){return Object.assign(ZS(),As(e,EKr))}async function vKr({storageV5:e}={}){if(Yw()||_r())return{configs:ZS(),deniedBySettings:!1};await bKr();let{servers:r}=await Gk({},{purpose:"deviceBridge",storageV5:e});return{configs:i(r),deniedBySettings:hzt()}}async function wbn(e={}){let{configs:r,deniedBySettings:o}=await vKr(e);return o?ZS():r}
export{hzt,bKr,wKr,iLe,EKr,vKr,wbn};
