// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{j9n,hl,Lgt,vt,In,Tn,oe}from"./chunk-ns0ekkj0.js";import{a}from"./chunk-g0kfvhx3.js";function y1t(){if(a.DISABLE_COST_WARNINGS)return!1;let o=vt();if(o&&KH())return!0;if(o)return!1;let n=hl(),i=Lgt();if(!n.hasToken&&!i)return!1;let e=oe(),r=e.oauthAccount?.organizationRole,t=e.oauthAccount?.workspaceRole;if(!r||!t)return!1;return["admin","billing"].includes(r)||["workspace_admin","workspace_billing"].includes(t)}function ef(){let o=j9n();if(o!==null)return o;if(!vt())return!1;let n=Tn();if(n==="max"||n==="pro")return!0;let e=oe().oauthAccount?.organizationRole;return!!e&&["admin","billing","owner","primary_owner"].includes(e)}function KH(){return In()?.billingType==="usage_based"}
export{y1t,ef,KH};
