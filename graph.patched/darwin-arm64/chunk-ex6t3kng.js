// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ee}from"./chunk-m9wmj1k9.js";import{randomUUID as d}from"crypto";var m=256;function C$r(e=d(),n){if(n!==void 0){let t=ee().laneNoticeSlugs;t.set(e,n),i(t)}return e}function fpa(e){return ee().laneNoticeSlugs.get(e)}function ppa(e,n,t,r){let o=ee(),s=Date.now();if(e!==void 0)o.commentReads.set(e,{slug:n,ownWordsOnly:t,ownAccount:r}),i(o.commentReads);if(o.commentReadAtBySlug.delete(n),o.commentReadAtBySlug.set(n,s),i(o.commentReadAtBySlug)||!t)o.lastOthersCommentReadAt=s}function A$r(e){return ee().commentReads.get(e)}function R$r(e,n){for(let[t,r]of ee().commentReadAtBySlug)if(t!==e&&!(Number.isFinite(n)&&r<n))return!0;return!1}function x$r(){return ee().lastOthersCommentReadAt}function i(e){if(e.size<=m)return!1;let n=e.keys().next().value;if(n!==void 0)e.delete(n);return!0}
export{C$r,fpa,ppa,A$r,R$r,x$r};
