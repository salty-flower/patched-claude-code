// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
function _5(n){return/^\w[\w.@-]*$/.test(n)}function Ta(n,t,r){if(!_5(t))return null;return`claude ${n} ${t}${r?` ${r}`:""}`}function NC(n,t,{extra:r,tail:i="",fallback:s}){let l=Ta(n,t,r);return l===null?s:`run \`${l}\`${i?` ${i}`:""}`}
export{_5,Ta,NC};
