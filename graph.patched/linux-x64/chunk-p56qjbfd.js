// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{K}from"./chunk-aywwjcwq.js";import{Hdo}from"./chunk-zyrx67ap.js";import{ynt}from"./chunk-m0sj7y8g.js";var t=/^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function ERr(){let e=Hdo();if(!e)return"unset";if(!t.test(e))return"malformed";return ynt()?"ignored":"used"}function o(){return ERr()==="used"?Hdo():void 0}function kRr(){let e=o();return e===void 0?{key:K(),fromHost:!1}:{key:e,fromHost:!0}}function mHt(){return kRr().key}
export{ERr,kRr,mHt};
