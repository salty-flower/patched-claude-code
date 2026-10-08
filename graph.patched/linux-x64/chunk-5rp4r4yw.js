// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{De}from"./chunk-ndcqd6bh.js";import{i}from"./chunk-nayw0pf7.js";import{oZt}from"./chunk-dmwg443r.js";import{t}from"./chunk-p46wpkfz.js";import{bde}from"./chunk-gx95ar6n.js";import{Yu,Dg}from"./chunk-9p9w9mdw.js";import{FNo}from"./chunk-t02rr4qv.js";import{openSync as a}from"fs";import{ReadStream as s}from"tty";function p(){if(process.stdin.isTTY)return{kind:"stdin"};if(De(!1))return{kind:"unavailable",reason:"ci"};if(oZt()==="mcp")return{kind:"unavailable",reason:"mcp"};try{let n=a("/dev/tty","r"),e=new s(n);return bde(e),e.on("error",(r)=>{i("tengu_tty_stream_error",Yu(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,{kind:"override",stream:e}}catch(n){return t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),{kind:"unavailable",reason:"tty_unavailable"}}}class o{input=null;get(){return this.input??=p()}reset(){this.input=null}}var D9e=new o;function Yx(n=!1){FNo();let e=D9e.get(),r={exitOnCtrlC:n};if(e.kind==="override")r.stdin=e.stream;return r.isScreenReaderEnabled=Dg(),r}
export{D9e,Yx};
