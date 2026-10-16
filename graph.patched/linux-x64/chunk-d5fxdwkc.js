// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{c}from"./chunk-fr28a3he.js";import{Nt,EMe}from"./chunk-zkbf0zdp.js";import{Ei}from"./chunk-wsz0c674.js";var r=5000;function n3r(e,t,o,a){let s={sentAhead:!1,flagSource:t,negotiationDenylisted:o,listed:a,listChangedBeforeHandler:!1,handlerRegistered:!1};return Nt().toolsListAhead.set(e,s),s}function LQo(e,t,o){e.page=t,e.pageSentAtMs=o}function NQo(e){if(e.page!==void 0)e.expiry=setTimeout(n,r,e),e.expiry.unref?.()}function r3r(e){n(e)}function $Qo(e){let t=Nt().toolsListAhead.get(e);if(t?.page===void 0||t.pageSentAtMs===void 0)return;let o={page:t.page,sentAtMs:t.pageSentAtMs};return n(t),o}function FQo(e,t){try{let o=Nt().toolsListAhead.get(e);if(o!==void 0&&o.firstPageMark===void 0)o.firstPageMark=EMe(t)??"unmarked"}catch{}}function UQo(e,t){let o=Nt().toolsListAhead.get(e);if(o!==void 0)o.earlyAnswer=t}function o3r(e){let t=Nt().toolsListAhead.get(e);if(t===void 0)return;if(n(t),t.sentAhead&&!t.handlerRegistered)t.listChangedBeforeHandler=!0}function BQo(e){let t=Nt().toolsListAhead.get(e);if(t===void 0)return!1;t.handlerRegistered=!0;let o=t.listChangedBeforeHandler;return t.listChangedBeforeHandler=!1,o}function kEt(e){if(e===void 0)return{};return{toolsListAhead:e.sentAhead,toolsListAheadListed:e.listed,toolsListAheadFlagSource:c(e.flagSource),...e.earlyAnswer!==void 0&&{toolsListAheadEarlyAnswer:c(e.earlyAnswer)},...e.firstPageMark!==void 0&&{toolsListFirstPageMark:c(e.firstPageMark)}}}function jQo(e){let t=Nt().toolsListAhead.get(Ei(e.client));return t===void 0?{}:{...kEt(t),negotiationDenylisted:t.negotiationDenylisted}}function n(e){clearTimeout(e.expiry),e.page=void 0,e.pageSentAtMs=void 0,e.expiry=void 0}
export{n3r,LQo,NQo,r3r,$Qo,FQo,UQo,o3r,BQo,kEt,jQo};
