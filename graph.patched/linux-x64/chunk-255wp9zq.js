// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Pe}from"./chunk-gqqx2ybk.js";import{s}from"./chunk-cvykgfry.js";import{n}from"./chunk-akz0cj0f.js";import{CYe}from"./chunk-qkpfba5t.js";import{$f,Pm}from"./chunk-ns0ekkj0.js";import{sRn}from"./chunk-qpy3a035.js";import{pyt}from"./chunk-3pqc7hkk.js";import{openSync as o}from"fs";import{ReadStream as d}from"tty";class i{override=null;get(){if(this.override!==null)return this.override;if(process.stdin.isTTY){this.override=void 0;return}if(Pe(!1)){this.override=void 0;return}if(pyt()==="mcp"){this.override=void 0;return}try{let t=o("/dev/tty","r"),e=new d(t);return CYe(e),e.on("error",(r)=>{s("tengu_tty_stream_error",$f(r)),n(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,this.override=e,this.override}catch(t){n(`Could not open /dev/tty for stdin override: ${t}`,{level:"error"}),this.override=void 0;return}}reset(){this.override=null}}var Mnr=new i;function eS(t=!1){sRn();let e=Mnr.get(),r={exitOnCtrlC:t};if(e)r.stdin=e;return r.isScreenReaderEnabled=Pm(),r}
export{Mnr,eS};
