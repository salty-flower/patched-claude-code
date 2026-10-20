// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{c}from"./chunk-ny2cqbmq.js";import{sHe}from"./chunk-gn7avpe5.js";import{Nt}from"./chunk-prq01t47.js";import{Li}from"./chunk-c2tga6bg.js";var r=5000;function Tlo(e,t,o,a){let s={sentAhead:!1,flagSource:t,negotiationDenylisted:o,listed:a,listChangedBeforeHandler:!1,handlerRegistered:!1};return Nt().toolsListAhead.set(e,s),s}function Oms(e,t,o){e.page=t,e.pageSentAtMs=o}function Mms(e){if(e.page!==void 0)e.expiry=setTimeout(n,r,e),e.expiry.unref?.()}function Alo(e){n(e)}function Hms(e){let t=Nt().toolsListAhead.get(e);if(t?.page===void 0||t.pageSentAtMs===void 0)return;let o={page:t.page,sentAtMs:t.pageSentAtMs};return n(t),o}function Dms(e,t){try{let o=Nt().toolsListAhead.get(e);if(o!==void 0&&o.firstPageMark===void 0)o.firstPageMark=sHe(t)??"unmarked"}catch{}}function Lms(e,t){let o=Nt().toolsListAhead.get(e);if(o!==void 0)o.earlyAnswer=t}function Rlo(e){let t=Nt().toolsListAhead.get(e);if(t===void 0)return;if(n(t),t.sentAhead&&!t.handlerRegistered)t.listChangedBeforeHandler=!0}function Nms(e){let t=Nt().toolsListAhead.get(e);if(t===void 0)return!1;t.handlerRegistered=!0;let o=t.listChangedBeforeHandler;return t.listChangedBeforeHandler=!1,o}function JRt(e){if(e===void 0)return{};return{toolsListAhead:e.sentAhead,toolsListAheadListed:e.listed,toolsListAheadFlagSource:c(e.flagSource),...e.earlyAnswer!==void 0&&{toolsListAheadEarlyAnswer:c(e.earlyAnswer)},...e.firstPageMark!==void 0&&{toolsListFirstPageMark:c(e.firstPageMark)}}}function Fms(e){let t=Nt().toolsListAhead.get(Li(e.client));return t===void 0?{}:{...JRt(t),negotiationDenylisted:t.negotiationDenylisted}}function n(e){clearTimeout(e.expiry),e.page=void 0,e.pageSentAtMs=void 0,e.expiry=void 0}
export{Tlo,Oms,Mms,Alo,Hms,Dms,Lms,Rlo,Nms,JRt,Fms};
