// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{eRt,yhr,Shr,tRt,Rqe,bhr,nRt,whr,eye,k7,xLe,zle,Cne,Iqe,oU}from"./chunk-8mvda08c.js";import{mye,tk}from"./chunk-5qeme8w3.js";var v=Object.prototype,d=v.hasOwnProperty;function g(r,t,e){var o=r[t];if(!(d.call(r,t)&&mye(o,e))||e===void 0&&!(t in r))k7(r,t,e)}var nqe=g;function P(r,t,e,o){if(!tk(r))return r;t=zle(t,r);var i=-1,m=t.length,s=m-1,n=r;while(n!=null&&++i<m){var f=Cne(t[i]),a=e;if(f==="__proto__"||f==="constructor"||f==="prototype")return r;if(i!=s){var p=n[f];if(a=o?o(p,f,n):void 0,a===void 0)a=tk(p)?p:Rqe(t[i+1])?[]:{}}nqe(n,f,a),n=n[f]}return r}var u=P;function x(r,t,e){var o=-1,i=t.length,m={};while(++o<i){var s=t[o],n=Iqe(r,s);if(e(n,s))u(m,zle(s,r),n)}return m}var kgr=x;var O=whr(Object.getPrototypeOf,Object),rXt=O;var I=Object.getOwnPropertySymbols,h=!I?Shr:function(r){var t=[];while(r)eRt(t,tRt(r)),r=rXt(r);return t},Agr=h;function K(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var l=K;var c=Object.prototype,A=c.hasOwnProperty;function S(r){if(!tk(r))return l(r);var t=nRt(r),e=[];for(var o in r)if(!(o=="constructor"&&(t||!A.call(r,o))))e.push(o);return e}var y=S;function w(r){return eye(r)?bhr(r,!0):y(r)}var oLe=w;function b(r){return yhr(r,oLe,Agr)}var oXt=b;function _(r,t){if(r==null)return{};var e=xLe(oXt(r),function(o){return[o]});return t=oU(t),kgr(r,e,function(o,i){return t(o,i[0])})}var Nr=_;
export{nqe,kgr,rXt,Agr,oLe,oXt,Nr};
