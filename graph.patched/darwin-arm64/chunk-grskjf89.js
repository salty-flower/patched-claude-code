// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
var $9="claude.ai ",tV="claude_ai_";function Ln(t){let r=t.replace(/[^a-zA-Z0-9_-]/g,"_");if(t.startsWith("claude.ai "))r=r.replace(/_+/g,"_").replace(/^_|_$/g,"");return r}var e="claudeai_";function aI(t){return Ln(t).toLowerCase().replace(/[-_]+/g,"_").replace(/^_|_$/g,"")}function CNa(t){return`${aI(t)}_`.startsWith("plugin_")}var ler="org-connector-",Xii=128;function v7e(t){if(t.length>Xii)return!1;let r=`${aI(t)}_`;return r.startsWith("org_connector_")||r.startsWith("orgconnector_")}function Ixt(t){let r=`${aI(t)}_`;return r.startsWith("claude_ai_")||r.startsWith(e)}
export{$9,tV,Ln,aI,CNa,ler,Xii,v7e,Ixt};
