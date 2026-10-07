// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{y}from"./chunk-e3gw32ew.js";import{Q}from"./chunk-v1xynczf.js";import{Ws}from"./chunk-kr0v878c.js";import{RDo}from"./chunk-8ta94556.js";import{zut}from"./chunk-pk74k3gh.js";function i(t){return{arm(){Q().templateLanes[t]=!0},take(){let e=Q().templateLanes,a=e[t];return e[t]=!1,a},giveBack(){Q().templateLanes[t]=!0}}}var o=i("prototypeArmed");function vTo(){o.arm(),y("prototype_started",{})}function CTo(){return o.take()}function O0t(){o.giveBack()}function p(t,e){Q().templateLanes.boundSlugs.set(t,e)}function kTo(t){return Q().templateLanes.boundSlugs.get(t)}function ATo(t,e){p(t,"prototype"),y("prototype_publish",{artifact_slug:zut(t),is_first_publish:e})}var s="<!-- dataviz-callout -->",n=()=>"",r;function TTo(t){n=t}async function H0t(){let{SKILL_MD:t}=await import("./chunk-428t0ecn.js");return r=RDo(Ws(t).content.trimStart().replace(s,()=>n())),r}function RTo(){return r}
export{vTo,CTo,O0t,kTo,ATo,TTo,H0t,RTo};
