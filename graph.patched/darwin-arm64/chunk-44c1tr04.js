// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{we}from"./chunk-65t70pys.js";import{UJe,Pw}from"./chunk-nnyvtvfy.js";import{VPe}from"./chunk-zx9k5583.js";import{pr}from"./chunk-1fk1dcgw.js";var _hr="\x1B]8;;",yhr="\x07";function Rw(e,r,t){let s=r===void 0?void 0:pr(r),n=s===void 0||Uas(e,s);if(!(n&&(t?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(UJe()??!0)||(t?.supportsHyperlinks??Pw()))){let i=t?.shownUrlStart??"";if(r!==void 0&&!n)return`${r}${i} (${e})`;return`${i}${e}`}let o=(((t?.themeName)?VPe(t.themeName):!1)?we.blue:we.blueBright)(r??e);return`${_hr}${e}${yhr}${o}${_hr}${yhr}`}function Uas(e,r){return r===e||e===`http://${r}`||e===`https://${r}`}
export{_hr,yhr,Rw,Uas};
