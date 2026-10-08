// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Xu}from"./chunk-d9jpb7es.js";var kFt="usage limit",uun=` (after ${kFt})`;function XLr(e,t=!1){let r=Xu(e,t);if(r===void 0)return;return/^\d/.test(r)?`resets at ${r}`:`resets ${r}`}function n(e){let t=XLr(e);return t===void 0?kFt:`${kFt} ${t}`}function YNo(e){return`Paused \xB7 ${n(e)}`}function JLr(e){return[["paused",n(e)],["paused",kFt],["paused"]]}
export{kFt,uun,XLr,YNo,JLr};
