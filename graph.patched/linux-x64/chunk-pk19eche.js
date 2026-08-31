// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{wl,Xl}from"./chunk-1e5y3pjf.js";import{Mt}from"./chunk-k7gygany.js";function y9e(e){return(e.voice?.enabled??e.voiceEnabled)===!0}function g3n(e){return e.voice?.enabled!==void 0||e.voiceEnabled!==void 0}function pjt(){try{if(!wl())return!1;return Xl()}catch{return!1}}function mjt(){return Mt("allow_voice_mode")}function nHe(){return pjt()&&mjt()}
export{y9e,g3n,pjt,mjt,nHe};
