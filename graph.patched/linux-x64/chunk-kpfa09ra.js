// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{J}from"./chunk-ad49p3yb.js";import{randomUUID as s}from"crypto";var m=256;function scn(e=s(),t){if(t!==void 0){let o=J().laneNoticeSlugs;o.set(e,t),r(o)}return e}function EMo(e){return J().laneNoticeSlugs.get(e)}function kMo(e,t,o){let n=J(),i=Date.now();if(e!==void 0)n.commentReads.set(e,{slug:t,ownWordsOnly:o}),r(n.commentReads);if(n.commentReadAtBySlug.delete(t),n.commentReadAtBySlug.set(t,i),r(n.commentReadAtBySlug)||!o)n.lastOthersCommentReadAt=i}function TMo(e){return J().commentReads.get(e)}function icn(e,t){for(let[o,n]of J().commentReadAtBySlug)if(o!==e&&!(Number.isFinite(t)&&n<t))return!0;return!1}function acn(){return J().lastOthersCommentReadAt}function r(e){if(e.size<=m)return!1;let t=e.keys().next().value;if(t!==void 0)e.delete(t);return!0}
export{scn,EMo,kMo,TMo,icn,acn};
