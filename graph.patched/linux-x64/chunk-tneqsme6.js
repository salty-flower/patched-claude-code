// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{mTe}from"./chunk-a5a37ds7.js";import{BV}from"./chunk-5z5dtbrz.js";import{AY,Gwt}from"./chunk-b962mh9d.js";import{pwe}from"./chunk-zaxe68t4.js";function fbi(i){let n="client_platform"in i?i.client_platform:void 0;return!(mTe("origin"in i?i.origin:void 0,"isSynthetic"in i&&Boolean(i.isSynthetic))||("is_meta"in i)&&i.is_meta===!0||("seeded_summon"in i)&&i.seeded_summon===!0||("client_composed"in i)&&i.client_composed===!0||("inbound_origin"in i)&&i.inbound_origin!==void 0||n!==void 0&&!(typeof n==="string"&&(AY(n)||Gwt(n)))||BV(i)||pwe("initiator"in i&&typeof i.initiator==="string"?i.initiator:void 0)!==void 0)}
export{fbi};
