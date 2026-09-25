// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Oe}from"./chunk-6cqmwr9m.js";import{i}from"./chunk-9cfndpw0.js";import{t}from"./chunk-wvb0gwjm.js";import{EMt}from"./chunk-81r5kx3r.js";import{hd,wy}from"./chunk-wt3kk7dt.js";import{jzr}from"./chunk-79qxstkc.js";import{Zln}from"./chunk-mb63rv2s.js";import{openSync as d}from"fs";import{ReadStream as s}from"tty";class o{override=null;get(){if(this.override!==null)return this.override;if(process.stdin.isTTY){this.override=void 0;return}if(Oe(!1)){this.override=void 0;return}if(Zln()==="mcp"){this.override=void 0;return}try{let n=d("/dev/tty","r"),e=new s(n);return EMt(e),e.on("error",(r)=>{i("tengu_tty_stream_error",hd(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,this.override=e,this.override}catch(n){t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),this.override=void 0;return}}reset(){this.override=null}}var f=new o;function X0(n=!1){jzr();let e=f.get(),r={exitOnCtrlC:n};if(e)r.stdin=e;return r.isScreenReaderEnabled=wy(),r}
export{X0};
