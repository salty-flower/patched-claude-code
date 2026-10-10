// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
var uRe=["anthropic-skills"],xQt="anthropic-skills";function pRe(n){return n.startsWith("anthropic-skills:")?n:`anthropic-skills:${n}`}function TUn(n){return uRe.some((e)=>n.startsWith(`${e}:`))}function Jde(n){return/^[A-Za-z0-9._-]+$/.test(n)}function hIt(n){return Jde(n)&&n!=="."&&n!==".."}function gR(n){return n.startsWith("anthropic-skills:")?n.slice(17):n}function r(n){return n.userFacingName?.()??n.name}function SEs(n){if(n.loadedFrom!=="plugin")return[];let e=s(n.name)??s(r(n));if(e===void 0)return[];let i=n.name.slice(n.name.indexOf(":")+1);return[Lwr(`${e}:${e}`),e,...[...n.aliases??[],...n.shedAliases??[]].filter((t)=>t!==e).map((t)=>`anthropic-skills:${t}`),...i!==e&&!i.includes(":")?[`anthropic-skills:${i}`,i]:[]]}function s(n){let e=n.indexOf(":");if(e<=0)return;let i=n.slice(0,e),t=n.slice(e+1);return t===i&&!uRe.includes(i)?t:void 0}function Lwr(n){let e=s(n);if(e!==void 0)return`anthropic-skills:${e}`;if(!n.startsWith("anthropic-skills:"))return;let i=n.slice(17);return i&&!i.includes(":")?`${i}:${i}`:void 0}function bEs(n){if(n.loadedFrom!=="syncedSkills"&&n.loadedFrom!=="plugin"||!n.name.startsWith("anthropic-skills:"))return[];let e=n.name.slice(17),i=r(n),t=i.startsWith("anthropic-skills:")?i.slice(17):void 0;if(!e||e.includes(":"))return[];return[Lwr(n.name),...t!==void 0&&t!==e&&!t.includes(":")?[`${t}:${t}`,`${t}:${e}`,t]:[]]}
export{uRe,xQt,pRe,TUn,Jde,hIt,gR,SEs,Lwr,bEs};
