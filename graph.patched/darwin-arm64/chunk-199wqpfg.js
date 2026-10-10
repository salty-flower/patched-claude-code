// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{pn}from"./chunk-gyf58rwf.js";import{ge}from"./chunk-7sdm5x5t.js";import{yOe,uw}from"./chunk-7c38cy4d.js";import{nqe}from"./chunk-5dxmnnh1.js";var o="\x1B]8;;",p="\x07";function dw(e,r,t){let s=r===void 0?void 0:pn(r),n=s===void 0||j1r(e,s);if(!(n&&(t?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(yOe()??!0)||(t?.supportsHyperlinks??uw()))){let i=t?.shownUrlStart??"";if(r!==void 0&&!n)return`${r}${i} (${e})`;return`${i}${e}`}let u=(((t?.themeName)?nqe(t.themeName):!1)?ge.blue:ge.blueBright)(r??e);return`${o}${e}${p}${u}${o}${p}`}function j1r(e,r){return r===e||e===`http://${r}`||e===`https://${r}`}
export{dw,j1r};
