// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{_}from"./chunk-4akrhkry.js";import{ee}from"./chunk-7b9261ss.js";import{ns}from"./chunk-vfmbed55.js";import{Epr}from"./chunk-j9sa0ycp.js";import{P2e}from"./chunk-t26emt81.js";function i(t){return{arm(){ee().templateLanes[t]=!0},take(){let e=ee().templateLanes,a=e[t];return e[t]=!1,a},giveBack(){ee().templateLanes[t]=!0}}}var o=i("prototypeArmed");function Ddr(){o.arm(),_("prototype_started",{})}function Ldr(){return o.take()}function IZe(){o.giveBack()}function p(t,e){ee().templateLanes.boundSlugs.set(t,e)}function Mdr(t){return ee().templateLanes.boundSlugs.get(t)}function Ndr(t,e){p(t,"prototype"),_("prototype_publish",{artifact_slug:P2e(t),is_first_publish:e})}var s="<!-- dataviz-callout -->",n=()=>"",r;function Fdr(t){n=t}async function C2e(){let{SKILL_MD:t}=await import("./chunk-bd2ngqaz.js");return r=Epr(ns(t).content.trimStart().replace(s,()=>n())),r}function $dr(){return r}
export{Ddr,Ldr,IZe,Mdr,Ndr,Fdr,C2e,$dr};
