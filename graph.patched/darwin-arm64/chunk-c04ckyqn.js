// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{IGo}from"./chunk-gzssw8ss.js";import{XSt,mHe,Hde}from"./chunk-qwytg6a7.js";function IMe(){if(!XSt())throw Error("the MDM settings have not been read yet");if(Hde())throw Error("an admin-owned settings document could not be read");if(IGo()!==void 0)throw Error("the managed-settings path was overridden");let e=mHe()[0]?.forceLoginOrgUUID;if(e===void 0)return;return typeof e==="string"?[e]:e}
export{IMe};
