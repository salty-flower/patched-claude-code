// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Fe}from"./chunk-8nra9hkj.js";import{i}from"./chunk-sr4gfmny.js";import{Tyn}from"./chunk-bdj2znsb.js";import{t}from"./chunk-n5v91jc3.js";import{Pye}from"./chunk-nvrstjfg.js";import{Ip,yp}from"./chunk-3tq6qd54.js";import{Rcs}from"./chunk-bzwspbfj.js";import{openSync as a}from"fs";import{ReadStream as s}from"tty";function p(){if(process.stdin.isTTY)return{kind:"stdin"};if(Fe(!1))return{kind:"unavailable",reason:"ci"};if(Tyn()==="mcp")return{kind:"unavailable",reason:"mcp"};try{let n=a("/dev/tty","r"),e=new s(n);return Pye(e),e.on("error",(r)=>{i("tengu_tty_stream_error",Ip(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,{kind:"override",stream:e}}catch(n){return t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),{kind:"unavailable",reason:"tty_unavailable"}}}class o{input=null;get(){return this.input??=p()}reset(){this.input=null}}var cit=new o;function MA(n=!1){Rcs();let e=cit.get(),r={exitOnCtrlC:n};if(e.kind==="override")r.stdin=e.stream;return r.isScreenReaderEnabled=yp(),r}
export{cit,MA};
