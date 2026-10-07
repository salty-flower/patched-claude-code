// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{y}from"./chunk-tzahwj8w.js";import{J}from"./chunk-ad49p3yb.js";import{Ws}from"./chunk-k0nmkyef.js";import{BDo}from"./chunk-mvt1dttz.js";import{Hut}from"./chunk-m4crwxww.js";function i(t){return{arm(){J().templateLanes[t]=!0},take(){let e=J().templateLanes,a=e[t];return e[t]=!1,a},giveBack(){J().templateLanes[t]=!0}}}var o=i("prototypeArmed");function KAo(){o.arm(),y("prototype_started",{})}function YAo(){return o.take()}function SMt(){o.giveBack()}function p(t,e){J().templateLanes.boundSlugs.set(t,e)}function XAo(t){return J().templateLanes.boundSlugs.get(t)}function JAo(t,e){p(t,"prototype"),y("prototype_publish",{artifact_slug:Hut(t),is_first_publish:e})}var s="<!-- dataviz-callout -->",n=()=>"",r;function QAo(t){n=t}async function wMt(){let{SKILL_MD:t}=await import("./chunk-t04sm4af.js");return r=BDo(Ws(t).content.trimStart().replace(s,()=>n())),r}function ZAo(){return r}
export{KAo,YAo,SMt,XAo,JAo,QAo,wMt,ZAo};
