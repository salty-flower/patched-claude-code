// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ETe}from"./chunk-e44qnbvj.js";import{Wz}from"./chunk-29cd2nzs.js";import{H7,Jwt}from"./chunk-xk5tsb28.js";import{wwe}from"./chunk-wqb2b4v0.js";function zSi(i){let n="client_platform"in i?i.client_platform:void 0;return!(ETe("origin"in i?i.origin:void 0,"isSynthetic"in i&&Boolean(i.isSynthetic))||("is_meta"in i)&&i.is_meta===!0||("seeded_summon"in i)&&i.seeded_summon===!0||("client_composed"in i)&&i.client_composed===!0||("inbound_origin"in i)&&i.inbound_origin!==void 0||n!==void 0&&!(typeof n==="string"&&(H7(n)||Jwt(n)))||Wz(i)||wwe("initiator"in i&&typeof i.initiator==="string"?i.initiator:void 0)!==void 0)}
export{zSi};
