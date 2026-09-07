// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
function Ble(t,r){switch(r){case"bash":return`!${t}`;default:return t}}function bg(t){if(t.startsWith("!"))return"bash";return"prompt"}function FS(t){if(bg(t)==="prompt")return t;return t.slice(1)}function GLe(t){return t==="!"}
export{Ble,bg,FS,GLe};
