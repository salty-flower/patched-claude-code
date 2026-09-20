// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{_}from"./chunk-61g2sn1g.js";import{ee}from"./chunk-c5s0b8jh.js";import{ns}from"./chunk-q340fxjb.js";import{Udr}from"./chunk-dssmsbnr.js";import{_je}from"./chunk-nffpr3sm.js";function i(t){return{arm(){ee().templateLanes[t]=!0},take(){let e=ee().templateLanes,a=e[t];return e[t]=!1,a},giveBack(){ee().templateLanes[t]=!0}}}var o=i("prototypeArmed");function Qur(){o.arm(),_("prototype_started",{})}function Zur(){return o.take()}function bZe(){o.giveBack()}function p(t,e){ee().templateLanes.boundSlugs.set(t,e)}function edr(t){return ee().templateLanes.boundSlugs.get(t)}function tdr(t,e){p(t,"prototype"),_("prototype_publish",{artifact_slug:_je(t),is_first_publish:e})}var s="<!-- dataviz-callout -->",n=()=>"",r;function ndr(t){n=t}async function pje(){let{SKILL_MD:t}=await import("./chunk-t183f1fh.js");return r=Udr(ns(t).content.trimStart().replace(s,()=>n())),r}function rdr(){return r}
export{Qur,Zur,bZe,edr,tdr,ndr,pje,rdr};
