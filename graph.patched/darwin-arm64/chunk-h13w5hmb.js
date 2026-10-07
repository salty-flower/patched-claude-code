// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{a}from"./chunk-j77txbjn.js";import{uEn,S$,EGt}from"./chunk-nj97n3xc.js";import{NF,j0r,W0r,Ix}from"./chunk-4bagfyg7.js";function zde(){return NF().cachedSystemTheme()??s()??"dark"}function lHo(){return NF().cachedSystemTheme()??s()}function _cn(){return NF().cachedSystemTheme()}function ELt(e){NF().setSystemTheme(e)}function put(e){return NF().onSystemThemeChange(e)}function vLt(e){if(e==="auto")return zde();if(uEn(e))return e;let t=Ix(e);return t&&j0r(t)||"dark"}function l1e(e){let t=S$(vLt(e)),n=Ix(e);if(!n)return t;return EGt(t,W0r(n)?.overrides)}function cHo(e){let t=i(e);if(!t)return;return 0.2126*t.r+0.7152*t.g+0.0722*t.b>0.5?"light":"dark"}function i(e){let t=/^rgba?:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})/i.exec(e);if(t)return{r:m(t[1]),g:m(t[2]),b:m(t[3])};let n=/^#([0-9a-f]+)$/i.exec(e);if(n&&n[1].length%3===0){let r=n[1],o=r.length/3;return{r:m(r.slice(0,o)),g:m(r.slice(o,2*o)),b:m(r.slice(2*o))}}return}function m(e){let t=16**e.length-1;return parseInt(e,16)/t}function s(){let e=a.COLORFGBG;if(!e)return;let n=e.split(";").at(-1);if(n===void 0||n==="")return;let r=Number(n);if(!Number.isInteger(r)||r<0||r>15)return;return r<=6||r===8?"dark":"light"}
export{zde,lHo,_cn,ELt,put,vLt,l1e,cHo};
