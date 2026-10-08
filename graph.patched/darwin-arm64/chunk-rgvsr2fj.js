// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{IIt,dvr,pvr,OIt,E4e,fvr,HIt,mvr,tSe,YJ,$Fe,Rde,Zre,C4e,eB}from"./chunk-vd0a9d2s.js";import{mSe,bC}from"./chunk-9exgg8sx.js";var v=Object.prototype,d=v.hasOwnProperty;function g(r,t,e){var o=r[t];if(!(d.call(r,t)&&mSe(o,e))||e===void 0&&!(t in r))YJ(r,t,e)}var X3e=g;function P(r,t,e,o){if(!bC(r))return r;t=Rde(t,r);var i=-1,m=t.length,s=m-1,n=r;while(n!=null&&++i<m){var f=Zre(t[i]),a=e;if(f==="__proto__"||f==="constructor"||f==="prototype")return r;if(i!=s){var p=n[f];if(a=o?o(p,f,n):void 0,a===void 0)a=bC(p)?p:E4e(t[i+1])?[]:{}}X3e(n,f,a),n=n[f]}return r}var u=P;function x(r,t,e){var o=-1,i=t.length,m={};while(++o<i){var s=t[o],n=C4e(r,s);if(e(n,s))u(m,Rde(s,r),n)}return m}var SEr=x;var O=mvr(Object.getPrototypeOf,Object),uZt=O;var I=Object.getOwnPropertySymbols,h=!I?pvr:function(r){var t=[];while(r)IIt(t,OIt(r)),r=uZt(r);return t},bEr=h;function K(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var l=K;var c=Object.prototype,A=c.hasOwnProperty;function S(r){if(!bC(r))return l(r);var t=HIt(r),e=[];for(var o in r)if(!(o=="constructor"&&(t||!A.call(r,o))))e.push(o);return e}var y=S;function w(r){return tSe(r)?fvr(r,!0):y(r)}var mFe=w;function b(r){return dvr(r,mFe,bEr)}var pZt=b;function _(r,t){if(r==null)return{};var e=$Fe(pZt(r),function(o){return[o]});return t=eB(t),SEr(r,e,function(o,i){return t(o,i[0])})}var Gr=_;
export{X3e,SEr,uZt,bEr,mFe,pZt,Gr};
