// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{G}from"./chunk-r3adsed5.js";import{Sdi}from"./chunk-acx2qgbr.js";import{lie}from"./chunk-tmanz2ax.js";var t=/^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function ugs(){let e=Sdi();if(!e)return"unset";if(!t.test(e))return"malformed";return lie()?"ignored":"used"}function o(){return ugs()==="used"?Sdi():void 0}function fgs(){let e=o();return e===void 0?{key:G(),fromHost:!1}:{key:e,fromHost:!0}}function sLn(){return fgs().key}
export{ugs,fgs,sLn};
