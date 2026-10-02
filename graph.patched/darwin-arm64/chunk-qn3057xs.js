// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{w}from"./chunk-naky2abr.js";import{e}from"./chunk-ne6sbmea.js";import{fwe,Y3,Vpe}from"./chunk-5bzm606p.js";import{nh}from"./chunk-qcc5983a.js";import{Ut,Re,T,g,It,M}from"./chunk-757fgf90.js";M();M();var u=Ut({isTerminalFocused:!0,terminalFocusState:"unknown"});u.displayName="TerminalFocusContext";function Gor(c){let l=w(6),{children:r}=c,t=It(Vpe,fwe),n=It(Vpe,Y3),i;if(l[0]!==t||l[1]!==n)i={isTerminalFocused:t,terminalFocusState:n},l[0]=t,l[1]=n,l[2]=i;else i=l[2];let s=i,a;if(l[3]!==r||l[4]!==s)a=e(u.Provider,{value:s,children:r}),l[3]=r,l[4]=s,l[5]=a;else a=l[5];return a}var d=u;function Xa(){let{isTerminalFocused:c}=Re(d);return c}function A0e(){let{terminalFocusState:c}=Re(d);return c}M();function R(){return v(nh)}var Ek=(c,r)=>{let t=setTimeout(c,r);return()=>clearTimeout(t)},T0e=()=>()=>{},tTn=()=>null;function v(c){let r=new Map,t=null,n=c,l=performance.now(),i=0;function s(){i=performance.now()-l;for(let o of r.keys())o()}function a(){if([...r.values()].some(Boolean)){if(t!==null)clearInterval(t);else i=performance.now()-l;t=setInterval(s,n)}else if(t!==null)clearInterval(t),t=null}function f(o,m){return r.set(o,m),a(),()=>{r.delete(o),a()}}return{subscribeKeepAlive(o){return f(o,!0)},subscribeFollower(o){return f(o,!1)},now(){if(t!==null)return i;return performance.now()-l},setTickInterval(o){if(o===n)return;n=o,a()},setTimeout(o,m){let x=setTimeout(o,m);return()=>clearTimeout(x)}}}var BS=Ut(null),F=nh*2;function zor(c){let l=w(7),{children:r}=c,[t]=g(R),n=Xa(),i,s;if(l[0]!==t||l[1]!==n)i=()=>{t.setTickInterval(n?nh:F)},s=[t,n],l[0]=t,l[1]=n,l[2]=i,l[3]=s;else i=l[2],s=l[3];T(i,s);let a;if(l[4]!==r||l[5]!==t)a=e(BS.Provider,{value:t,children:r}),l[4]=r,l[5]=t,l[6]=a;else a=l[6];return a}
export{Gor,Xa,A0e,Ek,T0e,tTn,BS,zor};
