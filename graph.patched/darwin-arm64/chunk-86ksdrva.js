// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{a}from"./chunk-k4g6y57j.js";import{h$n,rj,VQt}from"./chunk-vds4wvdn.js";import{wB,iJr,aJr,HO}from"./chunk-d7y94enr.js";function j_e(){return wB().cachedSystemTheme()??s()??"dark"}function zrs(){return wB().cachedSystemTheme()??s()}function $Rn(){return wB().cachedSystemTheme()}function R3t(e){wB().setSystemTheme(e)}function CCt(e){return wB().onSystemThemeChange(e)}function x3t(e){if(e==="auto")return j_e();if(h$n(e))return e;let t=HO(e);return t&&iJr(t)||"dark"}function tqe(e){let t=rj(x3t(e)),n=HO(e);if(!n)return t;return VQt(t,aJr(n)?.overrides)}function Vrs(e){let t=i(e);if(!t)return;return 0.2126*t.r+0.7152*t.g+0.0722*t.b>0.5?"light":"dark"}function i(e){let t=/^rgba?:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})/i.exec(e);if(t)return{r:m(t[1]),g:m(t[2]),b:m(t[3])};let n=/^#([0-9a-f]+)$/i.exec(e);if(n&&n[1].length%3===0){let r=n[1],o=r.length/3;return{r:m(r.slice(0,o)),g:m(r.slice(o,2*o)),b:m(r.slice(2*o))}}return}function m(e){let t=16**e.length-1;return parseInt(e,16)/t}function s(){let e=a.COLORFGBG;if(!e)return;let n=e.split(";").at(-1);if(n===void 0||n==="")return;let r=Number(n);if(!Number.isInteger(r)||r<0||r>15)return;return r<=6||r===8?"dark":"light"}
export{j_e,zrs,$Rn,R3t,CCt,x3t,tqe,Vrs};
