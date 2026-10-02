// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Le}from"./chunk-g5e6pf8s.js";import{i}from"./chunk-aykv0zbt.js";import{Ajt}from"./chunk-820d2q3e.js";import{t}from"./chunk-3wz0srxw.js";import{Bjt}from"./chunk-dard33vx.js";import{Nd,hh}from"./chunk-p3842md4.js";import{poo}from"./chunk-nt522987.js";import{openSync as d}from"fs";import{ReadStream as s}from"tty";class o{override=null;get(){if(this.override!==null)return this.override;if(process.stdin.isTTY){this.override=void 0;return}if(Le(!1)){this.override=void 0;return}if(Ajt()==="mcp"){this.override=void 0;return}try{let n=d("/dev/tty","r"),e=new s(n);return Bjt(e),e.on("error",(r)=>{i("tengu_tty_stream_error",Nd(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,this.override=e,this.override}catch(n){t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),this.override=void 0;return}}reset(){this.override=null}}var f=new o;function E0(n=!1){poo();let e=f.get(),r={exitOnCtrlC:n};if(e)r.stdin=e;return r.isScreenReaderEnabled=hh(),r}
export{E0};
