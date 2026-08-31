// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Tl,Yl}from"./chunk-bsdtxcdc.js";import{Mt}from"./chunk-y97hdknc.js";function yze(e){return(e.voice?.enabled??e.voiceEnabled)===!0}function iKn(e){return e.voice?.enabled!==void 0||e.voiceEnabled!==void 0}function p2t(){try{if(!Tl())return!1;return Yl()}catch{return!1}}function f2t(){return Mt("allow_voice_mode")}function swe(){return p2t()&&f2t()}
export{yze,iKn,p2t,f2t,swe};
