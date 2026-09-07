// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{a}from"./chunk-td8fcebs.js";import{xyt,kC,q8e}from"./chunk-jde10qxn.js";import{YT,Yon,Xon,BS}from"./chunk-qxrbp46d.js";function Z4(){return YT().cachedSystemTheme()??s()??"dark"}function Zjn(){return YT().cachedSystemTheme()??s()}function out(){return YT().cachedSystemTheme()}function sut(e){YT().setSystemTheme(e)}function zLe(e){return YT().onSystemThemeChange(e)}function cqe(e){if(e==="auto")return Z4();if(xyt(e))return e;let t=BS(e);return t&&Yon(t)||"dark"}function G6(e){let t=kC(cqe(e)),n=BS(e);if(!n)return t;return q8e(t,Xon(n)?.overrides)}function e2n(e){let t=i(e);if(!t)return;return 0.2126*t.r+0.7152*t.g+0.0722*t.b>0.5?"light":"dark"}function i(e){let t=/^rgba?:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})/i.exec(e);if(t)return{r:m(t[1]),g:m(t[2]),b:m(t[3])};let n=/^#([0-9a-f]+)$/i.exec(e);if(n&&n[1].length%3===0){let r=n[1],o=r.length/3;return{r:m(r.slice(0,o)),g:m(r.slice(o,2*o)),b:m(r.slice(2*o))}}return}function m(e){let t=16**e.length-1;return parseInt(e,16)/t}function s(){let e=a.COLORFGBG;if(!e)return;let n=e.split(";").at(-1);if(n===void 0||n==="")return;let r=Number(n);if(!Number.isInteger(r)||r<0||r>15)return;return r<=6||r===8?"dark":"light"}
export{Z4,Zjn,out,sut,zLe,cqe,G6,e2n};
