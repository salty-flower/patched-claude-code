// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{d}from"./chunk-76anb6yt.js";import{Ft,Sxe}from"./chunk-c0aaqg7t.js";import{hi}from"./chunk-mwe8pp44.js";var r=5000;function NBr(e,t,o,a){let s={sentAhead:!1,flagSource:t,negotiationDenylisted:o,listed:a,listChangedBeforeHandler:!1,handlerRegistered:!1};return Ft().toolsListAhead.set(e,s),s}function QWo(e,t,o){e.page=t,e.pageSentAtMs=o}function ZWo(e){if(e.page!==void 0)e.expiry=setTimeout(n,r,e),e.expiry.unref?.()}function FBr(e){n(e)}function eGo(e){let t=Ft().toolsListAhead.get(e);if(t?.page===void 0||t.pageSentAtMs===void 0)return;let o={page:t.page,sentAtMs:t.pageSentAtMs};return n(t),o}function tGo(e,t){try{let o=Ft().toolsListAhead.get(e);if(o!==void 0&&o.firstPageMark===void 0)o.firstPageMark=Sxe(t)??"unmarked"}catch{}}function nGo(e,t){let o=Ft().toolsListAhead.get(e);if(o!==void 0)o.earlyAnswer=t}function $Br(e){let t=Ft().toolsListAhead.get(e);if(t===void 0)return;if(n(t),t.sentAhead&&!t.handlerRegistered)t.listChangedBeforeHandler=!0}function rGo(e){let t=Ft().toolsListAhead.get(e);if(t===void 0)return!1;t.handlerRegistered=!0;let o=t.listChangedBeforeHandler;return t.listChangedBeforeHandler=!1,o}function zht(e){if(e===void 0)return{};return{toolsListAhead:e.sentAhead,toolsListAheadListed:e.listed,toolsListAheadFlagSource:d(e.flagSource),...e.earlyAnswer!==void 0&&{toolsListAheadEarlyAnswer:d(e.earlyAnswer)},...e.firstPageMark!==void 0&&{toolsListFirstPageMark:d(e.firstPageMark)}}}function oGo(e){let t=Ft().toolsListAhead.get(hi(e.client));return t===void 0?{}:{...zht(t),negotiationDenylisted:t.negotiationDenylisted}}function n(e){clearTimeout(e.expiry),e.page=void 0,e.pageSentAtMs=void 0,e.expiry=void 0}
export{NBr,QWo,ZWo,FBr,eGo,tGo,nGo,$Br,rGo,zht,oGo};
