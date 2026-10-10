// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{K}from"./chunk-4bw62nzm.js";import{CTo}from"./chunk-tadwrn0a.js";import{Zde}from"./chunk-bk5ct2gw.js";var t=/^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function CBr(){let e=CTo();if(!e)return"unset";if(!t.test(e))return"malformed";return Zde()?"ignored":"used"}function o(){return CBr()==="used"?CTo():void 0}function TBr(){let e=o();return e===void 0?{key:K(),fromHost:!1}:{key:e,fromHost:!0}}function eBt(){return TBr().key}
export{CBr,TBr,eBt};
