// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{c}from"./chunk-m3epja3j.js";import{QHe}from"./chunk-65jn763j.js";import{Nt}from"./chunk-7gz0pfve.js";import{Li}from"./chunk-t22b5qx7.js";var r=5000;function Jao(e,t,o,a){let s={sentAhead:!1,flagSource:t,negotiationDenylisted:o,listed:a,listChangedBeforeHandler:!1,handlerRegistered:!1};return Nt().toolsListAhead.set(e,s),s}function Vfs(e,t,o){e.page=t,e.pageSentAtMs=o}function qfs(e){if(e.page!==void 0)e.expiry=setTimeout(n,r,e),e.expiry.unref?.()}function Qao(e){n(e)}function Yfs(e){let t=Nt().toolsListAhead.get(e);if(t?.page===void 0||t.pageSentAtMs===void 0)return;let o={page:t.page,sentAtMs:t.pageSentAtMs};return n(t),o}function Xfs(e,t){try{let o=Nt().toolsListAhead.get(e);if(o!==void 0&&o.firstPageMark===void 0)o.firstPageMark=QHe(t)??"unmarked"}catch{}}function Jfs(e,t){let o=Nt().toolsListAhead.get(e);if(o!==void 0)o.earlyAnswer=t}function Zao(e){let t=Nt().toolsListAhead.get(e);if(t===void 0)return;if(n(t),t.sentAhead&&!t.handlerRegistered)t.listChangedBeforeHandler=!0}function Qfs(e){let t=Nt().toolsListAhead.get(e);if(t===void 0)return!1;t.handlerRegistered=!0;let o=t.listChangedBeforeHandler;return t.listChangedBeforeHandler=!1,o}function URt(e){if(e===void 0)return{};return{toolsListAhead:e.sentAhead,toolsListAheadListed:e.listed,toolsListAheadFlagSource:c(e.flagSource),...e.earlyAnswer!==void 0&&{toolsListAheadEarlyAnswer:c(e.earlyAnswer)},...e.firstPageMark!==void 0&&{toolsListFirstPageMark:c(e.firstPageMark)}}}function Zfs(e){let t=Nt().toolsListAhead.get(Li(e.client));return t===void 0?{}:{...URt(t),negotiationDenylisted:t.negotiationDenylisted}}function n(e){clearTimeout(e.expiry),e.page=void 0,e.pageSentAtMs=void 0,e.expiry=void 0}
export{Jao,Vfs,qfs,Qao,Yfs,Xfs,Jfs,Zao,Qfs,URt,Zfs};
