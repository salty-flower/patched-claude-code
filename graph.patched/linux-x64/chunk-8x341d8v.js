// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{i}from"./chunk-5g5ea6r9.js";import{akn,ol,$S,Lf,bG}from"./chunk-acx2qgbr.js";import{on}from"./chunk-qyy7cp48.js";import{pAt}from"./chunk-a5a37ds7.js";function r(){if($S()||bG())return null;if(on()){let t=ol();if(t===void 0||!t.startsWith("remote")||akn.has(t))return null;return pAt()?null:"cloud"}if(i.CLAUDE_CODE_REMOTE)return null;return Lf()?"desktop":null}function N$r(){return i.CLAUDE_CODE_ARTIFACT_SHARE===!0&&r()!==null}
export{N$r};
