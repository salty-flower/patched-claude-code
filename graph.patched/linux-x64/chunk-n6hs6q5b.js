// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ts,Ns,ev,Ol,xC}from"./chunk-xgpttjhr.js";function ACe(r){return r instanceof Error&&"code"in r&&r.code==="CLAUDEAI_BEARER_REJECTED"}function _on(r){if(r instanceof xC)return!0;if(ACe(r))return!1;if(r instanceof ev&&(r.status===403||r.status===401))return r.code!==Ts.ClientHttpAuthentication&&r.code!==Ts.ClientHttpForbidden;if(r instanceof Error&&!(r instanceof Ol)&&!(r instanceof Ns)&&"code"in r&&(r.code===403||r.code===401))return!0;return!1}
export{ACe,_on};
