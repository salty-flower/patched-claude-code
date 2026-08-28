// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{AI as R,zI as u}from"./_333.js";import{Fmc as f,Hmc as g,Mqc as m,Wqc as y}from"./_668.js";import{vxc as s,yxc as h}from"./_675.js";import{Pcd as o,Rcd as a}from"./_814.js";import{jhd as t,ohd as c}from"./_820.js";import{Dhd as v,qhd as d}from"./_821.js";import{nid as l}from"./_824.js";import{mxd as i}from"./_836.js";a();h();c();l();g();v();R();y();import{openSync as E}from"fs";import{ReadStream as S}from"tty";class p{override=null;get(){if(this.override!==null)return this.override;if(process.stdin.isTTY){this.override=void 0;return}if(i(!1)){this.override=void 0;return}if(s()==="mcp"){this.override=void 0;return}try{let n=E("/dev/tty","r"),e=new S(n);return d(e),e.on("error",(r)=>{o("tengu_tty_stream_error",f(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,this.override=e,this.override}catch(n){t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),this.override=void 0;return}}reset(){this.override=null}}var b=new p;function Y(n=!1){u();let e=b.get(),r={exitOnCtrlC:n};if(e)r.stdin=e;return r.isScreenReaderEnabled=m(),r}
export{b as bx,Y as cx};
