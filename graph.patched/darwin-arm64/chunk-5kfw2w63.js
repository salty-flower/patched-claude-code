// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{gr,k,x6e,bte}from"./chunk-s46qgfx7.js";import{UA,VKt,qKt}from"./chunk-1jbgapky.js";var dlt="tengu_violin_willow";function gUn(){try{let{value:e,source:o}=gr(dlt,!1);return bte(o)?e===!0:void 0}catch{return}}function $tn(){try{return k(dlt,!1)}catch{return!1}}function Utn(){return qKt()&&gUn()===!0}function gOt({cloudClient:e}){if(VKt())return"tengu_violin_wood";return e&&gUn()===!1?dlt:void 0}async function vEo({cloudClient:e}){try{return await UA()&&(!e||await x6e(dlt))}catch{return!1}}
export{dlt,gUn,$tn,Utn,gOt,vEo};
