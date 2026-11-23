// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{i}from"./chunk-428zme0n.js";import{Evn,ol,Ub,Hf,w6}from"./chunk-gg7nabmz.js";import{on}from"./chunk-yzwcdz1k.js";import{yCt}from"./chunk-e44qnbvj.js";function r(){if(Ub()||w6())return null;if(on()){let t=ol();if(t===void 0||!t.startsWith("remote")||Evn.has(t))return null;return yCt()?null:"cloud"}if(i.CLAUDE_CODE_REMOTE)return null;return Hf()?"desktop":null}function l$r(){return i.CLAUDE_CODE_ARTIFACT_SHARE===!0&&r()!==null}
export{l$r};
