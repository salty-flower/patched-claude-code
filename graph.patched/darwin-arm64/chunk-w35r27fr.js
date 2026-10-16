// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{K}from"./chunk-xzypj06m.js";import{M1o}from"./chunk-jn6attna.js";import{EOe}from"./chunk-1901fdh6.js";var t=/^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function T9r(){let e=M1o();if(!e)return"unset";if(!t.test(e))return"malformed";return EOe()?"ignored":"used"}function o(){return T9r()==="used"?M1o():void 0}function R9r(){let e=o();return e===void 0?{key:K(),fromHost:!1}:{key:e,fromHost:!0}}function HVt(){return R9r().key}
export{T9r,R9r,HVt};
