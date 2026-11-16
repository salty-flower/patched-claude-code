// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{qp}from"./chunk-fn5hkvxe.js";var a=120000,s=600000;function hK(n=process.env){let e=n.BASH_DEFAULT_TIMEOUT_MS;if(e){let t=qp(e);if(!isNaN(t)&&t>0)return t}return a}function bQ(n=process.env){let e=n.BASH_MAX_TIMEOUT_MS;if(e){let t=qp(e);if(!isNaN(t)&&t>0)return Math.max(t,hK(n))}return Math.max(s,hK(n))}var Jna=1800000,rRo=7200000;function Qna(n){return Math.min(Math.max(n,bQ()),2147483647)}function Zna(n,e){return Math.max(n,hK(e))}function SSt(n,e){return n!==void 0&&n>0?e:void 0}var i=2000;function tDr({requestedTimeoutMs:n,isMainAgent:e,canAutoBackground:t,subagentCapMs:o=0,env:u=process.env}){if(!t)return n;let r=e?qp(u.CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS):o;if(isNaN(r)||r<=0)return n;return Math.min(n,Math.max(r,i))}
export{hK,bQ,Jna,rRo,Qna,Zna,SSt,tDr};
