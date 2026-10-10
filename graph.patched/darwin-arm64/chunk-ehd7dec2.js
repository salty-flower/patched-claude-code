// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{a}from"./chunk-yvnhkg35.js";import{qcr}from"./chunk-wtdka69b.js";import{nqe}from"./chunk-5dxmnnh1.js";import{Ydn}from"./chunk-wz8v981w.js";import{w}from"./chunk-2mxgft48.js";import{Zmt}from"./chunk-p7tzn9jv.js";import{P,y,N}from"./chunk-kexg5hxg.js";import{wfe}from"./chunk-27gv812c.js";import{L6e,m1}from"./chunk-d65c1ax2.js";import{e}from"./chunk-d5st5fww.js";import{hSn,C_t,nWt}from"./chunk-8gfyrsf4.js";import{O}from"./chunk-xaes9ysz.js";import{b}from"./chunk-txt1tvjz.js";N();var s={light:{background:"#f9f9f7",foreground:"#000000"},dark:{background:"#1f1f1e",foreground:"#ffffff"}};function CDo(i,n,t){if(!t)return;let r;if(i==="auto"){if(n===void 0)return;r=n}else r=nWt(i);return nqe(r)?s.light:s.dark}function l(){let t=w(4),[i,n]=y(hSn),r,o;if(t[0]===b)r=()=>C_t(()=>n(hSn())),o=[],t[0]=r,t[1]=o;else r=t[0],o=t[1];P(r,o);let m;if(t[2]!==i)m=CDo(Ydn(),i,qcr()),t[2]=i,t[3]=m;else m=t[3];return m}function Aqn(i){let m=w(9),{children:n,mouseTracking:t,killRing:r}=i,o=l(),c;if(m[0]!==n||m[1]!==r)c=e(Zmt,{handle:r,children:n}),m[0]=n,m[1]=r,m[2]=c;else c=m[2];let f=c;if(L6e()){let d;if(m[3]!==t)d=t??m1(),m[3]=t,m[4]=d;else d=m[4];let p;if(m[5]!==o||m[6]!==d||m[7]!==f)p=e(wfe,{mouseTracking:d,surface:o,children:f}),m[5]=o,m[6]=d,m[7]=f,m[8]=p;else p=m[8];return p}return f}function R1s(){if(O()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{CDo,Aqn,R1s};
