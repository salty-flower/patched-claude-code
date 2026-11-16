// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Gi,aa,Tx,Qc,_0}from"./chunk-xn9aeapn.js";function MQe(r){return r instanceof Error&&"code"in r&&r.code==="CLAUDEAI_BEARER_REJECTED"}function wLn(r){if(r instanceof _0)return!0;if(MQe(r))return!1;if(r instanceof Tx&&(r.status===403||r.status===401))return r.code!==Gi.ClientHttpAuthentication&&r.code!==Gi.ClientHttpForbidden;if(r instanceof Error&&!(r instanceof Qc)&&!(r instanceof aa)&&"code"in r&&(r.code===403||r.code===401))return!0;return!1}
export{MQe,wLn};
