// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{c}from"./chunk-ydpbzmt4.js";import{INe}from"./chunk-hdf6qbgr.js";import{xt}from"./chunk-fewhvqt5.js";import{Yi}from"./chunk-e76vd23z.js";var i=5000;function USo(e,o,t,a){let s={sentAhead:!1,flagSource:o,negotiationDenylisted:t,listed:a,listChangedBeforeHandler:!1,handlerRegistered:!1};return xt().toolsListAhead.set(e,s),s}function bRs(e,o,t){e.page=o,e.pageSentAtMs=t}function wRs(e){if(e.page!==void 0)e.expiry=setTimeout(n,i,e),e.expiry.unref?.()}function BSo(e){n(e)}function ERs(e){let o=xt().toolsListAhead.get(e);if(o?.page===void 0||o.pageSentAtMs===void 0)return;let t={page:o.page,sentAtMs:o.pageSentAtMs};return n(o),t}function vRs(e,o){try{let t=xt().toolsListAhead.get(e);if(t!==void 0&&t.firstPageMark===void 0)t.firstPageMark=INe(o)??"unmarked"}catch{}}function kRs(e,o){let t=xt().toolsListAhead.get(e);if(t!==void 0)t.earlyAnswer=o}function jSo(e){let o=xt().toolsListAhead.get(e);if(o===void 0)return;if(n(o),o.sentAhead&&!o.handlerRegistered)o.listChangedBeforeHandler=!0}function CRs(e){let o=xt().toolsListAhead.get(e);if(o===void 0)return!1;o.handlerRegistered=!0;let t=o.listChangedBeforeHandler;return o.listChangedBeforeHandler=!1,t}function j0t(e){if(e===void 0)return{};return{toolsListAhead:e.sentAhead,toolsListAheadListed:e.listed,...e.flagSource!==void 0&&{toolsListAheadFlagSource:c(e.flagSource)},...e.earlyAnswer!==void 0&&{toolsListAheadEarlyAnswer:c(e.earlyAnswer)},...e.firstPageMark!==void 0&&{toolsListFirstPageMark:c(e.firstPageMark)}}}function TRs(e){let o=xt().toolsListAhead.get(Yi(e.client));return o===void 0?{}:{...j0t(o),negotiationDenylisted:o.negotiationDenylisted}}function n(e){clearTimeout(e.expiry),e.page=void 0,e.pageSentAtMs=void 0,e.expiry=void 0}
export{USo,bRs,wRs,BSo,ERs,vRs,kRs,jSo,CRs,j0t,TRs};
