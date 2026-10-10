// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{RA}from"./chunk-7ybfysmf.js";var njt="usage limit",Ohn=` (after ${njt})`;function Djr(e,t=!1){let r=RA(e,t);if(r===void 0)return;return/^\d/.test(r)?`resets at ${r}`:`resets ${r}`}function n(e){let t=Djr(e);return t===void 0?njt:`${njt} ${t}`}function ozo(e){return`Paused \xB7 ${n(e)}`}function Ljr(e){return[["paused",n(e)],["paused",njt],["paused"]]}
export{njt,Ohn,Djr,ozo,Ljr};
