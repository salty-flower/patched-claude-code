// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Lg}from"./chunk-577jmkv2.js";import{fh}from"./chunk-39xz88rg.js";import{Fn}from"./chunk-s3hsf7ap.js";import{ste}from"./chunk-9h11k2yn.js";import{e$t}from"./chunk-qqhex977.js";class r{reader=void 0;register(e){this.reader=e}read(){return this.reader?.()??!1}}var o=new r;function NOn(e){o.register(e)}function V_e(){if(Lg("hipaa"))return!1;if(ste())return!0;return fh()&&Fn()&&o.read()}function W3r(e){if(!e$t.includes(e))return!0;return V_e()}
export{NOn,V_e,W3r};
