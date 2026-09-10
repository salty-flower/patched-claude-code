// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Ie}from"./chunk-8yfx63va.js";import{i}from"./chunk-z0p50v56.js";import{t}from"./chunk-wbbe5mtc.js";import{pat}from"./chunk-kr797g3g.js";import{yd,bh}from"./chunk-e02s7cks.js";import{J3n}from"./chunk-gnhk6as7.js";import{c0t}from"./chunk-wtcpnvhr.js";import{openSync as d}from"fs";import{ReadStream as s}from"tty";class o{override=null;get(){if(this.override!==null)return this.override;if(process.stdin.isTTY){this.override=void 0;return}if(Ie(!1)){this.override=void 0;return}if(c0t()==="mcp"){this.override=void 0;return}try{let n=d("/dev/tty","r"),e=new s(n);return pat(e),e.on("error",(r)=>{i("tengu_tty_stream_error",yd(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,this.override=e,this.override}catch(n){t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),this.override=void 0;return}}reset(){this.override=null}}var f=new o;function ck(n=!1){J3n();let e=f.get(),r={exitOnCtrlC:n};if(e)r.stdin=e;return r.isScreenReaderEnabled=bh(),r}
export{ck};
