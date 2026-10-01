// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{z,Y7n,NWt}from"./chunk-a7cah040.js";import{BGo}from"./chunk-2j7zyd8v.js";import{we}from"./chunk-h1eby6n2.js";import{join as i}from"path";function P4(){return NWt()??i(pIr(),z())}function pIr(){return i(we(),"uploads")}function eko(t,e){return`${t}-${u(e)}`}var s=/^[A-Za-z0-9_-]{8}-/;function o(t){return BGo(t.replace(/_+$/,""))}function u(t){return o(t)?t+"_":t}function tko(t){let e=t.replace(s,"");if(e.endsWith("_")&&o(e))return e.slice(0,-1);return e||t}var c=1024;function nko(t,e){let n=Y7n();if(!n.has(t)&&n.size>=c){let r=n.keys().next().value;if(r!==void 0)n.delete(r)}n.set(t,e)}function zOt(t){return Y7n().get(t)}
export{P4,pIr,eko,tko,nko,zOt};
