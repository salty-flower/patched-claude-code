// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{ae}from"./chunk-8ba2x98b.js";import{AJ,Xp}from"./chunk-pbhhweyf.js";import{nft}from"./chunk-mc04fw04.js";import{bt}from"./chunk-3fgza2mw.js";var n="\x1B]8;;",o="\x07";function Sh(e,r,i){let t=r===void 0?void 0:bt(r),s=t===void 0||t===e||e===`http://${t}`||e===`https://${t}`;if(!(s&&(i?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(AJ()??!0)||(i?.supportsHyperlinks??Xp()))){if(r!==void 0&&!s)return`${r} (${e})`;return e}let p=(((i?.themeName)?nft(i.themeName):!1)?ae.blue:ae.blueBright)(r??e);return`${n}${e}${o}${p}${n}${o}`}
export{Sh};
