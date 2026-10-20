// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{qi}from"./chunk-gzxd3rp1.js";import{g}from"./chunk-yzndvntb.js";import{te}from"./chunk-0vmvv2wk.js";import{tfs}from"./chunk-pvxfqqkc.js";import{ZCt}from"./chunk-jezxwtd0.js";var i="<!-- dataviz-callout -->",n=()=>"",o;function dss(t){n=t}async function PYt(){let{SKILL_MD:t}=await import("./chunk-4bf8y66x.js");return o=tfs(qi(t).content.trimStart().replace(i,()=>n())),o}function css(){return o}function p(t){return{arm(){te().templateLanes[t]=!0},take(){let e=te().templateLanes,a=e[t];return e[t]=!1,a},giveBack(){te().templateLanes[t]=!0}}}var r=p("prototypeArmed");function uss(){r.arm(),g("prototype_started",{})}function pss(){return r.take()}function IYt(){r.giveBack()}function s(t,e){te().templateLanes.boundSlugs.set(t,e)}function fss(t){return te().templateLanes.boundSlugs.get(t)}function mss(t,e){s(t,"prototype"),g("prototype_publish",{artifact_slug:ZCt(t),is_first_publish:e})}
export{dss,PYt,css,uss,pss,IYt,fss,mss};
