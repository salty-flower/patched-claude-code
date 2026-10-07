// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{td}from"./chunk-xbg4a11x.js";var a=120000,i=600000;function mEe(n=process.env){let e=n.BASH_DEFAULT_TIMEOUT_MS;if(e){let t=td(e);if(!isNaN(t)&&t>0)return t}return a}function gEe(n=process.env){let e=n.BASH_MAX_TIMEOUT_MS;if(e){let t=td(e);if(!isNaN(t)&&t>0)return Math.max(t,mEe(n))}return Math.max(i,mEe(n))}var yQe=1800000;function qse(){return Math.min(Math.max(7200000,gEe()),2147483647)}function l9o(n){return Math.max(yQe,mEe(n))}function evn(n,e){return n!==void 0&&n>0?e:void 0}var s=2000;function tvn({requestedTimeoutMs:n,isMainAgent:e,canAutoBackground:t,env:u=process.env}){if(!e||!t)return n;let o=u.CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS;if(!o)return n;let r=td(o);if(isNaN(r)||r<=0)return n;return Math.min(n,Math.max(r,s))}
export{mEe,gEe,yQe,qse,l9o,evn,tvn};
