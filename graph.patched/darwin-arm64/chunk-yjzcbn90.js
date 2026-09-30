// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{y}from"./chunk-sc069zjc.js";import{X}from"./chunk-gvckezfq.js";import{vs}from"./chunk-6hf0xkkq.js";import{udo}from"./chunk-jpwjznwm.js";import{ctt}from"./chunk-ft7w961v.js";function i(t){return{arm(){X().templateLanes[t]=!0},take(){let e=X().templateLanes,a=e[t];return e[t]=!1,a},giveBack(){X().templateLanes[t]=!0}}}var o=i("prototypeArmed");function Lto(){o.arm(),y("prototype_started",{})}function Nto(){return o.take()}function Swt(){o.giveBack()}function p(t,e){X().templateLanes.boundSlugs.set(t,e)}function Fto(t){return X().templateLanes.boundSlugs.get(t)}function $to(t,e){p(t,"prototype"),y("prototype_publish",{artifact_slug:ctt(t),is_first_publish:e})}var s="<!-- dataviz-callout -->",n=()=>"",r;function Uto(t){n=t}async function iZe(){let{SKILL_MD:t}=await import("./chunk-r3w9bar9.js");return r=udo(vs(t).content.trimStart().replace(s,()=>n())),r}function Bto(){return r}
export{Lto,Nto,Swt,Fto,$to,Uto,iZe,Bto};
