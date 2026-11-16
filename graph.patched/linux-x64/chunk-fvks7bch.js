// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{or}from"./chunk-zt4gdxqw.js";var n=new Set(["starting","running","resuming","adopted","crashed","working","blocked","done","stopped","failed","busy","shell","idle","waiting"]);function JX(e){if(e===void 0)return;return or(n.has(e)?e:"other")}var t=new Set(["cold","spare","adopted"]);function LXt(e){return typeof e==="string"&&t.has(e)?e:void 0}
export{JX,LXt};
