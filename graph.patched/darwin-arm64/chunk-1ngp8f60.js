// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{_6,Ut}from"./chunk-d50ak5jt.js";import{c}from"./chunk-ad5ya8vz.js";import{t}from"./chunk-5nh49npx.js";import{fT}from"./chunk-km6bp290.js";function KMt(e){if(!_6(e))return!1;if(Ut(e))return!0;return/^[A-Za-z0-9][A-Za-z0-9_]*$/.test(e)&&fT(e)!==void 0}function $Sr(e,o={}){return o.acceptCustomIds?_6(e):KMt(e)}function XYe(e,o,n={}){if(o)return{adoptedSessionId:null,effectiveFork:!0};if(e===void 0)return{adoptedSessionId:null,effectiveFork:!1};if($Sr(e,n))return{adoptedSessionId:e,effectiveFork:!1};return t(`resume: transcript session id (${typeof e}) rejected by the adoption gate; continuing as a fork under the fresh session id`),c("session_resume","unadoptable_session_id"),{adoptedSessionId:null,effectiveFork:!0}}
export{KMt,$Sr,XYe};
