// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{y}from"./chunk-ymkzysdh.js";import{ee}from"./chunk-ddbj4628.js";import{Zo}from"./chunk-2rfm190g.js";import{u4r}from"./chunk-btnnfhxn.js";import{PYe}from"./chunk-vjmdxt9x.js";function i(t){return{arm(){ee().templateLanes[t]=!0},take(){let e=ee().templateLanes,a=e[t];return e[t]=!1,a},giveBack(){ee().templateLanes[t]=!0}}}var o=i("prototypeArmed");function hjr(){o.arm(),y("prototype_started",{})}function yjr(){return o.take()}function jpt(){o.giveBack()}function p(t,e){ee().templateLanes.boundSlugs.set(t,e)}function _jr(t){return ee().templateLanes.boundSlugs.get(t)}function Sjr(t,e){p(t,"prototype"),y("prototype_publish",{artifact_slug:PYe(t),is_first_publish:e})}var s="<!-- dataviz-callout -->",n=()=>"",r;function bjr(t){n=t}async function v9e(){let{SKILL_MD:t}=await import("./chunk-4wvz2q4m.js");return r=u4r(Zo(t).content.trimStart().replace(s,()=>n())),r}function wjr(){return r}
export{hjr,yjr,jpt,_jr,Sjr,bjr,v9e,wjr};
