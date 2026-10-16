// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{q,PUr,mTe,oGe}from"./chunk-eqmywwjn.js";import{_Xn}from"./chunk-pzq28dp7.js";import{Pe}from"./chunk-c61xdsy8.js";import{ern}from"./chunk-zadfm67a.js";import{join as i}from"path";function sL(){return mTe()??i(oGe()??iAr(),q())}function iAr(){return i(Pe(),"uploads")}function _jn(){return[iAr(),oGe()??ern()]}function bjn(t,e){return`${t}-${u(e)}`}var s=/^[A-Za-z0-9_-]{8}-/;function o(t){return _Xn(t.replace(/_+$/,""))}function u(t){return o(t)?t+"_":t}function eRs(t){let e=t.replace(s,"");if(e.endsWith("_")&&o(e))return e.slice(0,-1);return e||t}var c=1024;function tRs(t,e){let n=PUr();if(!n.has(t)&&n.size>=c){let r=n.keys().next().value;if(r!==void 0)n.delete(r)}n.set(t,e)}function Atn(t){return PUr().get(t)}
export{sL,iAr,_jn,bjn,eRs,tRs,Atn};
