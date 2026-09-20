// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Oe}from"./chunk-vx7e38ke.js";import{i}from"./chunk-jxv3x25k.js";import{t}from"./chunk-qmm87fyw.js";import{R_t}from"./chunk-pfxvy4ay.js";import{lu,Cy}from"./chunk-g4c6ggz4.js";import{Lcr}from"./chunk-7qwkt3hj.js";import{mjt}from"./chunk-yx2drj5y.js";import{openSync as d}from"fs";import{ReadStream as s}from"tty";class o{override=null;get(){if(this.override!==null)return this.override;if(process.stdin.isTTY){this.override=void 0;return}if(Oe(!1)){this.override=void 0;return}if(mjt()==="mcp"){this.override=void 0;return}try{let n=d("/dev/tty","r"),e=new s(n);return R_t(e),e.on("error",(r)=>{i("tengu_tty_stream_error",lu(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,this.override=e,this.override}catch(n){t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),this.override=void 0;return}}reset(){this.override=null}}var f=new o;function ux(n=!1){Lcr();let e=f.get(),r={exitOnCtrlC:n};if(e)r.stdin=e;return r.isScreenReaderEnabled=Cy(),r}
export{ux};
