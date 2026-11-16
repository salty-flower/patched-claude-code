// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
var I8="claude.ai ",ZV="claude_ai_";function Dn(t){let r=t.replace(/[^a-zA-Z0-9_-]/g,"_");if(t.startsWith("claude.ai "))r=r.replace(/_+/g,"_").replace(/^_|_$/g,"");return r}var e="claudeai_";function oO(t){return Dn(t).toLowerCase().replace(/[-_]+/g,"_").replace(/^_|_$/g,"")}function HHa(t){return`${oO(t)}_`.startsWith("plugin_")}var $Zn="org-connector-",_ii=128;function _Ye(t){if(t.length>_ii)return!1;let r=`${oO(t)}_`;return r.startsWith("org_connector_")||r.startsWith("orgconnector_")}function Txt(t){let r=`${oO(t)}_`;return r.startsWith("claude_ai_")||r.startsWith(e)}
export{I8,ZV,Dn,oO,HHa,$Zn,_ii,_Ye,Txt};
