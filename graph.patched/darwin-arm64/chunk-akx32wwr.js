// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{De}from"./chunk-h4q6j5r2.js";import{s}from"./chunk-v5cr82c7.js";import{t}from"./chunk-84crg0gy.js";import{frt}from"./chunk-8nmvz1t1.js";import{_m,ih}from"./chunk-vtwn1md5.js";import{r6n}from"./chunk-6yts2jaf.js";import{bvt}from"./chunk-dvk0gvj1.js";import{openSync as o}from"fs";import{ReadStream as d}from"tty";class i{override=null;get(){if(this.override!==null)return this.override;if(process.stdin.isTTY){this.override=void 0;return}if(De(!1)){this.override=void 0;return}if(bvt()==="mcp"){this.override=void 0;return}try{let n=o("/dev/tty","r"),e=new d(n);return frt(e),e.on("error",(r)=>{s("tengu_tty_stream_error",_m(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,this.override=e,this.override}catch(n){t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),this.override=void 0;return}}reset(){this.override=null}}var j_r=new i;function uT(n=!1){r6n();let e=j_r.get(),r={exitOnCtrlC:n};if(e)r.stdin=e;return r.isScreenReaderEnabled=ih(),r}
export{j_r,uT};
