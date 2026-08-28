// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{an}from"./chunk-2vv5hpw3.js";import{g}from"./chunk-yhctzac5.js";import{t,it}from"./chunk-167xpx5m.js";import{aR}from"./chunk-sq7pfvms.js";import{e}from"./chunk-azctepqx.js";import{fn,ze,N}from"./chunk-q0z49y3j.js";import{lGe}from"./chunk-hrvkymct.js";import{Bl}from"./chunk-kfmtzk05.js";import{B}from"./chunk-f58mzqmc.js";import{p}from"./chunk-by569dsf.js";N();import{homedir as S}from"os";import{isAbsolute as W,sep as H}from"path";import{resolve as q,sep as T,win32 as U}from"path";function A(r){return lGe(C(r))}function C(r){let o=an(),l=B()==="windows",n=l?U.sep:T,a=(R)=>l?R.replaceAll("/",n).toLowerCase():R,i=a(r),f=a(o);if(i.length!==r.length||f.length!==o.length)return r;if(i===f)return"";let y=f.endsWith(n)?f:f+n;return i.startsWith(y)?r.slice(y.length):r}import{isAbsolute as L,win32 as P}from"path";function m(r){if(B()==="windows")return P.isAbsolute(r)&&P.parse(r).root.length>1;return L(r)}var mQe=fn(null);function Xm(ct){let w=g(9),{filePath:u,children:dt}=ct,h=ze(mQe),s=dt??u;if(d(u)||typeof s==="string"&&d(s)){let c;if(w[0]===p)c=e(t,{dimColor:!0,children:"Path hidden (unsupported characters)"}),w[0]=c;else c=w[0];return c}let c;if(w[1]!==h||w[2]!==s)c=h!==null&&typeof s==="string"?Bl(s,h):s,w[1]=h,w[2]=s,w[3]=c;else c=w[3];let b=c,F;if(w[4]!==u)F=m(u)?aR(u):null,w[4]=u,w[5]=F;else F=w[5];let x=F,V;if(w[6]!==b||w[7]!==x)V=x===null?e(t,{children:b}):e(it,{url:x,children:b}),w[6]=b,w[7]=x,w[8]=V;else V=w[8];return V}function d(r){let o=j(r);return W(o)?A(o):lGe(o)}function j(r){if(r==="~")return S();return r.startsWith("~"+H)?S()+r.slice(1):r}
export{mQe,Xm};
