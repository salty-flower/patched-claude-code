// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{us,dF,_bt}from"./chunk-eqmywwjn.js";import{G}from"./chunk-pzq28dp7.js";import{Uo,t}from"./chunk-cwsn6mdf.js";import{mWe,zT}from"./chunk-5vywp25k.js";import{PHe}from"./chunk-ttjrjfhr.js";import{Nd}from"./chunk-8dm571cw.js";import{closeSync as p,openSync as f}from"fs";import{devNull as d}from"os";class l{line}var s=new G(()=>new l);function kjr(e=0){{if(!process.argv.includes("--session-tunnel")||!Nd())return;PHe((m)=>t(`[session tunnel] ${m}`,{level:"warn"}));let o=mWe(e,"the session tunnel's line of JSON")??void 0;us(s).line=o;let u=f(d,"r");if(u!==e)p(u);let n;try{n=Uo(o??"null")}catch{n=null}let r=typeof n?.oauth_token==="string"?n.oauth_token.trim():"",i=typeof n?.agent_proxy_token==="string"?n.agent_proxy_token.trim():"";if(r!=="")zT(),dF(r),_bt("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR");return t(`[session tunnel] the line has ${r===""?"no":"an"} OAuth token and ${i===""?"no":"an"} agent proxy token`),i===""?void 0:i}return}function BJs(){return us(s).line}function Tjr(){let e=us(s),o=e.line;return e.line=void 0,o}
export{kjr,BJs,Tjr};
