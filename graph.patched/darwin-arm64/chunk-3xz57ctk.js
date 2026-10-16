// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{dn}from"./chunk-bnfhb7sj.js";import{he}from"./chunk-bdh8gqj2.js";import{DDe,SE}from"./chunk-sy8wfg6c.js";import{f5e}from"./chunk-vds4wvdn.js";var o="\x1B]8;;",p="\x07";function _E(e,r,t){let s=r===void 0?void 0:dn(r),n=s===void 0||H5r(e,s);if(!(n&&(t?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(DDe()??!0)||(t?.supportsHyperlinks??SE()))){let i=t?.shownUrlStart??"";if(r!==void 0&&!n)return`${r}${i} (${e})`;return`${i}${e}`}let u=(((t?.themeName)?f5e(t.themeName):!1)?he.blue:he.blueBright)(r??e);return`${o}${e}${p}${u}${o}${p}`}function H5r(e,r){return r===e||e===`http://${r}`||e===`https://${r}`}
export{_E,H5r};
