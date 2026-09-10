// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Bse,VI,IV}from"./chunk-7vwaegwm.js";import{y}from"./chunk-jy8hazaz.js";import{e}from"./chunk-qs39f0kj.js";import{qt,Le,E,d,Ct,M}from"./chunk-xgsrj7pc.js";var pb=16,_3n=50,S3n=4;M();M();var l=qt({isTerminalFocused:!0,terminalFocusState:"unknown"});l.displayName="TerminalFocusContext";function San(D){let N=y(6),{children:f}=D,F=Ct(IV,Bse),x=Ct(IV,VI),_;if(N[0]!==F||N[1]!==x)_={isTerminalFocused:F,terminalFocusState:x},N[0]=F,N[1]=x,N[2]=_;else _=N[2];let I=_,P;if(N[3]!==f||N[4]!==I)P=e(l.Provider,{value:I,children:f}),N[3]=f,N[4]=I,N[5]=P;else P=N[5];return P}var m=l;function tl(){let{isTerminalFocused:n}=Le(m);return n}function ede(){let{terminalFocusState:n}=Le(m);return n}M();function h(){return R(pb)}var e0=(n,r)=>{let t=setTimeout(n,r);return()=>clearTimeout(t)},tde=()=>()=>{},r1t=()=>null;function R(n){let r=new Map,t=null,i=n,T=performance.now(),s=0;function S(){s=performance.now()-T;for(let o of r.keys())o()}function a(){if([...r.values()].some(Boolean)){if(t)clearInterval(t),t=null;t=setInterval(S,i)}else if(t)clearInterval(t),t=null}function v(o,u){return r.set(o,u),a(),()=>{r.delete(o),a()}}return{subscribeKeepAlive(o){return v(o,!0)},subscribeFollower(o){return v(o,!1)},now(){if(t&&s)return s;return performance.now()-T},setTickInterval(o){if(o===i)return;i=o,a()},setTimeout(o,u){let k=setTimeout(o,u);return()=>clearTimeout(k)}}}var cS=qt(null),C=pb*2;function ban(X){let w=y(7),{children:b}=X,[c]=d(h),p=tl(),A,O;if(w[0]!==c||w[1]!==p)A=()=>{c.setTickInterval(p?pb:C)},O=[c,p],w[0]=c,w[1]=p,w[2]=A,w[3]=O;else A=w[2],O=w[3];E(A,O);let U;if(w[4]!==b||w[5]!==c)U=e(cS.Provider,{value:c,children:b}),w[4]=b,w[5]=c,w[6]=U;else U=w[6];return U}
export{pb,_3n,S3n,San,tl,ede,e0,tde,r1t,cS,ban};
