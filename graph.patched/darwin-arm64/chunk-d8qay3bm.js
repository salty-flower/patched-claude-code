// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{wMs}from"./chunk-h21zbzen.js";import{cAe,Pze,ZK}from"./chunk-gbez09mv.js";function QCe(){if(!cAe())throw Error("the MDM settings have not been read yet");if(ZK())throw Error("an admin-owned settings document could not be read");if(wMs()!==void 0)throw Error("the managed-settings path was overridden");let e=Pze()[0]?.forceLoginOrgUUID;if(e===void 0)return;return typeof e==="string"?[e]:e}
export{QCe};
