// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Le}from"./chunk-918t5khf.js";import{i}from"./chunk-s90w5q15.js";import{J9t}from"./chunk-vf73wj1b.js";import{t}from"./chunk-gvn18sr5.js";import{Lle}from"./chunk-0z5rjdcn.js";import{Uu,_g}from"./chunk-dejd0mwg.js";import{cxo}from"./chunk-fbd0vgnb.js";import{openSync as a}from"fs";import{ReadStream as s}from"tty";function p(){if(process.stdin.isTTY)return{kind:"stdin"};if(Le(!1))return{kind:"unavailable",reason:"ci"};if(J9t()==="mcp")return{kind:"unavailable",reason:"mcp"};try{let n=a("/dev/tty","r"),e=new s(n);return Lle(e),e.on("error",(r)=>{i("tengu_tty_stream_error",Uu(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,{kind:"override",stream:e}}catch(n){return t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),{kind:"unavailable",reason:"tty_unavailable"}}}class o{input=null;get(){return this.input??=p()}reset(){this.input=null}}var Enn=new o;function vx(n=!1){cxo();let e=Enn.get(),r={exitOnCtrlC:n};if(e.kind==="override")r.stdin=e.stream;return r.isScreenReaderEnabled=_g(),r}
export{Enn,vx};
