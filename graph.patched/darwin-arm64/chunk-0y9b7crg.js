// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{fn}from"./chunk-tdxkq523.js";import{he}from"./chunk-9p2h8en7.js";import{CNe,DE}from"./chunk-vhm4dwwy.js";import{lYe}from"./chunk-1kmtmjdd.js";var mRn="\x1B]8;;",gRn="\x07";function nE(e,r,t){let s=r===void 0?void 0:fn(r),n=s===void 0||YQr(e,s);if(!(n&&(t?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(CNe()??!0)||(t?.supportsHyperlinks??DE()))){let i=t?.shownUrlStart??"";if(r!==void 0&&!n)return`${r}${i} (${e})`;return`${i}${e}`}let o=(((t?.themeName)?lYe(t.themeName):!1)?he.blue:he.blueBright)(r??e);return`${mRn}${e}${gRn}${o}${mRn}${gRn}`}function YQr(e,r){return r===e||e===`http://${r}`||e===`https://${r}`}
export{mRn,gRn,nE,YQr};
