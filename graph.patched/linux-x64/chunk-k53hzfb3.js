// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{a}from"./chunk-rptge3r8.js";import{O}from"./chunk-3s94kw4m.js";import{Rrr}from"./chunk-y371wfzn.js";import{JGe}from"./chunk-68mnexjh.js";import{csn}from"./chunk-k59vzwys.js";import{w}from"./chunk-c74pxqn1.js";import{Qdt}from"./chunk-19bdn74s.js";import{P,g,N}from"./chunk-y6zm4y48.js";import{Kde}from"./chunk-rj6w5f03.js";import{yZe,qF}from"./chunk-ketsw8kh.js";import{e}from"./chunk-efrp9dmx.js";import{jfn,Imt,uUt}from"./chunk-pss7bgmv.js";import{S}from"./chunk-0y12vz6b.js";N();var s={light:{background:"#f9f9f7",foreground:"#000000"},dark:{background:"#1f1f1e",foreground:"#ffffff"}};function QAo(i,n,t){if(!t)return;let r;if(i==="auto"){if(n===void 0)return;r=n}else r=uUt(i);return JGe(r)?s.light:s.dark}function l(){let t=w(4),[i,n]=g(jfn),r,o;if(t[0]===S)r=()=>Imt(()=>n(jfn())),o=[],t[0]=r,t[1]=o;else r=t[0],o=t[1];P(r,o);let m;if(t[2]!==i)m=QAo(csn(),i,Rrr()),t[2]=i,t[3]=m;else m=t[3];return m}function hjn(i){let m=w(9),{children:n,mouseTracking:t,killRing:r}=i,o=l(),c;if(m[0]!==n||m[1]!==r)c=e(Qdt,{handle:r,children:n}),m[0]=n,m[1]=r,m[2]=c;else c=m[2];let f=c;if(yZe()){let d;if(m[3]!==t)d=t??qF(),m[3]=t,m[4]=d;else d=m[4];let p;if(m[5]!==o||m[6]!==d||m[7]!==f)p=e(Kde,{mouseTracking:d,surface:o,children:f}),m[5]=o,m[6]=d,m[7]=f,m[8]=p;else p=m[8];return p}return f}function fPs(){if(O()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{QAo,hjn,fPs};
