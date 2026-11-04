// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
function t(r,e,a,i=!1,s=!1){return{path:`artifact-type/reference/${r}`,inlinedByCreate:e,printed:a,readByKit:i,needsDesignSystem:s}}var N1o=new Map([["design",[t("format.md",!0,!0,!0),t("design-system-components.md",!0,!1,!0,!0),t("fonts.md",!1,!0),t("craft.md",!1,!0)]],["migrated-design",[t("format.md",!0,!0),t("fonts.md",!1,!0),t("craft.md",!1,!0)]],["slides",[t("format.md",!0,!0,!0),t("fonts.md",!0,!0,!0),t("craft.md",!1,!0),t("deck-files.md",!1,!1,!0)]]]),d=[t("format.md",!1,!0),t("fonts.md",!1,!0),t("craft.md",!1,!0)];function n(r){return(r===void 0?void 0:N1o.get(r))??d}function D7s(r){return n(r).filter((e)=>e.inlinedByCreate).map((e)=>e.path)}function L7s(r){return n(r).filter((e)=>e.inlinedByCreate&&e.needsDesignSystem).map((e)=>e.path)}function RGr(r){return n(r).filter((e)=>e.printed).map((e)=>e.path)}function H7s(r){return n(r).filter((e)=>e.readByKit).map((e)=>e.path)}
export{N1o,D7s,L7s,RGr,H7s};
