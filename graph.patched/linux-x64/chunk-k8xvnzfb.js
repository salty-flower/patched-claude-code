// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{we}from"./chunk-b8h39019.js";import{OJe,xw}from"./chunk-p77kamv4.js";import{UPe}from"./chunk-9fyc9ba3.js";import{pr}from"./chunk-8m59mbsr.js";var Kmr="\x1B]8;;",Ymr="\x07";function Cw(e,r,t){let s=r===void 0?void 0:pr(r),n=s===void 0||Sas(e,s);if(!(n&&(t?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(OJe()??!0)||(t?.supportsHyperlinks??xw()))){let i=t?.shownUrlStart??"";if(r!==void 0&&!n)return`${r}${i} (${e})`;return`${i}${e}`}let o=(((t?.themeName)?UPe(t.themeName):!1)?we.blue:we.blueBright)(r??e);return`${Kmr}${e}${Ymr}${o}${Kmr}${Ymr}`}function Sas(e,r){return r===e||e===`http://${r}`||e===`https://${r}`}
export{Kmr,Ymr,Cw,Sas};
