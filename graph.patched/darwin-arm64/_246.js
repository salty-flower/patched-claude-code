// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{pbb as l,qbb as f,rbb as y}from"./_488.js";import{Y4b as a,d5b as h}from"./_634.js";import{Gzc as i,Jzc as d}from"./_685.js";import{$6c as k,_6c as u}from"./_781.js";import{Exd as m}from"./_839.js";function A(e,r,t){let s=r===void 0?void 0:u(r),n=s===void 0||s===e||e===`http://${s}`||e===`https://${s}`;if(!(n&&(t?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(l()??!0)||(t?.supportsHyperlinks??f()))){if(r!==void 0&&!n)return`${r} (${e})`;return e}let c=(((t?.themeName)?a(t.themeName):!1)?i.blue:i.blueBright)(r??e);return`${o}${e}${p}${c}${o}${p}`}var o="\x1B]8;;",p="\x07";var q=m(()=>{d();k();y();h()});
export{A as Bz,q as Cz};
