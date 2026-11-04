// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Up}from"./chunk-ycp5r4r6.js";var a=120000,s=600000;function jG(n=process.env){let e=n.BASH_DEFAULT_TIMEOUT_MS;if(e){let t=Up(e);if(!isNaN(t)&&t>0)return t}return a}function nY(n=process.env){let e=n.BASH_MAX_TIMEOUT_MS;if(e){let t=Up(e);if(!isNaN(t)&&t>0)return Math.max(t,jG(n))}return Math.max(s,jG(n))}var _Ai=1800000,Zoo=7200000;function SAi(n){return Math.min(Math.max(n,nY()),2147483647)}function bAi(n,e){return Math.max(n,jG(e))}function wct(n,e){return n!==void 0&&n>0?e:void 0}var i=2000;function whr({requestedTimeoutMs:n,isMainAgent:e,canAutoBackground:t,subagentCapMs:o=0,env:u=process.env}){if(!t)return n;let r=e?Up(u.CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS):o;if(isNaN(r)||r<=0)return n;return Math.min(n,Math.max(r,i))}
export{jG,nY,_Ai,Zoo,SAi,bAi,wct,whr};
