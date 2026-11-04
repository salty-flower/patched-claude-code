// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
var tbe="claude.ai ",aq="claude_ai_";function En(t){let r=t.replace(/[^a-zA-Z0-9_-]/g,"_");if(t.startsWith("claude.ai "))r=r.replace(/_+/g,"_").replace(/^_|_$/g,"");return r}var e="claudeai_";function HB(t){return En(t).toLowerCase().replace(/[-_]+/g,"_").replace(/^_|_$/g,"")}var p4i="org-connector-",D0s=128;function f6e(t){if(t.length>D0s)return!1;let r=`${HB(t)}_`;return r.startsWith("org_connector_")||r.startsWith("orgconnector_")}function Uyt(t){let r=`${HB(t)}_`;return r.startsWith("claude_ai_")||r.startsWith(e)}
export{tbe,aq,En,HB,p4i,D0s,f6e,Uyt};
