// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{G,BCo,YB,jie}from"./chunk-ecyypctx.js";import{fLr}from"./chunk-qedh1vmm.js";import{$e}from"./chunk-ycp5r4r6.js";import{ZMn}from"./chunk-w64mkcdc.js";import{createHash as s}from"crypto";import{join as i}from"path";function WC(){return YB()??i(jie()??vMt(),G())}function vMt(){return i($e(),"uploads")}function TY(){return[vMt(),jie()??ZMn()]}function iMn(t,e){return`${t}-${u(e)}`}function Mlo(t){return s("sha256").update(t.toLowerCase()).digest("hex").slice(0,8)}var a=/^[A-Za-z0-9_-]{8}-/;function o(t){return fLr(t.replace(/_+$/,""))}function u(t){return o(t)?t+"_":t}function kIi(t){let e=t.replace(a,"");if(e.endsWith("_")&&o(e))return e.slice(0,-1);return e||t}var c=1024;function vIi(t,e){let n=BCo();if(!n.has(t)&&n.size>=c){let r=n.keys().next().value;if(r!==void 0)n.delete(r)}n.set(t,e)}function zut(t){return BCo().get(t)}
export{WC,vMt,TY,iMn,Mlo,kIi,vIi,zut};
