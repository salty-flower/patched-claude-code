// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{$e,bs}from"./chunk-rs6p8dg3.js";import{hGo,Qc}from"./chunk-c61xdsy8.js";function i(n){return{parse:(e)=>n(u(e))}}function t(n){let e=n?.trim();return e?e:void 0}function u(n){return n===void 0?void 0:String(n)}var o=i(t),f=i((n)=>n),l=i((n)=>$e(n)),s=i((n)=>{if($e(n))return!0;if(bs(n))return!1;return}),a=d();function Xqs(n){if(typeof n==="boolean")return n?"1":"0";return String(n)}var H={str:()=>o,rawStr:()=>f,bool:()=>l,triBool:()=>s,int:(n)=>n?d(n):a,enum:(n)=>i((e)=>e!==void 0&&n.includes(e.trim())?e.trim():void 0)};function d(n){return i((e)=>{if(e===void 0)return;if(n?.digitsOnly&&!/^[+-]?\d+$/.test(e.trim()))return;if(n?.wholeValue&&!/^[+-]?\d+$/.test(e.trim())&&hGo(e.trim())===void 0)return;let r=Qc(e);if(!Number.isFinite(r))return;if(n?.min!==void 0&&r<n.min)return;if(n?.max!==void 0&&r>n.max)return;return r})}
export{Xqs,H};
