// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{rl,gl}from"./chunk-ns0ekkj0.js";import{xt}from"./chunk-k7k51kt3.js";function S5e(e){return(e.voice?.enabled??e.voiceEnabled)===!0}function cWn(e){return e.voice?.enabled!==void 0||e.voiceEnabled!==void 0}function b1t(){try{if(!rl())return!1;return gl()}catch{return!1}}function _1t(){return xt("allow_voice_mode")}function lbe(){return b1t()&&_1t()}
export{S5e,cWn,b1t,_1t,lbe};
