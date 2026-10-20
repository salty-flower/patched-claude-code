// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{bs,LN,svt}from"./chunk-dxktn51d.js";import{W}from"./chunk-2fbnw5gg.js";import{Ko,t}from"./chunk-n5v91jc3.js";import{Hze,fA}from"./chunk-9449nkm2.js";import{zDo}from"./chunk-qxd82yyp.js";import{uLe}from"./chunk-6e5b0w0j.js";import{Sl}from"./chunk-3pcxq77r.js";import{closeSync as c,openSync as d}from"fs";import{devNull as g}from"os";class p{line}var l=new W(()=>new p);function rJr(e=0){{if(!process.argv.includes("--session-tunnel")||!Sl())return;uLe((u)=>t(`[session tunnel] ${u}`,{level:"warn"}));let o=Hze(e,"the session tunnel's line of JSON")??void 0;bs(l).line=o;let f=d(g,"r");if(f!==e)c(f);let n;try{n=Ko(o??"null")}catch{n=null}let r=typeof n?.oauth_token==="string"?n.oauth_token.trim():"",i=typeof n?.agent_proxy_token==="string"?n.agent_proxy_token.trim():"";if(r!=="")fA(),LN(r),svt("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR");let a=typeof n?.env==="object"&&n.env!==null&&!Array.isArray(n.env)?Object.entries(n.env):[],s={};for(let[u,m]of a)if(typeof m==="string")s[u]=m;return zDo(s),t(`[session tunnel] the line has ${r===""?"no":"an"} OAuth token, ${i===""?"no":"an"} agent proxy token; variables: ${Object.keys(s).length} of ${a.length}`),i===""?void 0:i}return}function tdi(){return bs(l).line}function oJr(){let e=bs(l),o=e.line;return e.line=void 0,o}
export{rJr,tdi,oJr};
