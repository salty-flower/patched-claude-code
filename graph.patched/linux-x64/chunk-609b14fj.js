// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{a}from"./chunk-xwn0mfnc.js";import{J$n,K1,I7t}from"./chunk-hyqn7bn1.js";import{u1,IJr,OJr,PO}from"./chunk-n217j7wt.js";function L_e(){return u1().cachedSystemTheme()??s()??"dark"}function irs(){return u1().cachedSystemTheme()??s()}function yRn(){return u1().cachedSystemTheme()}function mYt(e){u1().setSystemTheme(e)}function mTt(e){return u1().onSystemThemeChange(e)}function gYt(e){if(e==="auto")return L_e();if(J$n(e))return e;let t=PO(e);return t&&IJr(t)||"dark"}function VKe(e){let t=K1(gYt(e)),n=PO(e);if(!n)return t;return I7t(t,OJr(n)?.overrides)}function ars(e){let t=i(e);if(!t)return;return 0.2126*t.r+0.7152*t.g+0.0722*t.b>0.5?"light":"dark"}function i(e){let t=/^rgba?:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})/i.exec(e);if(t)return{r:m(t[1]),g:m(t[2]),b:m(t[3])};let n=/^#([0-9a-f]+)$/i.exec(e);if(n&&n[1].length%3===0){let r=n[1],o=r.length/3;return{r:m(r.slice(0,o)),g:m(r.slice(o,2*o)),b:m(r.slice(2*o))}}return}function m(e){let t=16**e.length-1;return parseInt(e,16)/t}function s(){let e=a.COLORFGBG;if(!e)return;let n=e.split(";").at(-1);if(n===void 0||n==="")return;let r=Number(n);if(!Number.isInteger(r)||r<0||r>15)return;return r<=6||r===8?"dark":"light"}
export{L_e,irs,yRn,mYt,mTt,gYt,VKe,ars};
