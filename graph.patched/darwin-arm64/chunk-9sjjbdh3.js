// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{un}from"./chunk-cy0s0eq1.js";import{ge}from"./chunk-45vnv946.js";import{Lxe,TS}from"./chunk-t8h9y91t.js";import{s6e}from"./chunk-yq3gar3r.js";var n="\x1B]8;;",o="\x07";function Nb(e,r,i){let t=r===void 0?void 0:un(r),s=t===void 0||t===e||e===`http://${t}`||e===`https://${t}`;if(!(s&&(i?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(Lxe()??!0)||(i?.supportsHyperlinks??TS()))){if(r!==void 0&&!s)return`${r} (${e})`;return e}let p=(((i?.themeName)?s6e(i.themeName):!1)?ge.blue:ge.blueBright)(r??e);return`${n}${e}${o}${p}${n}${o}`}
export{Nb};
