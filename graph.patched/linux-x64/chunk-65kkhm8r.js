// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Nne,yL,cV}from"./chunk-k6ngpkhw.js";import{y}from"./chunk-wdpeygc3.js";import{e}from"./chunk-smtaex5n.js";import{Jt,De,E,d,wt,N}from"./chunk-vm1tjjym.js";var rk=16;N();N();var l=Jt({isTerminalFocused:!0,terminalFocusState:"unknown"});l.displayName="TerminalFocusContext";function QQt(H){let w=y(6),{children:T}=H,F=wt(cV,Nne),b=wt(cV,yL),P;if(w[0]!==F||w[1]!==b)P={isTerminalFocused:F,terminalFocusState:b},w[0]=F,w[1]=b,w[2]=P;else P=w[2];let x=P,A;if(w[3]!==T||w[4]!==x)A=e(l.Provider,{value:x,children:T}),w[3]=T,w[4]=x,w[5]=A;else A=w[5];return A}var m=l;function Fa(){let{isTerminalFocused:n}=De(m);return n}function Lae(){let{terminalFocusState:n}=De(m);return n}N();function _(){return k(rk)}var RN=(n,r)=>{let t=setTimeout(n,r);return()=>clearTimeout(t)},Pae=()=>()=>{},ULt=()=>null;function k(n){let r=new Map,t=null,c=n,v=performance.now(),a=0;function R(){a=performance.now()-v;for(let o of r.keys())o()}function s(){if([...r.values()].some(Boolean)){if(t)clearInterval(t),t=null;t=setInterval(R,c)}else if(t)clearInterval(t),t=null}function f(o,u){return r.set(o,u),s(),()=>{r.delete(o),s()}}return{subscribeKeepAlive(o){return f(o,!0)},subscribeFollower(o){return f(o,!1)},now(){if(t&&a)return a;return performance.now()-v},setTickInterval(o){if(o===c)return;c=o,s()},setTimeout(o,u){let I=setTimeout(o,u);return()=>clearTimeout(I)}}}var BT=Jt(null),S=rk*2;function ZQt(Y){let h=y(7),{children:C}=Y,[i]=d(_),p=Fa(),K,O;if(h[0]!==i||h[1]!==p)K=()=>{i.setTickInterval(p?rk:S)},O=[i,p],h[0]=i,h[1]=p,h[2]=K,h[3]=O;else K=h[2],O=h[3];E(K,O);let U;if(h[4]!==C||h[5]!==i)U=e(BT.Provider,{value:i,children:C}),h[4]=C,h[5]=i,h[6]=U;else U=h[6];return U}
export{rk,QQt,Fa,Lae,RN,Pae,ULt,BT,ZQt};
