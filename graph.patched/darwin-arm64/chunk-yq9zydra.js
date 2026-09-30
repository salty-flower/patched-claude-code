// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{ns,Es,Tw,Ja,jA}from"./chunk-eg62q267.js";function DEe(r){return r instanceof Error&&"code"in r&&r.code==="CLAUDEAI_BEARER_REJECTED"}function SXt(r){if(r instanceof jA)return!0;if(DEe(r))return!1;if(r instanceof Tw&&(r.status===403||r.status===401))return r.code!==ns.ClientHttpAuthentication&&r.code!==ns.ClientHttpForbidden;if(r instanceof Error&&!(r instanceof Ja)&&!(r instanceof Es)&&"code"in r&&(r.code===403||r.code===401))return!0;return!1}
export{DEe,SXt};
