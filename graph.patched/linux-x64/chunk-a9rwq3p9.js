// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{io,yo,h_,Vi,xA}from"./chunk-nfrw5gpn.js";function PZ(r){return r instanceof Error&&"code"in r&&r.code==="CLAUDEAI_BEARER_REJECTED"}function nat(r){if(r instanceof xA)return!0;if(PZ(r))return!1;if(r instanceof h_&&(r.status===403||r.status===401))return r.code!==io.ClientHttpAuthentication&&r.code!==io.ClientHttpForbidden;if(r instanceof Error&&!(r instanceof Vi)&&!(r instanceof yo)&&"code"in r&&(r.code===403||r.code===401))return!0;return!1}
export{PZ,nat};
