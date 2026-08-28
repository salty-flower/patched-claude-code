// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{E4b as o,F4b as S,G4b as d,I4b as g,L4b as i,R4b as b}from"./_633.js";import{$4b as c,Z4b as h,b5b as f,d5b as y}from"./_634.js";import{bad as p}from"./_797.js";import{xad as u}from"./_798.js";import{Exd as T}from"./_839.js";function l(){return o().cachedSystemTheme()??a()??"dark"}function F(){return o().cachedSystemTheme()??a()}function B(){return o().cachedSystemTheme()}function M(e){o().setSystemTheme(e)}function G(e){return o().onSystemThemeChange(e)}function x(e){if(e==="auto")return l();if(h(e))return e;let t=i(e);return t&&d(t)||"dark"}function I(e){let t=c(x(e)),n=i(e);if(!n)return t;return f(t,g(n)?.overrides)}function L(e){let t=C(e);if(!t)return;return 0.2126*t.r+0.7152*t.g+0.0722*t.b>0.5?"light":"dark"}function C(e){let t=/^rgba?:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})/i.exec(e);if(t)return{r:m(t[1]),g:m(t[2]),b:m(t[3])};let n=/^#([0-9a-f]+)$/i.exec(e);if(n&&n[1].length%3===0){let r=n[1],s=r.length/3;return{r:m(r.slice(0,s)),g:m(r.slice(s,2*s)),b:m(r.slice(2*s))}}return}function m(e){let t=16**e.length-1;return parseInt(e,16)/t}function a(){let e=u.COLORFGBG;if(!e)return;let n=e.split(";").at(-1);if(n===void 0||n==="")return;let r=Number(n);if(!Number.isInteger(r)||r<0||r>15)return;return r<=6||r===8?"dark":"light"}var v=T(()=>{b();p();y();S()});
export{l as t4b,F as u4b,B as v4b,M as w4b,G as x4b,x as y4b,I as z4b,L as A4b,v as B4b};
