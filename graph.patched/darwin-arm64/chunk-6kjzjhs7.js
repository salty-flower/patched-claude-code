// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{yn}from"./chunk-d7b0m8qy.js";import{he}from"./chunk-qrwzmhww.js";import{QUe,pw}from"./chunk-md9pdmjn.js";import{cQe}from"./chunk-tkrm3286.js";var DHn="\x1B]8;;",LHn="\x07";function nE(e,r,t){let s=r===void 0?void 0:yn(r),n=s===void 0||Jdo(e,s);if(!(n&&(t?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(QUe()??!0)||(t?.supportsHyperlinks??pw()))){let i=t?.shownUrlStart??"";if(r!==void 0&&!n)return`${r}${i} (${e})`;return`${i}${e}`}let o=(((t?.themeName)?cQe(t.themeName):!1)?he.blue:he.blueBright)(r??e);return`${DHn}${e}${LHn}${o}${DHn}${LHn}`}function Jdo(e,r){return r===e||e===`http://${r}`||e===`https://${r}`}
export{DHn,LHn,nE,Jdo};
