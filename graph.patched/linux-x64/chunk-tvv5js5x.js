// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{b}from"./chunk-t5df5mky.js";import{ee}from"./chunk-4cycy900.js";import{MDe}from"./chunk-axygzfx8.js";function n(t){return{arm(){ee().templateLanes[t]=!0},take(){let o=ee().templateLanes,r=o[t];return o[t]=!1,r},giveBack(){ee().templateLanes[t]=!0}}}var e=n("prototypeArmed"),a=n("controlPlaneArmed");function p4n(){e.arm(),b("prototype_started",{})}function f4n(){return e.take()}function l6e(){e.giveBack()}function l(t,o){ee().templateLanes.boundSlugs.set(t,o)}function m4n(t){return ee().templateLanes.boundSlugs.get(t)}function g4n(t,o){l(t,"prototype"),b("prototype_publish",{artifact_slug:MDe(t),is_first_publish:o})}function c6e(){a.giveBack()}
export{p4n,f4n,l6e,m4n,g4n,c6e};
