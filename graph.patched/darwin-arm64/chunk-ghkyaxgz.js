// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{sr}from"./chunk-v8gz5b0e.js";var n=new Set(["starting","running","resuming","adopted","crashed","working","blocked","done","stopped","failed","busy","shell","idle","waiting"]);function iJ(e){if(e===void 0)return;return sr(n.has(e)?e:"other")}var t=new Set(["cold","spare","adopted"]);function zXt(e){return typeof e==="string"&&t.has(e)?e:void 0}
export{iJ,zXt};
