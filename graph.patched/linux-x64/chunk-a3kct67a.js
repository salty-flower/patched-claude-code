// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{q}from"./chunk-eqmywwjn.js";import{dBo}from"./chunk-en4g449d.js";import{gOe}from"./chunk-k16gymf7.js";var t=/^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Y5r(){let e=dBo();if(!e)return"unset";if(!t.test(e))return"malformed";return gOe()?"ignored":"used"}function o(){return Y5r()==="used"?dBo():void 0}function X5r(){let e=o();return e===void 0?{key:q(),fromHost:!1}:{key:e,fromHost:!0}}function hKt(){return X5r().key}
export{Y5r,X5r,hKt};
