// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{ae}from"./chunk-8yrsa1e1.js";import{tne,Vf}from"./chunk-svd0gp78.js";import{QEt}from"./chunk-dhzn37d7.js";import{ft}from"./chunk-jwp1p5wz.js";var n="\x1B]8;;",o="\x07";function Ah(e,r,i){let t=r===void 0?void 0:ft(r),s=t===void 0||t===e||e===`http://${t}`||e===`https://${t}`;if(!(s&&(i?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(tne()??!0)||(i?.supportsHyperlinks??Vf()))){if(r!==void 0&&!s)return`${r} (${e})`;return e}let p=(((i?.themeName)?QEt(i.themeName):!1)?ae.blue:ae.blueBright)(r??e);return`${n}${e}${o}${p}${n}${o}`}
export{Ah};
