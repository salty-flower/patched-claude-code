// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{TFo}from"./chunk-d9vq4daa.js";import{pyt,F0e,kle}from"./chunk-61p68esv.js";function ZIe(){if(!pyt())throw Error("the MDM settings have not been read yet");if(kle())throw Error("an admin-owned settings document could not be read");if(TFo()!==void 0)throw Error("the managed-settings path was overridden");let e=F0e()[0]?.forceLoginOrgUUID;if(e===void 0)return;return typeof e==="string"?[e]:e}
export{ZIe};
