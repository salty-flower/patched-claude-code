// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
function e(r,t,a){return{path:`artifact-type/reference/${r}`,inlinedByCreate:t,printed:a}}var WRn=new Map([["design",[e("format.md",!0,!0),e("design-system-components.md",!0,!1),e("fonts.md",!1,!0),e("craft.md",!1,!0)]],["migrated-design",[e("format.md",!0,!0),e("fonts.md",!1,!0),e("craft.md",!1,!0)]],["slides",[e("format.md",!0,!0),e("fonts.md",!0,!0),e("craft.md",!1,!0)]]]),s=[e("format.md",!1,!0),e("fonts.md",!1,!0),e("craft.md",!1,!0)];function n(r){return(r===void 0?void 0:WRn.get(r))??s}function opr(r){return n(r).filter((t)=>t.inlinedByCreate).map((t)=>t.path)}function A9t(r){return n(r).filter((t)=>t.printed).map((t)=>t.path)}
export{WRn,opr,A9t};
