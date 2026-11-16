// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{zi,aa,Ax,Qc,SM}from"./chunk-ha4cyj5r.js";function LQe(r){return r instanceof Error&&"code"in r&&r.code==="CLAUDEAI_BEARER_REJECTED"}function wLn(r){if(r instanceof SM)return!0;if(LQe(r))return!1;if(r instanceof Ax&&(r.status===403||r.status===401))return r.code!==zi.ClientHttpAuthentication&&r.code!==zi.ClientHttpForbidden;if(r instanceof Error&&!(r instanceof Qc)&&!(r instanceof aa)&&"code"in r&&(r.code===403||r.code===401))return!0;return!1}
export{LQe,wLn};
