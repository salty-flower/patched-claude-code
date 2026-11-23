// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ee}from"./chunk-m9wmj1k9.js";import{ACt,b}from"./chunk-e44qnbvj.js";import{bZ}from"./chunk-8ywx9vjn.js";import{Ad}from"./chunk-cq3w4egf.js";import{ren,J$i}from"./chunk-tn9hwgyh.js";import{randomUUID as c}from"crypto";var f="<!-- dataviz-callout -->",u="tengu_tingly_petal",g=16,e=()=>"",o;function dMi(t){e=t}async function gIn(t,i=c()){if(t!==void 0&&ACt(t)&&b(u,!1)===!0){let{CONTRACT_MD:s,dealDesignGuide:d}=await import("./chunk-74ba8z7z.js"),l=bZ()?`Thumbnail (optional): ${ren}

`:"",r=`${s}
${l}${d(i)}`,{drawnDesignBodies:n}=ee();n.set(i,r);for(let m of[...n.keys()].slice(0,-g))n.delete(m);return r}let{SKILL_MD:a}=await import("./chunk-k9abv8dj.js");return o=J$i(Ad(a).content.trimStart().replace(f,()=>e())),o}function cMi(t){return ee().drawnDesignBodies.get(t??"")??o}
export{dMi,gIn,cMi};
