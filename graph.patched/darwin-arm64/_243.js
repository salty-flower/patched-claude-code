// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{HI as u,II as R}from"./_335.js";import{Fmc as f,Hmc as g,Mqc as m,Wqc as y}from"./_668.js";import{Rxc as s,Uxc as h}from"./_676.js";import{$ad as a,Zad as o}from"./_800.js";import{tfd as t,yfd as c}from"./_806.js";import{Afd as d,Nfd as v}from"./_807.js";import{xgd as l}from"./_810.js";import{ysd as i}from"./_815.js";a();h();c();l();g();v();R();y();import{openSync as E}from"fs";import{ReadStream as S}from"tty";class p{override=null;get(){if(this.override!==null)return this.override;if(process.stdin.isTTY){this.override=void 0;return}if(i(!1)){this.override=void 0;return}if(s()==="mcp"){this.override=void 0;return}try{let n=E("/dev/tty","r"),e=new S(n);return d(e),e.on("error",(r)=>{o("tengu_tty_stream_error",f(r)),t(`/dev/tty stream error: ${r}`,{level:"debug"})}),e.isTTY=!0,this.override=e,this.override}catch(n){t(`Could not open /dev/tty for stdin override: ${n}`,{level:"error"}),this.override=void 0;return}}reset(){this.override=null}}var b=new p;function Y(n=!1){u();let e=b.get(),r={exitOnCtrlC:n};if(e)r.stdin=e;return r.isScreenReaderEnabled=m(),r}
export{b as uz,Y as vz};
