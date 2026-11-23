// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
var t=["team","enterprise"];function l4t(e){return typeof e==="string"&&t.includes(e)}var m0e="tengu_org_config_required",Sse={enabled:!1,plans:[],percent:0,graceTtlHours:96,budgetMs:6000,hostTokens:!1,exemptReasons:[],refuseNotEntitled:!1};function N7n(e){switch(e){case"ok":case"none_configured":case"not_required":return"fetched";case"refused_credential":case"refused_not_entitled":return"refused";case"blocked_by_intermediary":return"intermediary";case"refused_other":case"unavailable_timeout":case"unavailable_connect":case"unavailable_server":case"unavailable_rate_limited":case"unavailable_credential_refresh":case"unavailable_pending":case"unavailable_settings_unusable":return"unavailable";case"client_no_credentials":case"client_error":return"client";case"not_attempted":return"not_attempted"}}
export{l4t,m0e,Sse,N7n};
