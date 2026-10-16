// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{z6o,X6o}from"./chunk-mfc50jr1.js";import{rre}from"./chunk-jqw92fkq.js";function Wbt({sessionId:t,getAccessToken:s,fetchSession:i,initial:e,createOrigin:d}){if(!rre())return;let n=!1,r=(o)=>z6o(o,n);return X6o({...e&&{initial:e.then(r)},read:()=>i(t,{accessToken:s()}).then(r)})}
export{Wbt};
