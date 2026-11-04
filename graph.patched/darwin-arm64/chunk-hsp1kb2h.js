// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{i}from"./chunk-n1cpnz94.js";import{lCo,zu,_C,kf,lte}from"./chunk-3e6pdcy8.js";import{on}from"./chunk-z77crbrb.js";import{Omt}from"./chunk-axsjfnwn.js";function r(){if(_C()||lte())return null;if(on()){let t=zu();if(t===void 0||!t.startsWith("remote")||lCo.has(t))return null;return Omt()?null:"cloud"}if(i.CLAUDE_CODE_REMOTE)return null;return kf()?"desktop":null}function mrr(){return i.CLAUDE_CODE_ARTIFACT_SHARE===!0&&r()!==null}
export{mrr};
