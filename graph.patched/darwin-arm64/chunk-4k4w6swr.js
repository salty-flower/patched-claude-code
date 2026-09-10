// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{nse,HP,cV}from"./chunk-dfre0qzt.js";import{y}from"./chunk-hshe4789.js";import{e}from"./chunk-zhg3ync1.js";import{Yt,De,E,d,kt,N}from"./chunk-w8p0f9k6.js";var JT=16;N();N();var l=Yt({isTerminalFocused:!0,terminalFocusState:"unknown"});l.displayName="TerminalFocusContext";function usn(H){let w=y(6),{children:T}=H,F=kt(cV,nse),b=kt(cV,HP),P;if(w[0]!==F||w[1]!==b)P={isTerminalFocused:F,terminalFocusState:b},w[0]=F,w[1]=b,w[2]=P;else P=w[2];let x=P,A;if(w[3]!==T||w[4]!==x)A=e(l.Provider,{value:x,children:T}),w[3]=T,w[4]=x,w[5]=A;else A=w[5];return A}var m=l;function Xa(){let{isTerminalFocused:n}=De(m);return n}function iue(){let{terminalFocusState:n}=De(m);return n}N();function _(){return k(JT)}var LH=(n,r)=>{let t=setTimeout(n,r);return()=>clearTimeout(t)},aue=()=>()=>{},sNt=()=>null;function k(n){let r=new Map,t=null,c=n,v=performance.now(),a=0;function R(){a=performance.now()-v;for(let o of r.keys())o()}function s(){if([...r.values()].some(Boolean)){if(t)clearInterval(t),t=null;t=setInterval(R,c)}else if(t)clearInterval(t),t=null}function f(o,u){return r.set(o,u),s(),()=>{r.delete(o),s()}}return{subscribeKeepAlive(o){return f(o,!0)},subscribeFollower(o){return f(o,!1)},now(){if(t&&a)return a;return performance.now()-v},setTickInterval(o){if(o===c)return;c=o,s()},setTimeout(o,u){let I=setTimeout(o,u);return()=>clearTimeout(I)}}}var RE=Yt(null),S=JT*2;function dsn(Y){let h=y(7),{children:C}=Y,[i]=d(_),p=Xa(),K,O;if(h[0]!==i||h[1]!==p)K=()=>{i.setTickInterval(p?JT:S)},O=[i,p],h[0]=i,h[1]=p,h[2]=K,h[3]=O;else K=h[2],O=h[3];E(K,O);let U;if(h[4]!==C||h[5]!==i)U=e(RE.Provider,{value:i,children:C}),h[4]=C,h[5]=i,h[6]=U;else U=h[6];return U}
export{JT,usn,Xa,iue,LH,aue,sNt,RE,dsn};
