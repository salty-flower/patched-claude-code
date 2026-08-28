// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{T,Pt,N}from"./chunk-5752v0zq.js";N();var n8t=()=>i,i=()=>{},d=()=>{return};function Ze(e,n){let s=T(null),u=()=>{if(!e)return;let t=e.getSnapshot();if(!n)return t;let o=s.current;if(o!==null&&o.snapshot===t&&o.select===n)return o.selected;let r=n(t);return s.current={snapshot:t,select:n,selected:r},r};return Pt(e?e.subscribe:n8t,e?u:d,e?u:d)}
export{n8t,Ze};
