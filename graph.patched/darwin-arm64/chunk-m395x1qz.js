// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{mq,kt}from"./chunk-28n1q6sq.js";import{c}from"./chunk-f8g4f3e3.js";import{t}from"./chunk-bdfv2ky4.js";import{wk}from"./chunk-s0ve5p66.js";function Vqe(e){if(!mq(e))return!1;if(kt(e))return!0;return/^[A-Za-z0-9][A-Za-z0-9_]*$/.test(e)&&wk(e)!==void 0}function q1r(e,o={}){return o.acceptCustomIds?mq(e):Vqe(e)}function aot(e,o,n={}){if(o)return{adoptedSessionId:null,effectiveFork:!0};if(e===void 0)return{adoptedSessionId:null,effectiveFork:!1};if(q1r(e,n))return{adoptedSessionId:e,effectiveFork:!1};return t(`resume: transcript session id (${typeof e}) rejected by the adoption gate; continuing as a fork under the fresh session id`),c("session_resume","unadoptable_session_id"),{adoptedSessionId:null,effectiveFork:!0}}
export{Vqe,q1r,aot};
