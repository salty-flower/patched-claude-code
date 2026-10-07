// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{a}from"./chunk-869zfth6.js";import{O}from"./chunk-z9b8syjk.js";import{uQn}from"./chunk-6h8cx75c.js";import{SWe}from"./chunk-frj2mq7f.js";import{zen}from"./chunk-38c5qssg.js";import{w}from"./chunk-fetrqmkr.js";import{$at}from"./chunk-k35c75vw.js";import{x,g,L}from"./chunk-1mwacejt.js";import{uce}from"./chunk-8bw3p9et.js";import{bJe,Q$}from"./chunk-2krsmm03.js";import{e}from"./chunk-mq8eg5v4.js";import{Scn,uut,SLt}from"./chunk-s2b41k31.js";import{S}from"./chunk-grvgfqgm.js";L();var s={light:{background:"#f9f9f7",foreground:"#000000"},dark:{background:"#1f1f1e",foreground:"#ffffff"}};function f_o(i,n,t){if(!t)return;let r;if(i==="auto"){if(n===void 0)return;r=n}else r=SLt(i);return SWe(r)?s.light:s.dark}function l(){let t=w(4),[i,n]=g(Scn),r,o;if(t[0]===S)r=()=>uut(()=>n(Scn())),o=[],t[0]=r,t[1]=o;else r=t[0],o=t[1];x(r,o);let m;if(t[2]!==i)m=f_o(zen(),i,uQn()),t[2]=i,t[3]=m;else m=t[3];return m}function RNn(i){let m=w(9),{children:n,mouseTracking:t,killRing:r}=i,o=l(),c;if(m[0]!==n||m[1]!==r)c=e($at,{handle:r,children:n}),m[0]=n,m[1]=r,m[2]=c;else c=m[2];let f=c;if(bJe()){let d;if(m[3]!==t)d=t??Q$(),m[3]=t,m[4]=d;else d=m[4];let p;if(m[5]!==o||m[6]!==d||m[7]!==f)p=e(uce,{mouseTracking:d,surface:o,children:f}),m[5]=o,m[6]=d,m[7]=f,m[8]=p;else p=m[8];return p}return f}function aSs(){if(O()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{f_o,RNn,aSs};
