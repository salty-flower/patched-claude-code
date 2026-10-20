// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{$e}from"./chunk-bjnpzyk4.js";import{i}from"./chunk-dj0gyv94.js";import{TSn}from"./chunk-k9hc2wbs.js";import{t}from"./chunk-tdxkq523.js";import{Hye}from"./chunk-pmhx705f.js";import{Pp,yp}from"./chunk-w1f5ee14.js";import{aus}from"./chunk-p3zyhrcp.js";import{openSync as a}from"fs";import{ReadStream as s}from"tty";function p(){if(process.stdin.isTTY)return{kind:"stdin"};if($e(!1))return{kind:"unavailable",reason:"ci"};if(TSn()==="mcp")return{kind:"unavailable",reason:"mcp"};try{let n=a("/dev/tty","r"),e=new s(n);return Hye(e),e.on("error",(r)=>{i("tengu_tty_stream_error",Pp(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,{kind:"override",stream:e}}catch(n){return t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),{kind:"unavailable",reason:"tty_unavailable"}}}class o{input=null;get(){return this.input??=p()}reset(){this.input=null}}var mit=new o;function LT(n=!1){aus();let e=mit.get(),r={exitOnCtrlC:n};if(e.kind==="override")r.stdin=e.stream;return r.isScreenReaderEnabled=yp(),r}
export{mit,LT};
