// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Ne}from"./chunk-9s1z8ttt.js";import{a}from"./chunk-wq923bwc.js";import{Ykn}from"./chunk-33ax6j5s.js";import{t}from"./chunk-d7b0m8qy.js";import{Mbe}from"./chunk-p1qnbfcw.js";import{lf,Wf}from"./chunk-8qsa0b6q.js";import{Zks}from"./chunk-q1qhrnhf.js";import{openSync as o}from"fs";import{ReadStream as s}from"tty";function p(){if(process.stdin.isTTY)return{kind:"stdin"};if(Ne(!1))return{kind:"unavailable",reason:"ci"};if(Ykn()==="mcp")return{kind:"unavailable",reason:"mcp"};try{let n=o("/dev/tty","r"),e=new s(n);return Mbe(e),e.on("error",(r)=>{a("tengu_tty_stream_error",lf(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,{kind:"override",stream:e}}catch(n){return t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),{kind:"unavailable",reason:"tty_unavailable"}}}class i{input=null;get(){return this.input??=p()}reset(){this.input=null}}var put=new i;function LA(n=!1){Zks();let e=put.get(),r={exitOnCtrlC:n};if(e.kind==="override")r.stdin=e.stream;return r.isScreenReaderEnabled=Wf(),r}
export{put,LA};
