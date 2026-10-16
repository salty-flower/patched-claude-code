// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{w}from"./chunk-j2ak5p7d.js";import{e}from"./chunk-esdbx0br.js";import{i0e,DQ,wAe}from"./chunk-vdmn3rkh.js";import{Rg}from"./chunk-9kfxy7ak.js";import{Gt,Ee,P,y,Lt,F}from"./chunk-zx300qjj.js";F();F();F();var u=Gt({isTerminalFocused:!0,terminalFocusState:"unknown"});u.displayName="TerminalFocusContext";function jKr(c){let l=w(6),{children:r}=c,t=Lt(wAe,i0e),n=Lt(wAe,DQ),i;if(l[0]!==t||l[1]!==n)i={isTerminalFocused:t,terminalFocusState:n},l[0]=t,l[1]=n,l[2]=i;else i=l[2];let s=i,a;if(l[3]!==r||l[4]!==s)a=e(u.Provider,{value:s,children:r}),l[3]=r,l[4]=s,l[5]=a;else a=l[5];return a}var d=u;function tc(){let{isTerminalFocused:c}=Ee(d);return c}function Ode(){let{terminalFocusState:c}=Ee(d);return c}function h(){return v(Rg)}var vO=(c,r)=>{let t=setTimeout(c,r);return()=>clearTimeout(t)},dVe=()=>()=>{},$tr=()=>null;function v(c){let r=new Map,t=null,n=c,l=performance.now(),i=0;function s(){i=performance.now()-l;for(let o of r.keys())o()}function a(){if([...r.values()].some(Boolean)){if(t!==null)clearInterval(t);else i=performance.now()-l;t=setInterval(s,n)}else if(t!==null)clearInterval(t),t=null}function f(o,m){return r.set(o,m),a(),()=>{r.delete(o),a()}}return{subscribeKeepAlive(o){return f(o,!0)},subscribeFollower(o){return f(o,!1)},now(){if(t!==null)return i;return performance.now()-l},setTickInterval(o){if(o===n)return;n=o,a()},setTimeout(o,m){let x=setTimeout(o,m);return()=>clearTimeout(x)}}}var gE=Gt(null),T=Rg*2;function WKr(c){let l=w(7),{children:r}=c,[t]=y(h),n=tc(),i,s;if(l[0]!==t||l[1]!==n)i=()=>{t.setTickInterval(n?Rg:T)},s=[t,n],l[0]=t,l[1]=n,l[2]=i,l[3]=s;else i=l[2],s=l[3];P(i,s);let a;if(l[4]!==r||l[5]!==t)a=e(gE.Provider,{value:t,children:r}),l[4]=r,l[5]=t,l[6]=a;else a=l[6];return a}
export{jKr,tc,Ode,vO,dVe,$tr,gE,WKr};
