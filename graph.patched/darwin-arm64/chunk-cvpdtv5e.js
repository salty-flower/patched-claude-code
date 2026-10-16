// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{K,XUr,wCe,cGe}from"./chunk-xzypj06m.js";import{DXn}from"./chunk-r0a9v21k.js";import{xe}from"./chunk-6dw7xt0q.js";import{mrn}from"./chunk-rqev3qw9.js";import{join as i}from"path";function dL(){return wCe()??i(cGe()??mAr(),K())}function mAr(){return i(xe(),"uploads")}function kjn(){return[mAr(),cGe()??mrn()]}function Cjn(t,e){return`${t}-${u(e)}`}var s=/^[A-Za-z0-9_-]{8}-/;function o(t){return DXn(t.replace(/_+$/,""))}function u(t){return o(t)?t+"_":t}function iRs(t){let e=t.replace(s,"");if(e.endsWith("_")&&o(e))return e.slice(0,-1);return e||t}var c=1024;function aRs(t,e){let n=XUr();if(!n.has(t)&&n.size>=c){let r=n.keys().next().value;if(r!==void 0)n.delete(r)}n.set(t,e)}function Ltn(t){return XUr().get(t)}
export{dL,mAr,kjn,Cjn,iRs,aRs,Ltn};
