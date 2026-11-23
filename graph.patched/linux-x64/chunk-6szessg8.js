// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{rct,Bvn}from"./chunk-6xaz4dmy.js";import{nR}from"./chunk-7t1ykaw0.js";import{oct,$Ae,Qee,IDe}from"./chunk-ee2m2vgs.js";import{uA}from"./chunk-q1y9va45.js";import{X4}from"./chunk-s9vpvwta.js";function l(r,t,m,n){if(!uA(r))return r;t=$Ae(t,r);var o=-1,e=t.length,s=e-1,i=r;while(i!=null&&++o<e){var f=Qee(t[o]),u=m;if(f==="__proto__"||f==="constructor"||f==="prototype")return r;if(o!=s){var p=i[f];if(u=n?n(p,f,i):void 0,u===void 0)u=uA(p)?p:oct(t[o+1])?[]:{}}rct(i,f,u),i=i[f]}return r}var y4o=l;function a(r,t,m){var n=-1,o=t.length,e={};while(++n<o){var s=t[n],i=IDe(r,s);if(m(i,s))y4o(e,$Ae(s,r),i)}return e}var b4o=a;function d(r,t){if(r==null)return{};var m=X4(Bvn(r),function(n){return[n]});return t=nR(t),b4o(r,m,function(n,o){return t(n,o[0])})}var wo=d;
export{y4o,b4o,wo};
