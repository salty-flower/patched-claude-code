// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-yhctzac5.js";import{e}from"./chunk-azctepqx.js";import{fn,ze,A,W,u,Rt,N}from"./chunk-q0z49y3j.js";import{XZ,l1,SK}from"./chunk-qgkp94ga.js";var ck=16;N();N();var l=fn({isTerminalFocused:!0,terminalFocusState:"unknown"});l.displayName="TerminalFocusContext";function VQt(H){let I=g(6),{children:T}=H,F=Rt(SK,XZ),b=Rt(SK,l1),w;if(I[0]!==F||I[1]!==b)w={isTerminalFocused:F,terminalFocusState:b},I[0]=F,I[1]=b,I[2]=w;else w=I[2];let x=w,P;if(I[3]!==T||I[4]!==x)P=e(l.Provider,{value:x,children:T}),I[3]=T,I[4]=x,I[5]=P;else P=I[5];return P}var p=l;function ca(){let{isTerminalFocused:n}=ze(p);return n}function Xme(){let{terminalFocusState:n}=ze(p);return n}N();function O(){return k(ck)}var u$=(n,r)=>{let t=setTimeout(n,r);return()=>clearTimeout(t)},Hie=()=>()=>{},yRt=()=>null;function k(n){let r=new Map,t=null,c=n,v=performance.now(),s=0;function y(){s=performance.now()-v;for(let o of r.keys())o()}function a(){if([...r.values()].some(Boolean)){if(t)clearInterval(t),t=null;t=setInterval(y,c)}else if(t)clearInterval(t),t=null}function f(o,m){return r.set(o,m),a(),()=>{r.delete(o),a()}}return{subscribeKeepAlive(o){return f(o,!0)},subscribeFollower(o){return f(o,!1)},now(){if(t&&s)return s;return performance.now()-v},setTickInterval(o){if(o===c)return;c=o,a()},setTimeout(o,m){let R=setTimeout(o,m);return()=>clearTimeout(R)}}}var $T=fn(null),S=ck*2;function KQt(Z){let h=g(7),{children:C}=Z,[i]=u(O),d=ca(),E,K;if(h[0]!==i||h[1]!==d)E=()=>{i.setTickInterval(d?ck:S)},K=[i,d],h[0]=i,h[1]=d,h[2]=E,h[3]=K;else E=h[2],K=h[3];A(E,K);let M;if(h[4]!==C||h[5]!==i)M=e($T.Provider,{value:i,children:C}),h[4]=C,h[5]=i,h[6]=M;else M=h[6];return M}
export{ck,VQt,ca,Xme,u$,Hie,yRt,$T,KQt};
