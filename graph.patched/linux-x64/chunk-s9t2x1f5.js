// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Ur}from"./chunk-r71h3n7n.js";import{QG,D0e,Bj}from"./chunk-vk00drv7.js";function hNo(o,e,r){Ur().bundledWorkflows.push({source:"built-in",...e,script:o,disableModelInvocation:r?.disableModelInvocation})}function p$t(){if(QG())return[];let o=Ur().bundledWorkflows;if(D0e())return o.filter((e)=>!Bj(e.name));return o}
export{hNo,p$t};
