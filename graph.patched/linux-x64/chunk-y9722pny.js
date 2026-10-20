// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{a}from"./chunk-cd1a8ced.js";import{M}from"./chunk-tbekftmt.js";import{CAr}from"./chunk-xhw39gk1.js";import{e9e}from"./chunk-pc8y5w4b.js";import{ikn}from"./chunk-y9rv6125.js";import{w}from"./chunk-eg40vngy.js";import{Rkt}from"./chunk-xm140g2n.js";import{m_e}from"./chunk-6mr28v96.js";import{IBe,Cj}from"./chunk-kqw5gvfe.js";import{e}from"./chunk-8d2nhg02.js";import{PIn,jCt,p3t}from"./chunk-3n8fpmvp.js";import{P,y,B}from"./chunk-a2fszd78.js";import{S}from"./chunk-ye9f1kvm.js";B();var s={light:{background:"#f9f9f7",foreground:"#000000"},dark:{background:"#1f1f1e",foreground:"#ffffff"}};function YXo(i,n,t){if(!t)return;let r;if(i==="auto"){if(n===void 0)return;r=n}else r=p3t(i);return e9e(r)?s.light:s.dark}function l(){let t=w(4),[i,n]=y(PIn),r,o;if(t[0]===S)r=()=>jCt(()=>n(PIn())),o=[],t[0]=r,t[1]=o;else r=t[0],o=t[1];P(r,o);let m;if(t[2]!==i)m=YXo(ikn(),i,CAr()),t[2]=i,t[3]=m;else m=t[3];return m}function frr(i){let m=w(9),{children:n,mouseTracking:t,killRing:r}=i,o=l(),c;if(m[0]!==n||m[1]!==r)c=e(Rkt,{handle:r,children:n}),m[0]=n,m[1]=r,m[2]=c;else c=m[2];let f=c;if(IBe()){let d;if(m[3]!==t)d=t??Cj(),m[3]=t,m[4]=d;else d=m[4];let p;if(m[5]!==o||m[6]!==d||m[7]!==f)p=e(m_e,{mouseTracking:d,surface:o,children:f}),m[5]=o,m[6]=d,m[7]=f,m[8]=p;else p=m[8];return p}return f}function Uai(){if(M()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{YXo,frr,Uai};
