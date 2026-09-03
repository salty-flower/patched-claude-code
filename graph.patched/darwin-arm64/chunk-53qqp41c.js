// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Le}from"./chunk-5e3knf27.js";import{s}from"./chunk-kzyd0fd4.js";import{t}from"./chunk-t2jwg94b.js";import{Utt}from"./chunk-2mb81hfz.js";import{hm,th}from"./chunk-h6md7820.js";import{$$n}from"./chunk-5rd9sjr1.js";import{HAt}from"./chunk-hjf2ath8.js";import{openSync as o}from"fs";import{ReadStream as d}from"tty";class i{override=null;get(){if(this.override!==null)return this.override;if(process.stdin.isTTY){this.override=void 0;return}if(Le(!1)){this.override=void 0;return}if(HAt()==="mcp"){this.override=void 0;return}try{let n=o("/dev/tty","r"),e=new d(n);return Utt(e),e.on("error",(r)=>{s("tengu_tty_stream_error",hm(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,this.override=e,this.override}catch(n){t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),this.override=void 0;return}}reset(){this.override=null}}var fmr=new i;function ew(n=!1){$$n();let e=fmr.get(),r={exitOnCtrlC:n};if(e)r.stdin=e;return r.isScreenReaderEnabled=th(),r}
export{fmr,ew};
