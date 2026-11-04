// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{G}from"./chunk-ecyypctx.js";import{xHs}from"./chunk-3e6pdcy8.js";import{Qee}from"./chunk-6nktghc3.js";var t=/^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function qVo(){let e=xHs();if(!e)return"unset";if(!t.test(e))return"malformed";return Qee()?"ignored":"used"}function o(){return qVo()==="used"?xHs():void 0}function YVo(){let e=o();return e===void 0?{key:G(),fromHost:!1}:{key:e,fromHost:!0}}function I_n(){return YVo().key}
export{qVo,YVo,I_n};
