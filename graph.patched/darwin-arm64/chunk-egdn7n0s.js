// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{ie}from"./chunk-azaesbcc.js";import{lne,Kf}from"./chunk-ftfec4jb.js";import{mvt}from"./chunk-nqc9vg43.js";import{ft}from"./chunk-q87va14m.js";var n="\x1B]8;;",o="\x07";function Th(e,r,i){let t=r===void 0?void 0:ft(r),s=t===void 0||t===e||e===`http://${t}`||e===`https://${t}`;if(!(s&&(i?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(lne()??!0)||(i?.supportsHyperlinks??Kf()))){if(r!==void 0&&!s)return`${r} (${e})`;return e}let p=(((i?.themeName)?mvt(i.themeName):!1)?ie.blue:ie.blueBright)(r??e);return`${n}${e}${o}${p}${n}${o}`}
export{Th};
