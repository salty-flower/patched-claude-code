// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Os,x,Ly,y1t,Qmn}from"./chunk-er6f56rj.js";async function o(){try{return await Ly("tengu_violin_strad")}catch{return!1}}function t(){try{return x("tengu_violin_strad",!1)}catch{return!1}}async function nA(){try{return await Ly("tengu_violin_wood")}catch{return!1}}function hm(){try{return x("tengu_violin_wood",!1)}catch{return!1}}var a="tengu_violin_maple";async function y9e(){try{return await nA()||await y1t(a)}catch{return!1}}function Kf(){try{return hm()||x(a,!1)}catch{return!1}}async function wD(){return await nA()&&await o()}function h5(){return hm()&&t()}function yne(e){return"unsupported"}function E7(e){return yne(e)===null}function f$e(){try{let{value:e,source:n}=Os("tengu_violin_wood",!1);return e===!1&&Qmn(n)}catch{return!1}}function T7o(e){try{return Qmn(Os(e,!1).source)}catch{return!1}}async function gKo(){try{return await Ly("tengu_violin_amati")}catch{return!1}}function w3n(){try{return x("tengu_violin_amati",!1)}catch{return!1}}function bFt(){return hm()&&w3n()}async function ept(){let[e,n]=await Promise.all([nA(),gKo()]);return e&&n}
export{nA,hm,y9e,Kf,wD,h5,yne,E7,f$e,T7o,gKo,w3n,bFt,ept};
