// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{R4n,Yjr,aK}from"./chunk-yz9p0rz6.js";function e5e({sessionId:s,getAccessToken:r,fetchSession:t,initial:e}){if(!aK())return;return Yjr({...e&&{initial:e.then(R4n)},read:()=>t(s,{accessToken:r()}).then(R4n)})}
export{e5e};
