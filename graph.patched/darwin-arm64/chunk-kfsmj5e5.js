// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{pi}from"./chunk-p7cgc2rk.js";import{g}from"./chunk-n1esck2w.js";import{ee}from"./chunk-h07kk1k6.js";import{_is}from"./chunk-3224d6te.js";import{aAt}from"./chunk-pf9xewrx.js";var i="<!-- dataviz-callout -->",n=()=>"",o;function N7o(t){n=t}async function aVt(){let{SKILL_MD:t}=await import("./chunk-jecsyy94.js");return o=_is(pi(t).content.trimStart().replace(i,()=>n())),o}function F7o(){return o}function p(t){return{arm(){ee().templateLanes[t]=!0},take(){let e=ee().templateLanes,a=e[t];return e[t]=!1,a},giveBack(){ee().templateLanes[t]=!0}}}var r=p("prototypeArmed");function $7o(){r.arm(),g("prototype_started",{})}function U7o(){return r.take()}function lVt(){r.giveBack()}function s(t,e){ee().templateLanes.boundSlugs.set(t,e)}function B7o(t){return ee().templateLanes.boundSlugs.get(t)}function j7o(t,e){s(t,"prototype"),g("prototype_publish",{artifact_slug:aAt(t),is_first_publish:e})}
export{N7o,aVt,F7o,$7o,U7o,lVt,B7o,j7o};
