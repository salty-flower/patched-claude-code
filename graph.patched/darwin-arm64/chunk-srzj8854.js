// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Aki,Mki}from"./chunk-nfbft0th.js";import{$fe}from"./chunk-d92yg5xw.js";function tBt({sessionId:t,getAccessToken:s,fetchSession:i,initial:e,createOrigin:d}){if(!$fe())return;let n=!1,r=(o)=>Aki(o,n);return Mki({...e&&{initial:e.then(r)},read:()=>i(t,{accessToken:s()}).then(r)})}
export{tBt};
