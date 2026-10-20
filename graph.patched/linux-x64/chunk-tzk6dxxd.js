// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{q}from"./chunk-dxktn51d.js";import{qVo}from"./chunk-zjcj7ams.js";import{Zde}from"./chunk-qaefbavh.js";var t=/^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Wio(){let e=qVo();if(!e)return"unset";if(!t.test(e))return"malformed";return Zde()?"ignored":"used"}function o(){return Wio()==="used"?qVo():void 0}function Gio(){let e=o();return e===void 0?{key:q(),fromHost:!1}:{key:e,fromHost:!0}}function O8t(){return Gio().key}
export{Wio,Gio,O8t};
