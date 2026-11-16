// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Nsi}from"./chunk-gywtf5sd.js";import{Due,W8e,P9}from"./chunk-x4r54n7x.js";function E0e(){if(!Due())throw Error("the MDM settings have not been read yet");if(P9())throw Error("an admin-owned settings document could not be read");if(Nsi()!==void 0)throw Error("the managed-settings path was overridden");let e=W8e()[0]?.forceLoginOrgUUID;if(e===void 0)return;return typeof e==="string"?[e]:e}
export{E0e};
