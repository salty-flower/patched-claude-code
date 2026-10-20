// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{bi}from"./chunk-ny1k7cyv.js";import{YP}from"./chunk-s7ds2wsh.js";function l4e(r){return r instanceof Error&&"code"in r&&r.code==="CLAUDEAI_BEARER_REJECTED"}function pRn(r){if(r instanceof YP)return!0;if(l4e(r))return!1;if(r instanceof Error&&!(r instanceof bi)&&"code"in r){if(r.code===403)return!r.message.includes("Server returned 403 after trying upscoping");if(r.code===401)return!r.message.includes("Server returned 401 after successful authentication")}return!1}
export{l4e,pRn};
