// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{an}from"./chunk-g4zaymy2.js";import{g}from"./chunk-8mr77ghb.js";import{t,it}from"./chunk-htcaw08y.js";import{fP}from"./chunk-kejy9rqn.js";import{e}from"./chunk-80eepr01.js";import{fn,We,N}from"./chunk-5752v0zq.js";import{cje}from"./chunk-j5h9ds58.js";import{Bl}from"./chunk-c47g9nt4.js";import{U}from"./chunk-xhxj67xc.js";import{p}from"./chunk-t2kfemrk.js";N();import{homedir as S}from"os";import{isAbsolute as H,sep as j}from"path";import{resolve as q,sep as T,win32 as C}from"path";function A(r){return cje(L(r))}function L(r){let o=an(),l=U()==="windows",n=l?C.sep:T,a=(R)=>l?R.replaceAll("/",n).toLowerCase():R,i=a(r),f=a(o);if(i.length!==r.length||f.length!==o.length)return r;if(i===f)return"";let y=f.endsWith(n)?f:f+n;return i.startsWith(y)?r.slice(y.length):r}import{isAbsolute as F,win32 as P}from"path";function m(r){if(U()==="windows")return P.isAbsolute(r)&&P.parse(r).root.length>1;return F(r)}var AQe=fn(null);function Xm(ct){let w=g(9),{filePath:u,children:dt}=ct,h=We(AQe),s=dt??u;if(d(u)||typeof s==="string"&&d(s)){let c;if(w[0]===p)c=e(t,{dimColor:!0,children:"Path hidden (unsupported characters)"}),w[0]=c;else c=w[0];return c}let c;if(w[1]!==h||w[2]!==s)c=h!==null&&typeof s==="string"?Bl(s,h):s,w[1]=h,w[2]=s,w[3]=c;else c=w[3];let b=c,V;if(w[4]!==u)V=m(u)?fP(u):null,w[4]=u,w[5]=V;else V=w[5];let x=V,W;if(w[6]!==b||w[7]!==x)W=x===null?e(t,{children:b}):e(it,{url:x,children:b}),w[6]=b,w[7]=x,w[8]=W;else W=w[8];return W}function d(r){let o=k(r);return H(o)?A(o):cje(o)}function k(r){if(r==="~")return S();return r.startsWith("~"+j)?S()+r.slice(1):r}
export{AQe,Xm};
