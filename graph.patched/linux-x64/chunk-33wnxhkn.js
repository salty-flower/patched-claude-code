// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{vOs,ROs}from"./chunk-2gh4h0fv.js";import{uoe}from"./chunk-cgjrp4d6.js";function Ivt({sessionId:t,getAccessToken:s,fetchSession:i,initial:e,createOrigin:d}){if(!uoe())return;let n=!1,r=(o)=>vOs(o,n);return ROs({...e&&{initial:e.then(r)},read:()=>i(t,{accessToken:s()}).then(r)})}
export{Ivt};
