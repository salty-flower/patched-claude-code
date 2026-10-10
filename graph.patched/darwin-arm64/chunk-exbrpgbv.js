// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{$n,k,U4e,L3}from"./chunk-bk5ct2gw.js";import{pR,hJt,yJt}from"./chunk-y284gcbm.js";var TEe="tengu_violin_willow";function Lun(){try{let{value:e,source:o}=$n(TEe,!1);return L3(o)?e===!0:void 0}catch{return}}function Lje(){try{return k(TEe,!1)}catch{return!1}}function Nje(){return yJt()&&Lun()===!0}function GIe({cloudClient:e}){if(hJt())return"tengu_violin_wood";return e&&Lun()===!1?TEe:void 0}async function JLr({cloudClient:e}){try{return await pR()&&(!e||await U4e(TEe))}catch{return!1}}
export{TEe,Lun,Lje,Nje,GIe,JLr};
