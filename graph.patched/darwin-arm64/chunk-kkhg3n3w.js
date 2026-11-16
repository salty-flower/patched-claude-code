// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{dn}from"./chunk-mxjxrrv2.js";import{kt}from"./chunk-28n1q6sq.js";import{ht}from"./chunk-mddke2ke.js";import{ke}from"./chunk-tbvds061.js";import{qi,gu,bjo,hn,GO,b}from"./chunk-e44qnbvj.js";import{jH}from"./chunk-6f8nwvsg.js";var o="tengu_generic_flask";function W6e(){if(ke()!=="firstParty"||ht()||jH()||!GO()||qi().source!=="claude.ai"||!gu()||!bjo())return null;let e=hn(),n=kt(e?.accountUuid),t=kt(e?.organizationUuid);return n===null||t===null?null:{key:`${n}/${t}`,accountUuid:n,organizationUuid:t}}function TCn(){return qi().source==="claude.ai"&&!ht()&&!jH()&&!bjo()&&dn().PRIVACY_CONSENTS_SCOPE_REGISTERED}function VSe(){if(!b(o,!1))return"accountSettings";return W6e()===null?"claudeAi":"consentService"}
export{W6e,TCn,VSe};
