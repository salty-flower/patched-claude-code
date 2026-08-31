// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{vo,Uo,RS,wa,CA}from"./chunk-25pekgrs.js";function KQ(r){return r instanceof Error&&"code"in r&&r.code==="CLAUDEAI_BEARER_REJECTED"}function Nrt(r){if(r instanceof CA)return!0;if(KQ(r))return!1;if(r instanceof RS&&(r.status===403||r.status===401))return r.code!==vo.ClientHttpAuthentication&&r.code!==vo.ClientHttpForbidden;if(r instanceof Error&&!(r instanceof wa)&&!(r instanceof Uo)&&"code"in r&&(r.code===403||r.code===401))return!0;return!1}
export{KQ,Nrt};
