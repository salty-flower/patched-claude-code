// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{i}from"./chunk-9a41hw1t.js";import{_4n,I2,Udn}from"./chunk-tkrm3286.js";import{r2,Ngo,Fgo,g0}from"./chunk-7pm5bpdr.js";function WEe(){return r2().cachedSystemTheme()??s()??"dark"}function KCs(){return r2().cachedSystemTheme()??s()}function gFn(){return r2().cachedSystemTheme()}function eZt(e){r2().setSystemTheme(e)}function LMt(e){return r2().onSystemThemeChange(e)}function tZt(e){if(e==="auto")return WEe();if(_4n(e))return e;let t=g0(e);return t&&Ngo(t)||"dark"}function _8e(e){let t=I2(tZt(e)),n=g0(e);if(!n)return t;return Udn(t,Fgo(n)?.overrides)}function qCs(e){let t=u(e);if(!t)return;return 0.2126*t.r+0.7152*t.g+0.0722*t.b>0.5?"light":"dark"}function u(e){let t=/^rgba?:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})/i.exec(e);if(t)return{r:m(t[1]),g:m(t[2]),b:m(t[3])};let n=/^#([0-9a-f]+)$/i.exec(e);if(n&&n[1].length%3===0){let r=n[1],o=r.length/3;return{r:m(r.slice(0,o)),g:m(r.slice(o,2*o)),b:m(r.slice(2*o))}}return}function m(e){let t=16**e.length-1;return parseInt(e,16)/t}function s(){let e=i.COLORFGBG;if(!e)return;let n=e.split(";").at(-1);if(n===void 0||n==="")return;let r=Number(n);if(!Number.isInteger(r)||r<0||r>15)return;return r<=6||r===8?"dark":"light"}
export{WEe,KCs,gFn,eZt,LMt,tZt,_8e,qCs};
