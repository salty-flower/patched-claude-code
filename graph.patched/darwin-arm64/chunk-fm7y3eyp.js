// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Sn,k,tQe,W9}from"./chunk-bvn0epzr.js";import{Kx,Qdn,Zdn}from"./chunk-70q8tq1z.js";var QAe="tengu_violin_willow";function uCn(){try{let{value:e,source:o}=Sn(QAe,!1);return W9(o)?e===!0:void 0}catch{return}}function TKe(){try{return k(QAe,!1)}catch{return!1}}function AKe(){return Zdn()&&uCn()===!0}function rNe({cloudClient:e}){if(Qdn())return"tengu_violin_wood";return e&&uCn()===!1?QAe:void 0}async function m8r({cloudClient:e}){try{return await Kx()&&(!e||await tQe(QAe))}catch{return!1}}
export{QAe,uCn,TKe,AKe,rNe,m8r};
