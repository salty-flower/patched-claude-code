// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{S}from"./chunk-a25t2bvk.js";import{ee}from"./chunk-a1d797br.js";import{WLe}from"./chunk-yfwqxask.js";function n(t){return{arm(){ee().templateLanes[t]=!0},take(){let o=ee().templateLanes,r=o[t];return o[t]=!1,r},giveBack(){ee().templateLanes[t]=!0}}}var e=n("prototypeArmed"),a=n("controlPlaneArmed");function W4n(){e.arm(),S("prototype_started",{})}function z4n(){return e.take()}function w9e(){e.giveBack()}function l(t,o){ee().templateLanes.boundSlugs.set(t,o)}function G4n(t){return ee().templateLanes.boundSlugs.get(t)}function V4n(t,o){l(t,"prototype"),S("prototype_publish",{artifact_slug:WLe(t),is_first_publish:o})}function E9e(){a.giveBack()}
export{W4n,z4n,w9e,G4n,V4n,E9e};
