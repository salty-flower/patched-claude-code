// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{fn}from"./chunk-n5v91jc3.js";import{he}from"./chunk-psz375zg.js";import{yNe,Hv}from"./chunk-3vrcavxw.js";import{e9e}from"./chunk-pc8y5w4b.js";var XCn="\x1B]8;;",JCn="\x07";function tv(e,r,t){let s=r===void 0?void 0:fn(r),n=s===void 0||P7r(e,s);if(!(n&&(t?.assumeSupport??!1)&&process.stdout.isTTY===!0&&(yNe()??!0)||(t?.supportsHyperlinks??Hv()))){let i=t?.shownUrlStart??"";if(r!==void 0&&!n)return`${r}${i} (${e})`;return`${i}${e}`}let o=(((t?.themeName)?e9e(t.themeName):!1)?he.blue:he.blueBright)(r??e);return`${XCn}${e}${JCn}${o}${XCn}${JCn}`}function P7r(e,r){return r===e||e===`http://${r}`||e===`https://${r}`}
export{XCn,JCn,tv,P7r};
