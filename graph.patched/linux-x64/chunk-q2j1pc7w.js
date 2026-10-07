// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{jCt,Kgr,Xgr,WCt,vKe,Jgr,zCt,Qgr,Khe,_J,wLe,Fle,hne,TKe,KU}from"./chunk-aywwjcwq.js";import{lye,Qk}from"./chunk-gf0t3nd9.js";var v=Object.prototype,d=v.hasOwnProperty;function g(r,t,e){var o=r[t];if(!(d.call(r,t)&&lye(o,e))||e===void 0&&!(t in r))_J(r,t,e)}var XVe=g;function P(r,t,e,o){if(!Qk(r))return r;t=Fle(t,r);var i=-1,m=t.length,s=m-1,n=r;while(n!=null&&++i<m){var f=hne(t[i]),a=e;if(f==="__proto__"||f==="constructor"||f==="prototype")return r;if(i!=s){var p=n[f];if(a=o?o(p,f,n):void 0,a===void 0)a=Qk(p)?p:vKe(t[i+1])?[]:{}}XVe(n,f,a),n=n[f]}return r}var u=P;function x(r,t,e){var o=-1,i=t.length,m={};while(++o<i){var s=t[o],n=TKe(r,s);if(e(n,s))u(m,Fle(s,r),n)}return m}var sgr=x;var O=Qgr(Object.getPrototypeOf,Object),B9t=O;var I=Object.getOwnPropertySymbols,h=!I?Xgr:function(r){var t=[];while(r)jCt(t,WCt(r)),r=B9t(r);return t},igr=h;function K(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var l=K;var c=Object.prototype,A=c.hasOwnProperty;function S(r){if(!Qk(r))return l(r);var t=zCt(r),e=[];for(var o in r)if(!(o=="constructor"&&(t||!A.call(r,o))))e.push(o);return e}var y=S;function w(r){return Khe(r)?Jgr(r,!0):y(r)}var Z0e=w;function b(r){return Kgr(r,Z0e,igr)}var j9t=b;function _(r,t){if(r==null)return{};var e=wLe(j9t(r),function(o){return[o]});return t=KU(t),sgr(r,e,function(o,i){return t(o,i[0])})}var Nr=_;
export{XVe,sgr,B9t,igr,Z0e,j9t,Nr};
