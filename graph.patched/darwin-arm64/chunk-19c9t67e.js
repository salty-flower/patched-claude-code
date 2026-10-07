// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Le}from"./chunk-29aedz4e.js";import{i}from"./chunk-qbf9wv32.js";import{fXt}from"./chunk-w5vv1884.js";import{t}from"./chunk-f8eqwxpt.js";import{jle}from"./chunk-sgznn49v.js";import{$u,bg}from"./chunk-j95hbnd3.js";import{qxo}from"./chunk-j0b9kr3j.js";import{openSync as a}from"fs";import{ReadStream as s}from"tty";function p(){if(process.stdin.isTTY)return{kind:"stdin"};if(Le(!1))return{kind:"unavailable",reason:"ci"};if(fXt()==="mcp")return{kind:"unavailable",reason:"mcp"};try{let n=a("/dev/tty","r"),e=new s(n);return jle(e),e.on("error",(r)=>{i("tengu_tty_stream_error",$u(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,{kind:"override",stream:e}}catch(n){return t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),{kind:"unavailable",reason:"tty_unavailable"}}}class o{input=null;get(){return this.input??=p()}reset(){this.input=null}}var jnn=new o;function kx(n=!1){qxo();let e=jnn.get(),r={exitOnCtrlC:n};if(e.kind==="override")r.stdin=e.stream;return r.isScreenReaderEnabled=bg(),r}
export{jnn,kx};
