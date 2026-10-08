// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{As,$s,Tv,Pl,sR}from"./chunk-x4b8r1ph.js";function Ixe(r){return r instanceof Error&&"code"in r&&r.code==="CLAUDEAI_BEARER_REJECTED"}function zln(r){if(r instanceof sR)return!0;if(Ixe(r))return!1;if(r instanceof Tv&&(r.status===403||r.status===401))return r.code!==As.ClientHttpAuthentication&&r.code!==As.ClientHttpForbidden;if(r instanceof Error&&!(r instanceof Pl)&&!(r instanceof $s)&&"code"in r&&(r.code===403||r.code===401))return!0;return!1}
export{Ixe,zln};
