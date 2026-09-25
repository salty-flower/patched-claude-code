// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Xc}from"./chunk-hn35vsf8.js";var $gt="usage limit",mjt=` (after ${$gt})`;function rXn(e,t=!1){let r=Xc(e,t);if(r===void 0)return;return/^\d/.test(r)?`resets at ${r}`:`resets ${r}`}function n(e){let t=rXn(e);return t===void 0?$gt:`${$gt} ${t}`}function Zzr(e){return`Paused \xB7 ${n(e)}`}function oXn(e){return[["paused",n(e)],["paused",$gt],["paused"]]}
export{$gt,mjt,rXn,Zzr,oXn};
