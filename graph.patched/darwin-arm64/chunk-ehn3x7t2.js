// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{xa}from"./chunk-w8x996zn.js";import{g}from"./chunk-wn8xtaqg.js";import{Z}from"./chunk-bxg8d6dd.js";import{TAs}from"./chunk-fazjka2f.js";import{KMt}from"./chunk-66d5kf74.js";var i="<!-- dataviz-callout -->",n=()=>"",o;function CSs(t){n=t}async function v7t(){let{SKILL_MD:t}=await import("./chunk-16vejqnd.js");return o=TAs(xa(t).content.trimStart().replace(i,()=>n())),o}function TSs(){return o}function p(t){return{arm(){Z().templateLanes[t]=!0},take(){let e=Z().templateLanes,a=e[t];return e[t]=!1,a},giveBack(){Z().templateLanes[t]=!0}}}var r=p("prototypeArmed");function ASs(){r.arm(),g("prototype_started",{})}function RSs(){return r.take()}function ZIt(){r.giveBack()}function s(t,e){Z().templateLanes.boundSlugs.set(t,e)}function xSs(t){return Z().templateLanes.boundSlugs.get(t)}function PSs(t,e){s(t,"prototype"),g("prototype_publish",{artifact_slug:KMt(t),is_first_publish:e})}
export{CSs,v7t,TSs,ASs,RSs,ZIt,xSs,PSs};
