// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Me}from"./chunk-5b2g0bc6.js";import{s}from"./chunk-qw5jhqey.js";import{n}from"./chunk-ynzt0fm1.js";import{sQe}from"./chunk-1jtqmqar.js";import{hm,fg}from"./chunk-bsdtxcdc.js";import{ENn}from"./chunk-4vtrxks0.js";import{gwt}from"./chunk-asr64kkq.js";import{openSync as o}from"fs";import{ReadStream as d}from"tty";class i{override=null;get(){if(this.override!==null)return this.override;if(process.stdin.isTTY){this.override=void 0;return}if(Me(!1)){this.override=void 0;return}if(gwt()==="mcp"){this.override=void 0;return}try{let t=o("/dev/tty","r"),e=new d(t);return sQe(e),e.on("error",(r)=>{s("tengu_tty_stream_error",hm(r)),n(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,this.override=e,this.override}catch(t){n(`Could not open /dev/tty for stdin override: ${t}`,{level:"error"}),this.override=void 0;return}}reset(){this.override=null}}var Nur=new i;function Fw(t=!1){ENn();let e=Nur.get(),r={exitOnCtrlC:t};if(e)r.stdin=e;return r.isScreenReaderEnabled=fg(),r}
export{Nur,Fw};
