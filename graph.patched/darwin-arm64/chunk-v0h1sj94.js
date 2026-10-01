// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{a}from"./chunk-1fpwxv0g.js";import{H}from"./chunk-zwbw6dvp.js";import{$Bn}from"./chunk-c83wajgc.js";import{yLe}from"./chunk-s3rnej3j.js";import{Lqt}from"./chunk-a8t9k6jw.js";import{w}from"./chunk-naky2abr.js";import{DQe}from"./chunk-hhsdsctv.js";import{T,g,M}from"./chunk-757fgf90.js";import{Doe}from"./chunk-x1yqyxg0.js";import{H3e,SL}from"./chunk-8xg5ns08.js";import{e}from"./chunk-ne6sbmea.js";import{y8t,gtt,QCt}from"./chunk-qqv5vjm8.js";import{b}from"./chunk-pj3wn6z3.js";M();var s={light:{background:"#f9f9f7",foreground:"#000000"},dark:{background:"#1f1f1e",foreground:"#ffffff"}};function zXr(i,n,t){if(!t)return;let r;if(i==="auto"){if(n===void 0)return;r=n}else r=QCt(i);return yLe(r)?s.light:s.dark}function l(){let t=w(4),[i,n]=g(y8t),r,o;if(t[0]===b)r=()=>gtt(()=>n(y8t())),o=[],t[0]=r,t[1]=o;else r=t[0],o=t[1];T(r,o);let m;if(t[2]!==i)m=zXr(Lqt(),i,$Bn()),t[2]=i,t[3]=m;else m=t[3];return m}function MEn(i){let m=w(9),{children:n,mouseTracking:t,killRing:r}=i,o=l(),c;if(m[0]!==n||m[1]!==r)c=e(DQe,{handle:r,children:n}),m[0]=n,m[1]=r,m[2]=c;else c=m[2];let f=c;if(H3e()){let d;if(m[3]!==t)d=t??SL(),m[3]=t,m[4]=d;else d=m[4];let p;if(m[5]!==o||m[6]!==d||m[7]!==f)p=e(Doe,{mouseTracking:d,surface:o,children:f}),m[5]=o,m[6]=d,m[7]=f,m[8]=p;else p=m[8];return p}return f}function Y5o(){if(H()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{zXr,MEn,Y5o};
