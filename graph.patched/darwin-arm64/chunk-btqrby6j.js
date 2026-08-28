// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-8mr77ghb.js";import{e}from"./chunk-80eepr01.js";import{fn,We,E,q,u,Pt,N}from"./chunk-5752v0zq.js";import{eee,cN,CK}from"./chunk-h5fzz40b.js";var pC=16;N();N();var l=fn({isTerminalFocused:!0,terminalFocusState:"unknown"});l.displayName="TerminalFocusContext";function nZt(H){let I=g(6),{children:T}=H,F=Pt(CK,eee),b=Pt(CK,cN),w;if(I[0]!==F||I[1]!==b)w={isTerminalFocused:F,terminalFocusState:b},I[0]=F,I[1]=b,I[2]=w;else w=I[2];let x=w,P;if(I[3]!==T||I[4]!==x)P=e(l.Provider,{value:x,children:T}),I[3]=T,I[4]=x,I[5]=P;else P=I[5];return P}var p=l;function ca(){let{isTerminalFocused:n}=We(p);return n}function nhe(){let{terminalFocusState:n}=We(p);return n}N();function O(){return k(pC)}var pM=(n,r)=>{let t=setTimeout(n,r);return()=>clearTimeout(t)},Pie=()=>()=>{},vPt=()=>null;function k(n){let r=new Map,t=null,c=n,v=performance.now(),s=0;function y(){s=performance.now()-v;for(let o of r.keys())o()}function a(){if([...r.values()].some(Boolean)){if(t)clearInterval(t),t=null;t=setInterval(y,c)}else if(t)clearInterval(t),t=null}function f(o,m){return r.set(o,m),a(),()=>{r.delete(o),a()}}return{subscribeKeepAlive(o){return f(o,!0)},subscribeFollower(o){return f(o,!1)},now(){if(t&&s)return s;return performance.now()-v},setTickInterval(o){if(o===c)return;c=o,a()},setTimeout(o,m){let R=setTimeout(o,m);return()=>clearTimeout(R)}}}var BA=fn(null),S=pC*2;function rZt(Z){let A=g(7),{children:C}=Z,[i]=u(O),d=ca(),h,K;if(A[0]!==i||A[1]!==d)h=()=>{i.setTickInterval(d?pC:S)},K=[i,d],A[0]=i,A[1]=d,A[2]=h,A[3]=K;else h=A[2],K=A[3];E(h,K);let M;if(A[4]!==C||A[5]!==i)M=e(BA.Provider,{value:i,children:C}),A[4]=C,A[5]=i,A[6]=M;else M=A[6];return M}
export{pC,nZt,ca,nhe,pM,Pie,vPt,BA,rZt};
