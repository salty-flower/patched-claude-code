// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{w}from"./chunk-zqxc4qtb.js";import{e}from"./chunk-f790ajz4.js";import{MUe,tte,JPe}from"./chunk-x7g4gvxc.js";import{bh}from"./chunk-bvy21rxm.js";import{Gt,Se,P,y,kt,j}from"./chunk-s8vmszp2.js";j();j();j();var u=Gt({isTerminalFocused:!0,terminalFocusState:"unknown"});u.displayName="TerminalFocusContext";function Wro(c){let l=w(6),{children:r}=c,t=kt(JPe,MUe),n=kt(JPe,tte),i;if(l[0]!==t||l[1]!==n)i={isTerminalFocused:t,terminalFocusState:n},l[0]=t,l[1]=n,l[2]=i;else i=l[2];let s=i,a;if(l[3]!==r||l[4]!==s)a=e(u.Provider,{value:s,children:r}),l[3]=r,l[4]=s,l[5]=a;else a=l[5];return a}var d=u;function Pc(){let{isTerminalFocused:c}=Se(d);return c}function $fe(){let{terminalFocusState:c}=Se(d);return c}function R(){return v(bh)}var i0=(c,r)=>{let t=setTimeout(c,r);return()=>clearTimeout(t)},x5e=()=>()=>{},chr=()=>null;function v(c){let r=new Map,t=null,n=c,l=performance.now(),i=0;function s(){i=performance.now()-l;for(let o of r.keys())o()}function a(){if([...r.values()].some(Boolean)){if(t!==null)clearInterval(t);else i=performance.now()-l;t=setInterval(s,n)}else if(t!==null)clearInterval(t),t=null}function f(o,m){return r.set(o,m),a(),()=>{r.delete(o),a()}}return{subscribeKeepAlive(o){return f(o,!0)},subscribeFollower(o){return f(o,!1)},now(){if(t!==null)return i;return performance.now()-l},setTickInterval(o){if(o===n)return;n=o,a()},setTimeout(o,m){let b=setTimeout(o,m);return()=>clearTimeout(b)}}}var vk=Gt(null),T=bh*2;function Gro(c){let l=w(7),{children:r}=c,[t]=y(R),n=Pc(),i,s;if(l[0]!==t||l[1]!==n)i=()=>{t.setTickInterval(n?bh:T)},s=[t,n],l[0]=t,l[1]=n,l[2]=i,l[3]=s;else i=l[2],s=l[3];P(i,s);let a;if(l[4]!==r||l[5]!==t)a=e(vk.Provider,{value:t,children:r}),l[4]=r,l[5]=t,l[6]=a;else a=l[6];return a}
export{Wro,Pc,$fe,i0,x5e,chr,vk,Gro};
