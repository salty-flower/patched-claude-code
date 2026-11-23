// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{un,S,yCt,Cm}from"./chunk-a5a37ds7.js";import{gM,tit,Q5n}from"./chunk-ce810mk8.js";var bze="tengu_violin_willow";function Qdr(){try{let{value:e,source:o}=un(bze,!1);return Cm(o)?e===!0:void 0}catch{return}}function ppt(){try{return S(bze,!1)}catch{return!1}}function mpt(){return Q5n()&&Qdr()===!0}function KXe({cloudClient:e}){if(tit())return"tengu_violin_wood";return e&&Qdr()===!1?bze:void 0}async function kZo({cloudClient:e}){try{return await gM()&&(!e||await yCt(bze))}catch{return!1}}
export{bze,Qdr,ppt,mpt,KXe,kZo};
