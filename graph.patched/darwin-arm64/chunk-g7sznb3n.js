// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{zo,cs,bE,yl,LC}from"./chunk-rftxjhqf.js";function Nye(r){return r instanceof Error&&"code"in r&&r.code==="CLAUDEAI_BEARER_REJECTED"}function XWt(r){if(r instanceof LC)return!0;if(Nye(r))return!1;if(r instanceof bE&&(r.status===403||r.status===401))return r.code!==zo.ClientHttpAuthentication&&r.code!==zo.ClientHttpForbidden;if(r instanceof Error&&!(r instanceof yl)&&!(r instanceof cs)&&"code"in r&&(r.code===403||r.code===401))return!0;return!1}
export{Nye,XWt};
