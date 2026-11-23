// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{BXi,VXi}from"./chunk-xynrjax8.js";import{Ube}from"./chunk-g7ee0nfc.js";function u9t({sessionId:s,getAccessToken:i,fetchSession:n,initial:e,createOrigin:a}){if(!Ube())return;let o=!1,r=(t)=>{if(!Array.isArray(t.tags))throw Error("the session came without a readable tag list");return BXi(t,o)};return VXi({...e&&{initial:e.then(r)},read:()=>n(s,{accessToken:i()}).then(r)})}
export{u9t};
