// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{V}from"./chunk-ersar6wn.js";import{Ies}from"./chunk-we9anmwe.js";import{Gpe}from"./chunk-923em3jx.js";var t=/^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function w_o(){let e=Ies();if(!e)return"unset";if(!t.test(e))return"malformed";return Gpe()?"ignored":"used"}function o(){return w_o()==="used"?Ies():void 0}function E_o(){let e=o();return e===void 0?{key:V(),fromHost:!1}:{key:e,fromHost:!0}}function den(){return E_o().key}
export{w_o,E_o,den};
