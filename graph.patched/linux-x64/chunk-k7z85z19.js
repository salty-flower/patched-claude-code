// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ed}from"./chunk-bpkzpttw.js";var a=120000,i=600000;function lve(n=process.env){let e=n.BASH_DEFAULT_TIMEOUT_MS;if(e){let t=ed(e);if(!isNaN(t)&&t>0)return t}return a}function cve(n=process.env){let e=n.BASH_MAX_TIMEOUT_MS;if(e){let t=ed(e);if(!isNaN(t)&&t>0)return Math.max(t,lve(n))}return Math.max(i,lve(n))}var c7e=1800000;function Bse(){return Math.min(Math.max(7200000,cve()),2147483647)}function kYo(n){return Math.max(c7e,lve(n))}function Lvn(n,e){return n!==void 0&&n>0?e:void 0}var s=2000;function Nvn({requestedTimeoutMs:n,isMainAgent:e,canAutoBackground:t,env:u=process.env}){if(!e||!t)return n;let o=u.CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS;if(!o)return n;let r=ed(o);if(isNaN(r)||r<=0)return n;return Math.min(n,Math.max(r,s))}
export{lve,cve,c7e,Bse,kYo,Lvn,Nvn};
