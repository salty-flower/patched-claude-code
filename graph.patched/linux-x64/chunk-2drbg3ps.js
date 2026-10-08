// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{E3t,HK}from"./chunk-hxnfcf28.js";function TUt(){let t={default:void 0,byModel:{}};for(let{settings:o}of E3t()){let e={};for(let[d,u]of Object.entries(o.modelSettings??{})){let i=u?.autoCompactWindow;if(i===void 0)continue;let n=HK(d);if(d===n||!Object.hasOwn(e,n))e[n]=i}t=o.autoCompactWindow===void 0?{default:t.default,byModel:{...t.byModel,...e}}:{default:o.autoCompactWindow,byModel:e}}return t}function f1o(t){if(t===void 0)return TUt();return t==="auto"?void 0:t}
export{TUt,f1o};
