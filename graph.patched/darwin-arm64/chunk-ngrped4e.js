// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{us,g$,kSt}from"./chunk-xzypj06m.js";import{z}from"./chunk-r0a9v21k.js";import{Uo,t}from"./chunk-bnfhb7sj.js";import{EWe,qC}from"./chunk-3c05e83r.js";import{fMe}from"./chunk-n24x66vb.js";import{Nd}from"./chunk-760c7t99.js";import{closeSync as p,openSync as f}from"fs";import{devNull as d}from"os";class l{line}var s=new z(()=>new l);function VWr(e=0){{if(!process.argv.includes("--session-tunnel")||!Nd())return;fMe((m)=>t(`[session tunnel] ${m}`,{level:"warn"}));let o=EWe(e,"the session tunnel's line of JSON")??void 0;us(s).line=o;let u=f(d,"r");if(u!==e)p(u);let n;try{n=Uo(o??"null")}catch{n=null}let r=typeof n?.oauth_token==="string"?n.oauth_token.trim():"",i=typeof n?.agent_proxy_token==="string"?n.agent_proxy_token.trim():"";if(r!=="")qC(),g$(r),kSt("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR");return t(`[session tunnel] the line has ${r===""?"no":"an"} OAuth token and ${i===""?"no":"an"} agent proxy token`),i===""?void 0:i}return}function RJs(){return us(s).line}function qWr(){let e=us(s),o=e.line;return e.line=void 0,o}
export{VWr,RJs,qWr};
