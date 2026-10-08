// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{K}from"./chunk-vd0a9d2s.js";import{SSo}from"./chunk-pf8p4bsg.js";import{QDe}from"./chunk-gcyvvtkw.js";var t=/^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function vDr(){let e=SSo();if(!e)return"unset";if(!t.test(e))return"malformed";return QDe()?"ignored":"used"}function o(){return vDr()==="used"?SSo():void 0}function kDr(){let e=o();return e===void 0?{key:K(),fromHost:!1}:{key:e,fromHost:!0}}function bNt(){return kDr().key}
export{vDr,kDr,bNt};
