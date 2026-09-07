// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{xe}from"./chunk-mnk1rjxv.js";import{i}from"./chunk-skkcgpsw.js";import{t}from"./chunk-1tk5haqn.js";import{Oet}from"./chunk-mzzfzvay.js";import{Yp,Lg}from"./chunk-3e93vkg3.js";import{NFn}from"./chunk-qvkpj3fx.js";import{fAt}from"./chunk-vwc45qa8.js";import{openSync as d}from"fs";import{ReadStream as s}from"tty";class o{override=null;get(){if(this.override!==null)return this.override;if(process.stdin.isTTY){this.override=void 0;return}if(xe(!1)){this.override=void 0;return}if(fAt()==="mcp"){this.override=void 0;return}try{let n=d("/dev/tty","r"),e=new s(n);return Oet(e),e.on("error",(r)=>{i("tengu_tty_stream_error",Yp(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,this.override=e,this.override}catch(n){t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),this.override=void 0;return}}reset(){this.override=null}}var f=new o;function Zv(n=!1){NFn();let e=f.get(),r={exitOnCtrlC:n};if(e)r.stdin=e;return r.isScreenReaderEnabled=Lg(),r}
export{Zv};
