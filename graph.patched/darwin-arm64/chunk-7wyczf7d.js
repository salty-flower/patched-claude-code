// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{a}from"./chunk-3a4khaz5.js";import{H}from"./chunk-0dpks9t0.js";import{GIn}from"./chunk-jbhgm9r2.js";import{uYt}from"./chunk-2myb9y3f.js";import{WBt,E8e}from"./chunk-c81s9ma0.js";import{w}from"./chunk-1qj92kzv.js";import{Zee}from"./chunk-drz5bcvf.js";import{l6e,hD}from"./chunk-5msfmr7e.js";import{e}from"./chunk-srmsc891.js";import{jzt,qXe,B_t}from"./chunk-r6584dv6.js";import{k,g,L}from"./chunk-1cnhgfv0.js";import{_}from"./chunk-q9zds4dm.js";L();var s={light:{background:"#f9f9f7",foreground:"#000000"},dark:{background:"#1f1f1e",foreground:"#ffffff"}};function VUr(i,n,t){if(!t)return;let r;if(i==="auto"){if(n===void 0)return;r=n}else r=B_t(i);return uYt(r)?s.light:s.dark}function l(){let t=w(4),[i,n]=g(jzt),r,o;if(t[0]===_)r=()=>qXe(()=>n(jzt())),o=[],t[0]=r,t[1]=o;else r=t[0],o=t[1];k(r,o);let m;if(t[2]!==i)m=VUr(WBt(),i,GIn()),t[2]=i,t[3]=m;else m=t[3];return m}function rpn(i){let m=w(9),{children:n,mouseTracking:t,killRing:r}=i,o=l(),c;if(m[0]!==n||m[1]!==r)c=e(E8e,{handle:r,children:n}),m[0]=n,m[1]=r,m[2]=c;else c=m[2];let f=c;if(l6e()){let d;if(m[3]!==t)d=t??hD(),m[3]=t,m[4]=d;else d=m[4];let p;if(m[5]!==o||m[6]!==d||m[7]!==f)p=e(Zee,{mouseTracking:d,surface:o,children:f}),m[5]=o,m[6]=d,m[7]=f,m[8]=p;else p=m[8];return p}return f}function fDo(){if(H()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{VUr,rpn,fDo};
