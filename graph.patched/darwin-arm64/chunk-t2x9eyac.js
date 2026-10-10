// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{qMt,Cxr,Rxr,KMt,L8e,xxr,YMt,Pxr,wwe,zZ,T1e,zpe,zse,$8e,uU}from"./chunk-4bw62nzm.js";import{Hwe,aA}from"./chunk-ae84tp6z.js";var v=Object.prototype,d=v.hasOwnProperty;function g(r,t,e){var o=r[t];if(!(d.call(r,t)&&Hwe(o,e))||e===void 0&&!(t in r))zZ(r,t,e)}var e8e=g;function P(r,t,e,o){if(!aA(r))return r;t=zpe(t,r);var i=-1,m=t.length,s=m-1,n=r;while(n!=null&&++i<m){var f=zse(t[i]),a=e;if(f==="__proto__"||f==="constructor"||f==="prototype")return r;if(i!=s){var p=n[f];if(a=o?o(p,f,n):void 0,a===void 0)a=aA(p)?p:L8e(t[i+1])?[]:{}}e8e(n,f,a),n=n[f]}return r}var u=P;function x(r,t,e){var o=-1,i=t.length,m={};while(++o<i){var s=t[o],n=$8e(r,s);if(e(n,s))u(m,zpe(s,r),n)}return m}var vRr=x;var O=Pxr(Object.getPrototypeOf,Object),don=O;var I=Object.getOwnPropertySymbols,h=!I?Rxr:function(r){var t=[];while(r)qMt(t,KMt(r)),r=don(r);return t},kRr=h;function K(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var l=K;var c=Object.prototype,A=c.hasOwnProperty;function S(r){if(!aA(r))return l(r);var t=YMt(r),e=[];for(var o in r)if(!(o=="constructor"&&(t||!A.call(r,o))))e.push(o);return e}var y=S;function w(r){return wwe(r)?xxr(r,!0):y(r)}var e1e=w;function b(r){return Cxr(r,e1e,kRr)}var uon=b;function _(r,t){if(r==null)return{};var e=T1e(uon(r),function(o){return[o]});return t=uU(t),vRr(r,e,function(o,i){return t(o,i[0])})}var Eo=_;
export{e8e,vRr,don,kRr,e1e,uon,Eo};
