// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
function _q(s,n,e=32000){let t=Math.min(500*Math.pow(2,s-1),e),a=Math.round(t+Math.random()*0.25*t);if(n){let o=parseInt(n,10);if(!isNaN(o))return Math.max(o*1000,a)}return a}
export{_q};
