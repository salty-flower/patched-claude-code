// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Ie}from"./chunk-fkz3e4t3.js";import{i}from"./chunk-vtd04czk.js";import{t}from"./chunk-5q90j22t.js";import{Zet}from"./chunk-643msr15.js";import{Jf,Dg}from"./chunk-n495pc0t.js";import{m$n}from"./chunk-ehvv1cam.js";import{HAt}from"./chunk-bcm25myn.js";import{openSync as d}from"fs";import{ReadStream as s}from"tty";class o{override=null;get(){if(this.override!==null)return this.override;if(process.stdin.isTTY){this.override=void 0;return}if(Ie(!1)){this.override=void 0;return}if(HAt()==="mcp"){this.override=void 0;return}try{let n=d("/dev/tty","r"),e=new s(n);return Zet(e),e.on("error",(r)=>{i("tengu_tty_stream_error",Jf(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,this.override=e,this.override}catch(n){t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),this.override=void 0;return}}reset(){this.override=null}}var f=new o;function ov(n=!1){m$n();let e=f.get(),r={exitOnCtrlC:n};if(e)r.stdin=e;return r.isScreenReaderEnabled=Dg(),r}
export{ov};
