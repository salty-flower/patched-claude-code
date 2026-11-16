// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ee}from"./chunk-wswyff5p.js";import{vAt,S}from"./chunk-a5a37ds7.js";import{cZ}from"./chunk-nz8r79rx.js";import{Rd}from"./chunk-rj6gcj81.js";import{QZt,DUi}from"./chunk-r2v0jf2k.js";import{randomUUID as c}from"crypto";var f="<!-- dataviz-callout -->",u="tengu_tingly_petal",g=16,e=()=>"",o;function DMi(t){e=t}async function eOn(t,i=c()){if(t!==void 0&&vAt(t)&&S(u,!1)===!0){let{CONTRACT_MD:s,dealDesignGuide:d}=await import("./chunk-v5y1sr3v.js"),l=cZ()?`Thumbnail (optional): ${QZt}

`:"",r=`${s}
${l}${d(i)}`,{drawnDesignBodies:n}=ee();n.set(i,r);for(let m of[...n.keys()].slice(0,-g))n.delete(m);return r}let{SKILL_MD:a}=await import("./chunk-3bame5f5.js");return o=DUi(Rd(a).content.trimStart().replace(f,()=>e())),o}function LMi(t){return ee().drawnDesignBodies.get(t??"")??o}
export{DMi,eOn,LMi};
