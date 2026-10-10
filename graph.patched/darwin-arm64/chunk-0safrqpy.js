// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ne}from"./chunk-fdxhcr6b.js";import{i}from"./chunk-4nygtnjw.js";import{uin}from"./chunk-qb086kpj.js";import{t}from"./chunk-gyf58rwf.js";import{jpe}from"./chunk-tat46164.js";import{Qu,mm}from"./chunk-mrf41zrh.js";import{r6o}from"./chunk-rfd8qwdy.js";import{openSync as a}from"fs";import{ReadStream as s}from"tty";function p(){if(process.stdin.isTTY)return{kind:"stdin"};if(Ne(!1))return{kind:"unavailable",reason:"ci"};if(uin()==="mcp")return{kind:"unavailable",reason:"mcp"};try{let n=a("/dev/tty","r"),e=new s(n);return jpe(e),e.on("error",(r)=>{i("tengu_tty_stream_error",Qu(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,{kind:"override",stream:e}}catch(n){return t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),{kind:"unavailable",reason:"tty_unavailable"}}}class o{input=null;get(){return this.input??=p()}reset(){this.input=null}}var sQe=new o;function mx(n=!1){r6o();let e=sQe.get(),r={exitOnCtrlC:n};if(e.kind==="override")r.stdin=e.stream;return r.isScreenReaderEnabled=mm(),r}
export{sQe,mx};
