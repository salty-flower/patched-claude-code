// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{y}from"./chunk-hz0a4zf6.js";import{Q}from"./chunk-jj0rppvm.js";import{Js}from"./chunk-5gbsra7a.js";import{A2o}from"./chunk-8y428na3.js";import{dgt}from"./chunk-qwb4bnf4.js";function i(t){return{arm(){Q().templateLanes[t]=!0},take(){let e=Q().templateLanes,a=e[t];return e[t]=!1,a},giveBack(){Q().templateLanes[t]=!0}}}var o=i("prototypeArmed");function pDo(){o.arm(),y("prototype_started",{})}function fDo(){return o.take()}function eNt(){o.giveBack()}function p(t,e){Q().templateLanes.boundSlugs.set(t,e)}function mDo(t){return Q().templateLanes.boundSlugs.get(t)}function gDo(t,e){p(t,"prototype"),y("prototype_publish",{artifact_slug:dgt(t),is_first_publish:e})}var s="<!-- dataviz-callout -->",n=()=>"",r;function dDo(t){n=t}async function ZLt(){let{SKILL_MD:t}=await import("./chunk-2zcbfcsp.js");return r=A2o(Js(t).content.trimStart().replace(s,()=>n())),r}function uDo(){return r}
export{dDo,ZLt,uDo,pDo,fDo,eNt,mDo,gDo};
