// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{pi}from"./chunk-0py9k5tb.js";import{g}from"./chunk-rhe3yjtx.js";import{ee}from"./chunk-6hv6bqxx.js";import{vss}from"./chunk-0xyme4d9.js";import{JTt}from"./chunk-nkmhzfeq.js";var i="<!-- dataviz-callout -->",n=()=>"",o;function aJo(t){n=t}async function YVt(){let{SKILL_MD:t}=await import("./chunk-srf4fcv3.js");return o=vss(pi(t).content.trimStart().replace(i,()=>n())),o}function lJo(){return o}function p(t){return{arm(){ee().templateLanes[t]=!0},take(){let e=ee().templateLanes,a=e[t];return e[t]=!1,a},giveBack(){ee().templateLanes[t]=!0}}}var r=p("prototypeArmed");function dJo(){r.arm(),g("prototype_started",{})}function cJo(){return r.take()}function XVt(){r.giveBack()}function s(t,e){ee().templateLanes.boundSlugs.set(t,e)}function uJo(t){return ee().templateLanes.boundSlugs.get(t)}function pJo(t,e){s(t,"prototype"),g("prototype_publish",{artifact_slug:JTt(t),is_first_publish:e})}
export{aJo,YVt,lJo,dJo,cJo,XVt,uJo,pJo};
