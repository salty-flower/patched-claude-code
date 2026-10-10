// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{q,cs,UN,$pt}from"./chunk-4bw62nzm.js";import{Fo,t}from"./chunk-gyf58rwf.js";import{Z$e,CP}from"./chunk-d7wfeeft.js";import{XPe}from"./chunk-bgkjeg18.js";import{iu}from"./chunk-wsz2wsez.js";import{closeSync as f,openSync as p}from"fs";import{devNull as a}from"os";class u{line}var l=new q(()=>new u);function mHo(e=0){{if(!process.argv.includes("--session-tunnel")||!iu())return;XPe((m)=>t(`[session tunnel] ${m}`,{level:"warn"}));let o=Z$e(e,"the session tunnel's line of JSON")??void 0;cs(l).line=o;let s=p(a,"r");if(s!==e)f(s);let n;try{n=Fo(o??"null")}catch{n=null}let r=typeof n?.oauth_token==="string"?n.oauth_token.trim():"",i=typeof n?.agent_proxy_token==="string"?n.agent_proxy_token.trim():"";if(r!=="")CP(),UN(r),$pt("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR");return t(`[session tunnel] the line has ${r===""?"no":"an"} OAuth token and ${i===""?"no":"an"} agent proxy token`),i===""?void 0:i}return}function gHo(){let e=cs(l),o=e.line;return e.line=void 0,o}
export{mHo,gHo};
