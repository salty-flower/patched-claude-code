// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{se}from"./chunk-9142y21k.js";import{HZ,dp}from"./chunk-q6w5md0x.js";import{Ryt}from"./chunk-jde10qxn.js";import{pt}from"./chunk-nnhhr1jx.js";var n="\x1B]8;;",o="\x07";function Bg(e,r,i){let t=r===void 0?void 0:pt(r),s=t===void 0||t===e||e===`http://${t}`||e===`https://${t}`;if(!(s&&(i?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(HZ()??!0)||(i?.supportsHyperlinks??dp()))){if(r!==void 0&&!s)return`${r} (${e})`;return e}let p=(((i?.themeName)?Ryt(i.themeName):!1)?se.blue:se.blueBright)(r??e);return`${n}${e}${o}${p}${n}${o}`}
export{Bg};
