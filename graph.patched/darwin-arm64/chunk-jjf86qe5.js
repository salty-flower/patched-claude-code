// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{n}from"./chunk-t50adtrb.js";import{_}from"./chunk-0jrfbepr.js";import{Hi}from"./chunk-jr046h4n.js";import{e}from"./chunk-v5r13aq1.js";function xs(R){let P=_(2),{children:l,exitActive:c,onInterrupt:u}=R,x=c===void 0?!0:c,{pending:y,keyName:N}=Hi(void 0,u,x);const o=y?`Press ${N} again to exit`:l;let d;if(P[0]!==o)d=e(n,{dimColor:!0,children:o}),P[0]=o,P[1]=d;else d=P[1];return d}
export{xs};
