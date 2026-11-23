// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{qp}from"./chunk-15kz2sd4.js";var a=120000,s=600000;function y4(n=process.env){let e=n.BASH_DEFAULT_TIMEOUT_MS;if(e){let t=qp(e);if(!isNaN(t)&&t>0)return t}return a}function RQ(n=process.env){let e=n.BASH_MAX_TIMEOUT_MS;if(e){let t=qp(e);if(!isNaN(t)&&t>0)return Math.max(t,y4(n))}return Math.max(s,y4(n))}var Kra=1800000,xRo=7200000;function Yra(n){return Math.min(Math.max(n,RQ()),2147483647)}function Xra(n,e){return Math.max(n,y4(e))}function Rbt(n,e){return n!==void 0&&n>0?e:void 0}var i=2000;function IDr({requestedTimeoutMs:n,isMainAgent:e,canAutoBackground:t,subagentCapMs:o=0,env:u=process.env}){if(!t)return n;let r=e?qp(u.CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS):o;if(isNaN(r)||r<=0)return n;return Math.min(n,Math.max(r,i))}
export{y4,RQ,Kra,xRo,Yra,Xra,Rbt,IDr};
