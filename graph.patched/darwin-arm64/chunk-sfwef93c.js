// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{lg}from"./chunk-n031qbtd.js";import{cg}from"./chunk-1y4ds8dy.js";import{On}from"./chunk-d5e21f8p.js";import{c7}from"./chunk-170dd589.js";import{VSt}from"./chunk-q38stjbc.js";class r{reader=void 0;register(e){this.reader=e}read(){return this.reader?.()??!1}}var o=new r;function pln(e){o.register(e)}function wce(){if(lg("hipaa"))return!1;if(c7())return!0;return cg()&&On()&&o.read()}function amr(e){if(!VSt.includes(e))return!0;return wce()}
export{pln,wce,amr};
