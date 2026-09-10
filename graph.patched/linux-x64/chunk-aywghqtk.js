// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{He}from"./chunk-d8qjp6nk.js";import{i}from"./chunk-nx6yj2w6.js";import{t}from"./chunk-cmg3b5hg.js";import{eat}from"./chunk-c413mrzf.js";import{hd,bh}from"./chunk-ce4ppmnp.js";import{kVn}from"./chunk-697mge0w.js";import{GIt}from"./chunk-8xwd74rb.js";import{openSync as d}from"fs";import{ReadStream as s}from"tty";class o{override=null;get(){if(this.override!==null)return this.override;if(process.stdin.isTTY){this.override=void 0;return}if(He(!1)){this.override=void 0;return}if(GIt()==="mcp"){this.override=void 0;return}try{let n=d("/dev/tty","r"),e=new s(n);return eat(e),e.on("error",(r)=>{i("tengu_tty_stream_error",hd(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,this.override=e,this.override}catch(n){t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),this.override=void 0;return}}reset(){this.override=null}}var f=new o;function sC(n=!1){kVn();let e=f.get(),r={exitOnCtrlC:n};if(e)r.stdin=e;return r.isScreenReaderEnabled=bh(),r}
export{sC};
