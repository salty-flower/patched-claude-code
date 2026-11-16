// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{FJi,WJi}from"./chunk-zhvxfbcg.js";import{YSe}from"./chunk-cm0d29ak.js";function E8t({sessionId:s,getAccessToken:i,fetchSession:n,initial:e,createOrigin:a}){if(!YSe())return;let o=!1,r=(t)=>{if(!Array.isArray(t.tags))throw Error("the session came without a readable tag list");return FJi(t,o)};return WJi({...e&&{initial:e.then(r)},read:()=>n(s,{accessToken:i()}).then(r)})}
export{E8t};
