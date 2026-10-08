// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{nIr,HIo}from"./chunk-t6kckq7k.js";import{_7}from"./chunk-00qsacnx.js";function gct({sessionId:s,getAccessToken:r,fetchSession:t,initial:e}){if(!_7())return;return HIo({...e&&{initial:e.then(nIr)},read:()=>t(s,{accessToken:r()}).then(nIr)})}
export{gct};
