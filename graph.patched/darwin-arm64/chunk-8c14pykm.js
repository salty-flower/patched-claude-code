// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{se}from"./chunk-gyxp7wp6.js";import{xZ,pf}from"./chunk-623zh45n.js";import{z_t}from"./chunk-xhc3yqr3.js";import{ft}from"./chunk-t4hc7q7h.js";var n="\x1B]8;;",o="\x07";function jg(e,r,i){let t=r===void 0?void 0:ft(r),s=t===void 0||t===e||e===`http://${t}`||e===`https://${t}`;if(!(s&&(i?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(xZ()??!0)||(i?.supportsHyperlinks??pf()))){if(r!==void 0&&!s)return`${r} (${e})`;return e}let p=(((i?.themeName)?z_t(i.themeName):!1)?se.blue:se.blueBright)(r??e);return`${n}${e}${o}${p}${n}${o}`}
export{jg};
