// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{osi}from"./chunk-374g520d.js";import{Aue,N9e,v8}from"./chunk-4rkc6f3s.js";function gMe(){if(!Aue())throw Error("the MDM settings have not been read yet");if(v8())throw Error("an admin-owned settings document could not be read");if(osi()!==void 0)throw Error("the managed-settings path was overridden");let e=N9e()[0]?.forceLoginOrgUUID;if(e===void 0)return;return typeof e==="string"?[e]:e}
export{gMe};
