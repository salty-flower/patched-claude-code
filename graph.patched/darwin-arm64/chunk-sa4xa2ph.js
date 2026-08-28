// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{nl,hl}from"./chunk-ghnc2x4f.js";import{xt}from"./chunk-dd7crjgj.js";function w9e(e){return(e.voice?.enabled??e.voiceEnabled)===!0}function h5n(e){return e.voice?.enabled!==void 0||e.voiceEnabled!==void 0}function wNt(){try{if(!nl())return!1;return hl()}catch{return!1}}function TNt(){return xt("allow_voice_mode")}function f_e(){return wNt()&&TNt()}
export{w9e,h5n,wNt,TNt,f_e};
