// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{qi}from"./chunk-y573qe02.js";import{g}from"./chunk-53e7d9dh.js";import{te}from"./chunk-eb6svdsk.js";import{Ifs}from"./chunk-s3mxbt14.js";import{sRt}from"./chunk-9zfmqce4.js";var i="<!-- dataviz-callout -->",n=()=>"",o;function Nss(t){n=t}async function j3t(){let{SKILL_MD:t}=await import("./chunk-adh4hgw4.js");return o=Ifs(qi(t).content.trimStart().replace(i,()=>n())),o}function Fss(){return o}function p(t){return{arm(){te().templateLanes[t]=!0},take(){let e=te().templateLanes,a=e[t];return e[t]=!1,a},giveBack(){te().templateLanes[t]=!0}}}var r=p("prototypeArmed");function $ss(){r.arm(),g("prototype_started",{})}function Uss(){return r.take()}function W3t(){r.giveBack()}function s(t,e){te().templateLanes.boundSlugs.set(t,e)}function Bss(t){return te().templateLanes.boundSlugs.get(t)}function jss(t,e){s(t,"prototype"),g("prototype_publish",{artifact_slug:sRt(t),is_first_publish:e})}
export{Nss,j3t,Fss,$ss,Uss,W3t,Bss,jss};
