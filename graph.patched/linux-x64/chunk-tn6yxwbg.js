// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{i6,Et}from"./chunk-pjehsasc.js";import{c}from"./chunk-ztxp0r5w.js";import{t}from"./chunk-ray9kegj.js";import{yE}from"./chunk-6816fcvc.js";function P6e(e){if(!i6(e))return!1;if(Et(e))return!0;return/^[A-Za-z0-9][A-Za-z0-9_]*$/.test(e)&&yE(e)!==void 0}function TFr(e,o={}){return o.acceptCustomIds?i6(e):P6e(e)}function Urt(e,o,n={}){if(o)return{adoptedSessionId:null,effectiveFork:!0};if(e===void 0)return{adoptedSessionId:null,effectiveFork:!1};if(TFr(e,n))return{adoptedSessionId:e,effectiveFork:!1};return t(`resume: transcript session id (${typeof e}) rejected by the adoption gate; continuing as a fork under the fresh session id`),c("session_resume","unadoptable_session_id"),{adoptedSessionId:null,effectiveFork:!0}}
export{P6e,TFr,Urt};
