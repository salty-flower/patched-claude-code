// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{_}from"./chunk-rykc5fv4.js";import{e}from"./chunk-wk3xnwvn.js";import{yn,We,A,z,u,Lt,F}from"./chunk-w6mhhrt2.js";import{bne,DF,UX}from"./chunk-7vv7zc9b.js";var cv=16;F();F();var l=yn({isTerminalFocused:!0,terminalFocusState:"unknown"});l.displayName="TerminalFocusContext";function son(H){let w=_(6),{children:T}=H,b=Lt(UX,bne),x=Lt(UX,DF),N;if(w[0]!==b||w[1]!==x)N={isTerminalFocused:b,terminalFocusState:x},w[0]=b,w[1]=x,w[2]=N;else N=w[2];let C=N,P;if(w[3]!==T||w[4]!==C)P=e(l.Provider,{value:C,children:T}),w[3]=T,w[4]=C,w[5]=P;else P=w[5];return P}var p=l;function Ba(){let{isTerminalFocused:n}=We(p);return n}function j_e(){let{terminalFocusState:n}=We(p);return n}F();function O(){return S(cv)}var L1=(n,r)=>{let t=setTimeout(n,r);return()=>clearTimeout(t)},qae=()=>()=>{},VLt=()=>null;function S(n){let r=new Map,t=null,c=n,v=performance.now(),s=0;function R(){s=performance.now()-v;for(let o of r.keys())o()}function a(){if([...r.values()].some(Boolean)){if(t)clearInterval(t),t=null;t=setInterval(R,c)}else if(t)clearInterval(t),t=null}function f(o,m){return r.set(o,m),a(),()=>{r.delete(o),a()}}return{subscribeKeepAlive(o){return f(o,!0)},subscribeFollower(o){return f(o,!1)},now(){if(t&&s)return s;return performance.now()-v},setTickInterval(o){if(o===c)return;c=o,a()},setTimeout(o,m){let I=setTimeout(o,m);return()=>clearTimeout(I)}}}var qR=yn(null),y=cv*2;function aon(Z){let h=_(7),{children:k}=Z,[i]=u(O),d=Ba(),E,K;if(h[0]!==i||h[1]!==d)E=()=>{i.setTickInterval(d?cv:y)},K=[i,d],h[0]=i,h[1]=d,h[2]=E,h[3]=K;else E=h[2],K=h[3];A(E,K);let M;if(h[4]!==k||h[5]!==i)M=e(qR.Provider,{value:i,children:k}),h[4]=k,h[5]=i,h[6]=M;else M=h[6];return M}
export{cv,son,Ba,j_e,L1,qae,VLt,qR,aon};
