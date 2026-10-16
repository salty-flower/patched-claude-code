// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{dn}from"./chunk-cwsn6mdf.js";import{he}from"./chunk-xsxnmhwb.js";import{C0e,_v}from"./chunk-assty6he.js";import{s5e}from"./chunk-hyqn7bn1.js";var o="\x1B]8;;",p="\x07";function yv(e,r,t){let s=r===void 0?void 0:dn(r),n=s===void 0||h5r(e,s);if(!(n&&(t?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(C0e()??!0)||(t?.supportsHyperlinks??_v()))){let i=t?.shownUrlStart??"";if(r!==void 0&&!n)return`${r}${i} (${e})`;return`${i}${e}`}let u=(((t?.themeName)?s5e(t.themeName):!1)?he.blue:he.blueBright)(r??e);return`${o}${e}${p}${u}${o}${p}`}function h5r(e,r){return r===e||e===`http://${r}`||e===`https://${r}`}
export{yv,h5r};
