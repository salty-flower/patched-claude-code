// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{b}from"./chunk-mvpw0rjp.js";import{e}from"./chunk-437ab22y.js";import{Fae,GD,gq}from"./chunk-22dphw0k.js";import{Qt,Ne,A,d,kt,M}from"./chunk-ncc6kxz8.js";var y_=16,qlr=50,Klr=4;M();M();var l=Qt({isTerminalFocused:!0,terminalFocusState:"unknown"});l.displayName="TerminalFocusContext";function nCn(D){let N=b(6),{children:f}=D,F=kt(gq,Fae),x=kt(gq,GD),_;if(N[0]!==F||N[1]!==x)_={isTerminalFocused:F,terminalFocusState:x},N[0]=F,N[1]=x,N[2]=_;else _=N[2];let I=_,P;if(N[3]!==f||N[4]!==I)P=e(l.Provider,{value:I,children:f}),N[3]=f,N[4]=I,N[5]=P;else P=N[5];return P}var m=l;function Fl(){let{isTerminalFocused:n}=Ne(m);return n}function fye(){let{terminalFocusState:n}=Ne(m);return n}M();function h(){return C(y_)}var eT=(n,r)=>{let t=setTimeout(n,r);return()=>clearTimeout(t)},mye=()=>()=>{},jqt=()=>null;function C(n){let r=new Map,t=null,i=n,T=performance.now(),s=0;function k(){s=performance.now()-T;for(let o of r.keys())o()}function a(){if([...r.values()].some(Boolean)){if(t)clearInterval(t),t=null;t=setInterval(k,i)}else if(t)clearInterval(t),t=null}function v(o,u){return r.set(o,u),a(),()=>{r.delete(o),a()}}return{subscribeKeepAlive(o){return v(o,!0)},subscribeFollower(o){return v(o,!1)},now(){if(t&&s)return s;return performance.now()-T},setTickInterval(o){if(o===i)return;i=o,a()},setTimeout(o,u){let y=setTimeout(o,u);return()=>clearTimeout(y)}}}var Iy=Qt(null),S=y_*2;function rCn(X){let w=b(7),{children:R}=X,[c]=d(h),p=Fl(),E,O;if(w[0]!==c||w[1]!==p)E=()=>{c.setTickInterval(p?y_:S)},O=[c,p],w[0]=c,w[1]=p,w[2]=E,w[3]=O;else E=w[2],O=w[3];A(E,O);let U;if(w[4]!==R||w[5]!==c)U=e(Iy.Provider,{value:c,children:R}),w[4]=R,w[5]=c,w[6]=U;else U=w[6];return U}
export{y_,qlr,Klr,nCn,Fl,fye,eT,mye,jqt,Iy,rCn};
