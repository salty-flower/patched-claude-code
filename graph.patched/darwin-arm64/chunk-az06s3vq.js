// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{ue}from"./chunk-n3x619p1.js";import{rye,Sh}from"./chunk-r9aytjtg.js";import{uYt}from"./chunk-2myb9y3f.js";import{_t}from"./chunk-z2w95mdn.js";var n="\x1B]8;;",o="\x07";function u_(e,r,i){let t=r===void 0?void 0:_t(r),s=t===void 0||t===e||e===`http://${t}`||e===`https://${t}`;if(!(s&&(i?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(rye()??!0)||(i?.supportsHyperlinks??Sh()))){if(r!==void 0&&!s)return`${r} (${e})`;return e}let p=(((i?.themeName)?uYt(i.themeName):!1)?ue.blue:ue.blueBright)(r??e);return`${n}${e}${o}${p}${n}${o}`}
export{u_};
