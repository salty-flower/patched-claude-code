// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{dn}from"./chunk-j6z0j5vh.js";import{ge}from"./chunk-e84gprty.js";import{Rxe,Ab}from"./chunk-8d42tqy3.js";import{JGe}from"./chunk-68mnexjh.js";var n="\x1B]8;;",o="\x07";function LS(e,r,i){let t=r===void 0?void 0:dn(r),s=t===void 0||t===e||e===`http://${t}`||e===`https://${t}`;if(!(s&&(i?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(Rxe()??!0)||(i?.supportsHyperlinks??Ab()))){if(r!==void 0&&!s)return`${r} (${e})`;return e}let p=(((i?.themeName)?JGe(i.themeName):!1)?ge.blue:ge.blueBright)(r??e);return`${n}${e}${o}${p}${n}${o}`}
export{LS};
