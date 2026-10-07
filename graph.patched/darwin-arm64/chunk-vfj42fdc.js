// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{pfs}from"./chunk-xbg4a11x.js";import{rbt}from"./chunk-2whk30mw.js";function M8e(){let{namespace:e,cluster:t}=pfs();return{...e&&{cooNamespace:rbt(e)},...t&&{cooCluster:rbt(t)}}}
export{M8e};
