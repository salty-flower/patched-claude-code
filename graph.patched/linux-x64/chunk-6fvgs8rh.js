// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{bt,wd}from"./chunk-3fgza2mw.js";var t=/[\x00-\x1f\x7f-\x9f\u061c\u2028\u2029\u202a-\u202e\u2066-\u2069\p{Co}\p{Cn}]/gu;function Jn(n){let i=bt(n),r=i===n?i:i+"\uFFFD";return wd(r.replace(t,"\uFFFD"))}function Fme(n){return n.split(`
`).map((i)=>Jn(i)).join(`
`)}
export{Jn,Fme};
