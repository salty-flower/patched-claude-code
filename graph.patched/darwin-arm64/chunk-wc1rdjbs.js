// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{un,b,kAt,Rm}from"./chunk-e44qnbvj.js";import{S0,fit,v9n}from"./chunk-mnxqh9yf.js";var TGe="tengu_violin_willow";function Acr(){try{let{value:e,source:o}=un(TGe,!1);return Rm(o)?e===!0:void 0}catch{return}}function Ept(){try{return b(TGe,!1)}catch{return!1}}function vpt(){return v9n()&&Acr()===!0}function nJe({cloudClient:e}){if(fit())return"tengu_violin_wood";return e&&Acr()===!1?TGe:void 0}async function bes({cloudClient:e}){try{return await S0()&&(!e||await kAt(TGe))}catch{return!1}}
export{TGe,Acr,Ept,vpt,nJe,bes};
