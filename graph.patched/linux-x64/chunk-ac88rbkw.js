// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{kn,k,jXe,j5}from"./chunk-k16gymf7.js";import{hx,_sn,bsn}from"./chunk-aaax33vk.js";var sAe="tengu_violin_willow";function $bn(){try{let{value:e,source:o}=kn(sAe,!1);return j5(o)?e===!0:void 0}catch{return}}function V2e(){try{return k(sAe,!1)}catch{return!1}}function K2e(){return bsn()&&$bn()===!0}function zDe({cloudClient:e}){if(_sn())return"tengu_violin_wood";return e&&$bn()===!1?sAe:void 0}async function tVr({cloudClient:e}){try{return await hx()&&(!e||await jXe(sAe))}catch{return!1}}
export{sAe,$bn,V2e,K2e,zDe,tVr};
