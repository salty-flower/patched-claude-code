// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{K}from"./chunk-8mvda08c.js";import{duo}from"./chunk-mcq8tx7b.js";import{knt}from"./chunk-s46qgfx7.js";var t=/^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function JRr(){let e=duo();if(!e)return"unset";if(!t.test(e))return"malformed";return knt()?"ignored":"used"}function o(){return JRr()==="used"?duo():void 0}function QRr(){let e=o();return e===void 0?{key:K(),fromHost:!1}:{key:e,fromHost:!0}}function RHt(){return QRr().key}
export{JRr,QRr,RHt};
