// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Me}from"./chunk-7s3c5qqq.js";import{s}from"./chunk-yqfv1yd3.js";import{n}from"./chunk-d0cr5d2v.js";import{nQe}from"./chunk-bvdq8tnt.js";import{gm,pg}from"./chunk-1e5y3pjf.js";import{mOn}from"./chunk-5fwz2ngy.js";import{pHt}from"./chunk-25s7gh7e.js";import{openSync as o}from"fs";import{ReadStream as d}from"tty";class i{override=null;get(){if(this.override!==null)return this.override;if(process.stdin.isTTY){this.override=void 0;return}if(Me(!1)){this.override=void 0;return}if(pHt()==="mcp"){this.override=void 0;return}try{let t=o("/dev/tty","r"),e=new d(t);return nQe(e),e.on("error",(r)=>{s("tengu_tty_stream_error",gm(r)),n(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,this.override=e,this.override}catch(t){n(`Could not open /dev/tty for stdin override: ${t}`,{level:"error"}),this.override=void 0;return}}reset(){this.override=null}}var Iur=new i;function NH(t=!1){mOn();let e=Iur.get(),r={exitOnCtrlC:t};if(e)r.stdin=e;return r.isScreenReaderEnabled=pg(),r}
export{Iur,NH};
