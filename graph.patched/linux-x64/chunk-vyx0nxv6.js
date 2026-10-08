// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{bIt,Bvr,Wvr,SIt,h6e,zvr,wIt,Gvr,K_e,WQ,I$e,vde,Gre,b6e,zB}from"./chunk-g79wjybr.js";import{abe,yT}from"./chunk-gwj7v27h.js";var v=Object.prototype,d=v.hasOwnProperty;function g(r,t,e){var o=r[t];if(!(d.call(r,t)&&abe(o,e))||e===void 0&&!(t in r))WQ(r,t,e)}var zYe=g;function P(r,t,e,o){if(!yT(r))return r;t=vde(t,r);var i=-1,m=t.length,s=m-1,n=r;while(n!=null&&++i<m){var f=Gre(t[i]),a=e;if(f==="__proto__"||f==="constructor"||f==="prototype")return r;if(i!=s){var p=n[f];if(a=o?o(p,f,n):void 0,a===void 0)a=yT(p)?p:h6e(t[i+1])?[]:{}}zYe(n,f,a),n=n[f]}return r}var u=P;function x(r,t,e){var o=-1,i=t.length,m={};while(++o<i){var s=t[o],n=b6e(r,s);if(e(n,s))u(m,vde(s,r),n)}return m}var Zwr=x;var O=Gvr(Object.getPrototypeOf,Object),X7t=O;var I=Object.getOwnPropertySymbols,h=!I?Wvr:function(r){var t=[];while(r)bIt(t,SIt(r)),r=X7t(r);return t},evr=h;function K(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var l=K;var c=Object.prototype,A=c.hasOwnProperty;function S(r){if(!yT(r))return l(r);var t=wIt(r),e=[];for(var o in r)if(!(o=="constructor"&&(t||!A.call(r,o))))e.push(o);return e}var y=S;function w(r){return K_e(r)?zvr(r,!0):y(r)}var l$e=w;function b(r){return Bvr(r,l$e,evr)}var J7t=b;function _(r,t){if(r==null)return{};var e=I$e(J7t(r),function(o){return[o]});return t=zB(t),Zwr(r,e,function(o,i){return t(o,i[0])})}var zr=_;
export{zYe,Zwr,X7t,evr,l$e,J7t,zr};
