// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{g}from"./chunk-2hb5361r.js";import{ee}from"./chunk-dcbjzzq8.js";import{si}from"./chunk-zm79vshj.js";import{M4o}from"./chunk-8sdnf51c.js";import{cSt}from"./chunk-5s50d32n.js";function i(t){return{arm(){ee().templateLanes[t]=!0},take(){let e=ee().templateLanes,a=e[t];return e[t]=!1,a},giveBack(){ee().templateLanes[t]=!0}}}var o=i("prototypeArmed");function b2o(){o.arm(),g("prototype_started",{})}function w2o(){return o.take()}function M1t(){o.giveBack()}function p(t,e){ee().templateLanes.boundSlugs.set(t,e)}function E2o(t){return ee().templateLanes.boundSlugs.get(t)}function v2o(t,e){p(t,"prototype"),g("prototype_publish",{artifact_slug:cSt(t),is_first_publish:e})}var s="<!-- dataviz-callout -->",n=()=>"",r;function _2o(t){n=t}async function H1t(){let{SKILL_MD:t}=await import("./chunk-fdxb3vb4.js");return r=M4o(si(t).content.trimStart().replace(s,()=>n())),r}function S2o(){return r}
export{_2o,H1t,S2o,b2o,w2o,M1t,E2o,v2o};
