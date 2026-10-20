// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{a}from"./chunk-h422gpw8.js";import{M}from"./chunk-x352w4g5.js";import{qTr}from"./chunk-md85aze8.js";import{lYe}from"./chunk-1kmtmjdd.js";import{wkn}from"./chunk-c0bn6tna.js";import{w}from"./chunk-mjaw4h5n.js";import{Dkt}from"./chunk-hfmjgjz7.js";import{b_e}from"./chunk-8c3sma9r.js";import{U1e,Nj}from"./chunk-22qgmzn0.js";import{e}from"./chunk-q4w894bt.js";import{WIn,qAt,w9t}from"./chunk-xknyk8kt.js";import{P,y,B}from"./chunk-2txtxkxk.js";import{b}from"./chunk-8xa87pyw.js";B();var s={light:{background:"#f9f9f7",foreground:"#000000"},dark:{background:"#1f1f1e",foreground:"#ffffff"}};function R7o(i,n,t){if(!t)return;let r;if(i==="auto"){if(n===void 0)return;r=n}else r=w9t(i);return lYe(r)?s.light:s.dark}function l(){let t=w(4),[i,n]=y(WIn),r,o;if(t[0]===b)r=()=>qAt(()=>n(WIn())),o=[],t[0]=r,t[1]=o;else r=t[0],o=t[1];P(r,o);let m;if(t[2]!==i)m=R7o(wkn(),i,qTr()),t[2]=i,t[3]=m;else m=t[3];return m}function Mrr(i){let m=w(9),{children:n,mouseTracking:t,killRing:r}=i,o=l(),c;if(m[0]!==n||m[1]!==r)c=e(Dkt,{handle:r,children:n}),m[0]=n,m[1]=r,m[2]=c;else c=m[2];let f=c;if(U1e()){let d;if(m[3]!==t)d=t??Nj(),m[3]=t,m[4]=d;else d=m[4];let p;if(m[5]!==o||m[6]!==d||m[7]!==f)p=e(b_e,{mouseTracking:d,surface:o,children:f}),m[5]=o,m[6]=d,m[7]=f,m[8]=p;else p=m[8];return p}return f}function kli(){if(M()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{R7o,Mrr,kli};
