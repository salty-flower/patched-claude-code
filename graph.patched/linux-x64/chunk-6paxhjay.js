// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{qw}from"./chunk-dxktn51d.js";import{Sr}from"./chunk-jbgr14ef.js";import{Cs}from"./chunk-dcsn0jct.js";import{Yo}from"./chunk-65jn763j.js";import{oDe}from"./chunk-merbp8kx.js";import{Qb,Y9,jk,Oo}from"./chunk-rncrmfyt.js";import{K9o}from"./chunk-4p531q9p.js";import{WP}from"./chunk-tzr9xmb3.js";function $2t(){return Y9(Yo)}async function Xqr(){await Promise.all([WP(),oDe()])}function Jqr(e,r){return K9o(r.scope)&&!Oo(e)}function r0e(e,r){return Jqr(e,r)&&!t(r)}function t(e){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-p7jhef0s.js").mcpClientModule().isFirstPartyDesignServerConfig(e)}function Qqr(e){switch(e.type){case void 0:case"stdio":case"http":case"sse":case"ws":return!0;case"sdk":case"sse-ide":case"ws-ide":case"claudeai-proxy":return!1}}function i(e){return Object.assign(Qb(),Cs(e,Qqr))}async function Zqr({storageV5:e}={}){if(qw()||Sr())return{configs:Qb(),deniedBySettings:!1};await Xqr();let{servers:r}=await jk({},{purpose:"deviceBridge",storageV5:e});return{configs:i(r),deniedBySettings:$2t()}}async function kwn(e={}){let{configs:r,deniedBySettings:o}=await Zqr(e);return o?Qb():r}
export{$2t,Xqr,Jqr,r0e,Qqr,Zqr,kwn};
