// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Se}from"./chunk-jkwva1zz.js";import{cqe,fb}from"./chunk-73ksqrq0.js";import{Gdt}from"./chunk-mybh8kvq.js";import{Kn}from"./chunk-ftfajy6t.js";var B8n="\x1B]8;;",j8n="\x07";function pb(e,r,t){let s=r===void 0?void 0:Kn(r),n=s===void 0||r1o(e,s);if(!(n&&(t?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(cqe()??!0)||(t?.supportsHyperlinks??fb()))){let i=t?.shownUrlStart??"";if(r!==void 0&&!n)return`${r}${i} (${e})`;return`${i}${e}`}let o=(((t?.themeName)?Gdt(t.themeName):!1)?Se.blue:Se.blueBright)(r??e);return`${B8n}${e}${j8n}${o}${B8n}${j8n}`}function r1o(e,r){return r===e||e===`http://${r}`||e===`https://${r}`}
export{B8n,j8n,pb,r1o};
