// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{K,cGn,dNt}from"./chunk-s8xs8s76.js";import{CRo}from"./chunk-w13amena.js";import{we}from"./chunk-4cwgnmh9.js";import{join as i}from"path";function j3(){return dNt()??i(pyr(),K())}function pyr(){return i(we(),"uploads")}function Gdo(t,e){return`${t}-${u(e)}`}var s=/^[A-Za-z0-9_-]{8}-/;function o(t){return CRo(t.replace(/_+$/,""))}function u(t){return o(t)?t+"_":t}function zdo(t){let e=t.replace(s,"");if(e.endsWith("_")&&o(e))return e.slice(0,-1);return e||t}var c=1024;function Vdo(t,e){let n=cGn();if(!n.has(t)&&n.size>=c){let r=n.keys().next().value;if(r!==void 0)n.delete(r)}n.set(t,e)}function iTt(t){return cGn().get(t)}
export{j3,pyr,Gdo,zdo,Vdo,iTt};
