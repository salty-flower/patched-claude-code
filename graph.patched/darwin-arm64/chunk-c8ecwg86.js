// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Le}from"./chunk-63vja5td.js";import{i}from"./chunk-ne43gjnt.js";import{bZt}from"./chunk-3qfs0gea.js";import{t}from"./chunk-b5feae42.js";import{Cde}from"./chunk-xaschh52.js";import{Ku,Ng}from"./chunk-svyf12fc.js";import{vFo}from"./chunk-t2fbxa65.js";import{openSync as a}from"fs";import{ReadStream as s}from"tty";function p(){if(process.stdin.isTTY)return{kind:"stdin"};if(Le(!1))return{kind:"unavailable",reason:"ci"};if(bZt()==="mcp")return{kind:"unavailable",reason:"mcp"};try{let n=a("/dev/tty","r"),e=new s(n);return Cde(e),e.on("error",(r)=>{i("tengu_tty_stream_error",Ku(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,{kind:"override",stream:e}}catch(n){return t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),{kind:"unavailable",reason:"tty_unavailable"}}}class o{input=null;get(){return this.input??=p()}reset(){this.input=null}}var WYe=new o;function Qx(n=!1){vFo();let e=WYe.get(),r={exitOnCtrlC:n};if(e.kind==="override")r.stdin=e.stream;return r.isScreenReaderEnabled=Ng(),r}
export{WYe,Qx};
