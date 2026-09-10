// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Pe}from"./chunk-3k7pa7mk.js";import{i}from"./chunk-mx473n83.js";import{t}from"./chunk-w930ag8r.js";import{cst}from"./chunk-fz55wskw.js";import{zp,ph}from"./chunk-vryy7b5x.js";import{izn}from"./chunk-5afv91q1.js";import{wxt}from"./chunk-e8ef179z.js";import{openSync as d}from"fs";import{ReadStream as s}from"tty";class o{override=null;get(){if(this.override!==null)return this.override;if(process.stdin.isTTY){this.override=void 0;return}if(Pe(!1)){this.override=void 0;return}if(wxt()==="mcp"){this.override=void 0;return}try{let n=d("/dev/tty","r"),e=new s(n);return cst(e),e.on("error",(r)=>{i("tengu_tty_stream_error",zp(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,this.override=e,this.override}catch(n){t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),this.override=void 0;return}}reset(){this.override=null}}var f=new o;function GT(n=!1){izn();let e=f.get(),r={exitOnCtrlC:n};if(e)r.stdin=e;return r.isScreenReaderEnabled=ph(),r}
export{GT};
