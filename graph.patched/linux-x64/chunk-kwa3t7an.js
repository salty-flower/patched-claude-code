// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{y}from"./chunk-68vq239n.js";import{Q}from"./chunk-zq84ct3s.js";import{Js}from"./chunk-eqtqzzv6.js";import{$jo}from"./chunk-8cjjxcy5.js";import{Zmt}from"./chunk-rjna5317.js";function i(t){return{arm(){Q().templateLanes[t]=!0},take(){let e=Q().templateLanes,a=e[t];return e[t]=!1,a},giveBack(){Q().templateLanes[t]=!0}}}var o=i("prototypeArmed");function NDo(){o.arm(),y("prototype_started",{})}function $Do(){return o.take()}function jLt(){o.giveBack()}function p(t,e){Q().templateLanes.boundSlugs.set(t,e)}function FDo(t){return Q().templateLanes.boundSlugs.get(t)}function UDo(t,e){p(t,"prototype"),y("prototype_publish",{artifact_slug:Zmt(t),is_first_publish:e})}var s="<!-- dataviz-callout -->",n=()=>"",r;function DDo(t){n=t}async function BLt(){let{SKILL_MD:t}=await import("./chunk-x8hg0gsw.js");return r=$jo(Js(t).content.trimStart().replace(s,()=>n())),r}function LDo(){return r}
export{DDo,BLt,LDo,NDo,$Do,jLt,FDo,UDo};
