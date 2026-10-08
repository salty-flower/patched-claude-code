// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{a}from"./chunk-70qqbqq4.js";import{O}from"./chunk-tdmgys2e.js";import{Grr}from"./chunk-9539gh7t.js";import{s6e}from"./chunk-yq3gar3r.js";import{Csn}from"./chunk-hhh87hga.js";import{w}from"./chunk-p3sxj9wz.js";import{iut}from"./chunk-n0cx1shy.js";import{P,g,N}from"./chunk-f6geyac8.js";import{eue}from"./chunk-fehpregq.js";import{CZe,n1}from"./chunk-bhgm2prc.js";import{e}from"./chunk-efrp9dmx.js";import{Ufn,Imt,g1t}from"./chunk-297ywkpz.js";import{b}from"./chunk-8drz5tx3.js";N();var s={light:{background:"#f9f9f7",foreground:"#000000"},dark:{background:"#1f1f1e",foreground:"#ffffff"}};function PTo(i,n,t){if(!t)return;let r;if(i==="auto"){if(n===void 0)return;r=n}else r=g1t(i);return s6e(r)?s.light:s.dark}function l(){let t=w(4),[i,n]=g(Ufn),r,o;if(t[0]===b)r=()=>Imt(()=>n(Ufn())),o=[],t[0]=r,t[1]=o;else r=t[0],o=t[1];P(r,o);let m;if(t[2]!==i)m=PTo(Csn(),i,Grr()),t[2]=i,t[3]=m;else m=t[3];return m}function Ljn(i){let m=w(9),{children:n,mouseTracking:t,killRing:r}=i,o=l(),c;if(m[0]!==n||m[1]!==r)c=e(iut,{handle:r,children:n}),m[0]=n,m[1]=r,m[2]=c;else c=m[2];let f=c;if(CZe()){let d;if(m[3]!==t)d=t??n1(),m[3]=t,m[4]=d;else d=m[4];let p;if(m[5]!==o||m[6]!==d||m[7]!==f)p=e(eue,{mouseTracking:d,surface:o,children:f}),m[5]=o,m[6]=d,m[7]=f,m[8]=p;else p=m[8];return p}return f}function XPs(){if(O()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{PTo,Ljn,XPs};
