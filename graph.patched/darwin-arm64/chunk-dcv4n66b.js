// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{De}from"./chunk-vpkz5m05.js";import{s}from"./chunk-3jdapt8v.js";import{n}from"./chunk-cmkfpkth.js";import{z7e}from"./chunk-8w8hykva.js";import{Ff,Dm}from"./chunk-ghnc2x4f.js";import{dPn}from"./chunk-x5ben6kb.js";import{Tyt}from"./chunk-zng31rpq.js";import{openSync as o}from"fs";import{ReadStream as d}from"tty";class i{override=null;get(){if(this.override!==null)return this.override;if(process.stdin.isTTY){this.override=void 0;return}if(De(!1)){this.override=void 0;return}if(Tyt()==="mcp"){this.override=void 0;return}try{let t=o("/dev/tty","r"),e=new d(t);return z7e(e),e.on("error",(r)=>{s("tengu_tty_stream_error",Ff(r)),n(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,this.override=e,this.override}catch(t){n(`Could not open /dev/tty for stdin override: ${t}`,{level:"error"}),this.override=void 0;return}}reset(){this.override=null}}var Bnr=new i;function ZS(t=!1){dPn();let e=Bnr.get(),r={exitOnCtrlC:t};if(e)r.stdin=e;return r.isScreenReaderEnabled=Dm(),r}
export{Bnr,ZS};
