// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{$i,Yi,HA,Tc,gD}from"./chunk-sgfa2pbt.js";function b3e(r){return r instanceof Error&&"code"in r&&r.code==="CLAUDEAI_BEARER_REJECTED"}function mSn(r){if(r instanceof gD)return!0;if(b3e(r))return!1;if(r instanceof HA&&(r.status===403||r.status===401))return r.code!==$i.ClientHttpAuthentication&&r.code!==$i.ClientHttpForbidden;if(r instanceof Error&&!(r instanceof Tc)&&!(r instanceof Yi)&&"code"in r&&(r.code===403||r.code===401))return!0;return!1}
export{b3e,mSn};
