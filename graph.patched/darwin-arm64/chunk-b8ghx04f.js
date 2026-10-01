// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Sht,F7n,U7n,bht,UBe,B7n,wht,j7n,Hue,Oue,LPe,loe,KJ,WBe,wM}from"./chunk-a7cah040.js";import{zue,mE}from"./chunk-2j7zyd8v.js";var v=Object.prototype,d=v.hasOwnProperty;function g(r,t,e){var o=r[t];if(!(d.call(r,t)&&zue(o,e))||e===void 0&&!(t in r))Oue(r,t,e)}var mBe=g;function P(r,t,e,o){if(!mE(r))return r;t=loe(t,r);var i=-1,m=t.length,s=m-1,n=r;while(n!=null&&++i<m){var f=KJ(t[i]),a=e;if(f==="__proto__"||f==="constructor"||f==="prototype")return r;if(i!=s){var p=n[f];if(a=o?o(p,f,n):void 0,a===void 0)a=mE(p)?p:UBe(t[i+1])?[]:{}}mBe(n,f,a),n=n[f]}return r}var u=P;function x(r,t,e){var o=-1,i=t.length,m={};while(++o<i){var s=t[o],n=WBe(r,s);if(e(n,s))u(m,loe(s,r),n)}return m}var jXn=x;var O=j7n(Object.getPrototypeOf,Object),fjt=O;var I=Object.getOwnPropertySymbols,h=!I?U7n:function(r){var t=[];while(r)Sht(t,bht(r)),r=fjt(r);return t},WXn=h;function K(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var l=K;var c=Object.prototype,A=c.hasOwnProperty;function S(r){if(!mE(r))return l(r);var t=wht(r),e=[];for(var o in r)if(!(o=="constructor"&&(t||!A.call(r,o))))e.push(o);return e}var y=S;function w(r){return Hue(r)?B7n(r,!0):y(r)}var aPe=w;function b(r){return F7n(r,aPe,WXn)}var mjt=b;function _(r,t){if(r==null)return{};var e=LPe(mjt(r),function(o){return[o]});return t=wM(t),jXn(r,e,function(o,i){return t(o,i[0])})}var Wr=_;
export{mBe,jXn,fjt,WXn,aPe,mjt,Wr};
