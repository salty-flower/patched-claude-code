// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{S}from"./chunk-qc0xda2j.js";import{ee}from"./chunk-9vax8jy6.js";import{ADe}from"./chunk-8v3jkxqh.js";function n(t){return{arm(){ee().templateLanes[t]=!0},take(){let o=ee().templateLanes,r=o[t];return o[t]=!1,r},giveBack(){ee().templateLanes[t]=!0}}}var e=n("prototypeArmed"),a=n("controlPlaneArmed");function KGn(){e.arm(),S("prototype_started",{})}function YGn(){return e.take()}function K4e(){e.giveBack()}function l(t,o){ee().templateLanes.boundSlugs.set(t,o)}function XGn(t){return ee().templateLanes.boundSlugs.get(t)}function JGn(t,o){l(t,"prototype"),S("prototype_publish",{artifact_slug:ADe(t),is_first_publish:o})}function Y4e(){a.giveBack()}
export{KGn,YGn,K4e,XGn,JGn,Y4e};
