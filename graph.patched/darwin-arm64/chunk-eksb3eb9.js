// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Yct,Q6n,eGn,Xct,BNe,tGn,Jct,nGn,Bae,jae,ZAe,Iee,GY,WNe,UL}from"./chunk-s8xs8s76.js";import{tle,pw}from"./chunk-w13amena.js";var v=Object.prototype,d=v.hasOwnProperty;function g(r,t,e){var o=r[t];if(!(d.call(r,t)&&tle(o,e))||e===void 0&&!(t in r))jae(r,t,e)}var yNe=g;function P(r,t,e,o){if(!pw(r))return r;t=Iee(t,r);var i=-1,m=t.length,s=m-1,n=r;while(n!=null&&++i<m){var f=GY(t[i]),a=e;if(f==="__proto__"||f==="constructor"||f==="prototype")return r;if(i!=s){var p=n[f];if(a=o?o(p,f,n):void 0,a===void 0)a=pw(p)?p:BNe(t[i+1])?[]:{}}yNe(n,f,a),n=n[f]}return r}var u=P;function x(r,t,e){var o=-1,i=t.length,m={};while(++o<i){var s=t[o],n=WNe(r,s);if(e(n,s))u(m,Iee(s,r),n)}return m}var m6n=x;var O=nGn(Object.getPrototypeOf,Object),eMt=O;var I=Object.getOwnPropertySymbols,h=!I?eGn:function(r){var t=[];while(r)Yct(t,Xct(r)),r=eMt(r);return t},g6n=h;function K(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var l=K;var c=Object.prototype,A=c.hasOwnProperty;function S(r){if(!pw(r))return l(r);var t=Jct(r),e=[];for(var o in r)if(!(o=="constructor"&&(t||!A.call(r,o))))e.push(o);return e}var y=S;function w(r){return Bae(r)?tGn(r,!0):y(r)}var OAe=w;function b(r){return Q6n(r,OAe,g6n)}var tMt=b;function _(r,t){if(r==null)return{};var e=ZAe(tMt(r),function(o){return[o]});return t=UL(t),m6n(r,e,function(o,i){return t(o,i[0])})}var Xo=_;
export{yNe,m6n,eMt,g6n,OAe,tMt,Xo};
