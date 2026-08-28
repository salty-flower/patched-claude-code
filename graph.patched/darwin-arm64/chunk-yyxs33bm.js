// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
class P0 extends Error{constructor(e){super(e);this.name="SwarmPaneError"}}var o=/\p{Cc}/u;function dGn(e){return o.test(e)}function Nbe(e){let n=o.exec(e);if(n){let t=n[0].codePointAt(0);throw new P0(`Refusing to send command containing control character U+${t.toString(16).padStart(4,"0").toUpperCase()} to terminal pane`)}}function Dze(e){return e==="tmux"||e==="iterm2"}
export{P0,dGn,Nbe,Dze};
