// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{O5o,F5o}from"./chunk-x9svnsqx.js";import{dre}from"./chunk-w213qgq9.js";function ZSt({sessionId:t,getAccessToken:s,fetchSession:i,initial:e,createOrigin:d}){if(!dre())return;let n=!1,r=(o)=>O5o(o,n);return F5o({...e&&{initial:e.then(r)},read:()=>i(t,{accessToken:s()}).then(r)})}
export{ZSt};
