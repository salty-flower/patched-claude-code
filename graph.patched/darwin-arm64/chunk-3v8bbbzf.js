// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{on}from"./chunk-5tst2jdh.js";var n="Claude Preview",r="Claude Browser",t=on(n),i=on(r),a=new Set([t,i]);function epe(e){return a.has(on(e))}function ogt(e,o){let s=`mcp__${on(e)}__${o}`;return{async checkPermissions(){return{behavior:"ask",message:`${e} requires permission.`,suggestions:[{type:"addRules",rules:[{toolName:s,ruleContent:void 0}],behavior:"allow",destination:"session"}],metadata:{command:{name:s,chrome:{hostHandlesOriginConsent:!0}}}}}}}
export{epe,ogt};
