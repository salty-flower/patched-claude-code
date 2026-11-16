// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import"./chunk-0630jpxx.js";import{_Lo,kzs}from"./chunk-em74v3bz.js";var d=/<\/(?:body|html)[\t\n\f\r />]/i;function m(n){if(!d.test(n))return n.length;let e=-1,o=()=>{e=-1},r=()=>{},{tokenizer:a,overBudget:c}=kzs({sourceCodeLocationInfo:!0},{onStartTag(t){let i=_Lo.get(t.tagName);if(i!==void 0)a.state=i,a.lastStartTagName=t.tagName;if(t.tagName!=="html")o()},onEndTag(t){if(t.tagName!=="body"&&t.tagName!=="html")o();else if(e<0&&t.location)e=t.location.startOffset},onComment:r,onDoctype:r,onCharacter:o,onNullCharacter:o,onWhitespaceCharacter:r,onEof:r});if(a.write(n,!0),c())return;return e>=0?e:n.length}export{m as runtimeBlockInsertionIndex};
