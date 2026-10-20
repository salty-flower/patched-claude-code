// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{od}from"./chunk-514fs3c9.js";import{ift}from"./chunk-9eyqn2ve.js";import{P,A,B}from"./chunk-2txtxkxk.js";B();function Ds(n,e,t){let r=od(),i=r?.getDisplayText(n,e),o=i===void 0,s=r?"action_not_found":"no_context",u=A(!1);if(P(()=>{if(o&&!u.current)u.current=!0,ift(n,e,t,s)},[o,n,e,t,s]),o)return t;return i===null?"":i}
export{Ds};
