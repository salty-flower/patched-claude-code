// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{a}from"./chunk-bn8q5mbz.js";import{oft,A0,oze}from"./chunk-sjhv2w8k.js";import{zA,bZt,SZt,t_}from"./chunk-a0k0dnnh.js";function i9(){return zA().cachedSystemTheme()??s()??"dark"}function SNn(){return zA().cachedSystemTheme()??s()}function Qot(){return zA().cachedSystemTheme()}function Zot(e){zA().setSystemTheme(e)}function Ike(e){return zA().onSystemThemeChange(e)}function H6e(e){if(e==="auto")return i9();if(oft(e))return e;let t=t_(e);return t&&bZt(t)||"dark"}function s9(e){let t=A0(H6e(e)),n=t_(e);if(!n)return t;return oze(t,SZt(n)?.overrides)}function vNn(e){let t=i(e);if(!t)return;return 0.2126*t.r+0.7152*t.g+0.0722*t.b>0.5?"light":"dark"}function i(e){let t=/^rgba?:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})/i.exec(e);if(t)return{r:m(t[1]),g:m(t[2]),b:m(t[3])};let n=/^#([0-9a-f]+)$/i.exec(e);if(n&&n[1].length%3===0){let r=n[1],o=r.length/3;return{r:m(r.slice(0,o)),g:m(r.slice(o,2*o)),b:m(r.slice(2*o))}}return}function m(e){let t=16**e.length-1;return parseInt(e,16)/t}function s(){let e=a.COLORFGBG;if(!e)return;let n=e.split(";").at(-1);if(n===void 0||n==="")return;let r=Number(n);if(!Number.isInteger(r)||r<0||r>15)return;return r<=6||r===8?"dark":"light"}
export{i9,SNn,Qot,Zot,Ike,H6e,s9,vNn};
