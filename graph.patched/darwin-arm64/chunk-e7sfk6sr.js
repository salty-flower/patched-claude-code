// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
var OHe=["anthropic-skills"],A3t="anthropic-skills";function Itt(n){return n.startsWith("anthropic-skills:")?n:`anthropic-skills:${n}`}function Jxn(n){return OHe.some((e)=>n.startsWith(`${e}:`))}function wvt(n){return/^[A-Za-z0-9._-]+$/.test(n)}function pN(n){return n.startsWith("anthropic-skills:")?n.slice(17):n}function r(n){return n.userFacingName?.()??n.name}function Lts(n){if(n.loadedFrom!=="plugin")return[];let e=s(n.name)??s(r(n));if(e===void 0)return[];let i=n.name.slice(n.name.indexOf(":")+1);return[zlr(`${e}:${e}`),e,...[...n.aliases??[],...n.shedAliases??[]].filter((t)=>t!==e).map((t)=>`anthropic-skills:${t}`),...i!==e&&!i.includes(":")?[`anthropic-skills:${i}`,i]:[]]}function s(n){let e=n.indexOf(":");if(e<=0)return;let i=n.slice(0,e),t=n.slice(e+1);return t===i&&!OHe.includes(i)?t:void 0}function zlr(n){let e=s(n);if(e!==void 0)return`anthropic-skills:${e}`;if(!n.startsWith("anthropic-skills:"))return;let i=n.slice(17);return i&&!i.includes(":")?`${i}:${i}`:void 0}function Nts(n){if(n.loadedFrom!=="syncedSkills"&&n.loadedFrom!=="plugin"||!n.name.startsWith("anthropic-skills:"))return[];let e=n.name.slice(17),i=r(n),t=i.startsWith("anthropic-skills:")?i.slice(17):void 0;if(!e||e.includes(":"))return[];return[zlr(n.name),...t!==void 0&&t!==e&&!t.includes(":")?[`${t}:${t}`,`${t}:${e}`,t]:[]]}
export{OHe,A3t,Itt,Jxn,wvt,pN,Lts,zlr,Nts};
