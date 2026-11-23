// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{G}from"./chunk-m8nhymg4.js";import{Zdi}from"./chunk-gg7nabmz.js";import{gie}from"./chunk-n44szebn.js";var t=/^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function uys(){let e=Zdi();if(!e)return"unset";if(!t.test(e))return"malformed";return gie()?"ignored":"used"}function o(){return uys()==="used"?Zdi():void 0}function fys(){let e=o();return e===void 0?{key:G(),fromHost:!1}:{key:e,fromHost:!0}}function aHn(){return fys().key}
export{uys,fys,aHn};
