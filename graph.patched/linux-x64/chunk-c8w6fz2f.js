// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{a}from"./chunk-xwn0mfnc.js";import{OSr}from"./chunk-gegagysk.js";import{s5e}from"./chunk-hyqn7bn1.js";import{PSn}from"./chunk-0zd0ne0d.js";import{w}from"./chunk-j2ak5p7d.js";import{svt}from"./chunk-kyg7yqv9.js";import{Zhe}from"./chunk-hwb8mk23.js";import{S6e,W1}from"./chunk-d02vk0df.js";import{e}from"./chunk-esdbx0br.js";import{yRn,mTt,gYt}from"./chunk-609b14fj.js";import{P,y,F}from"./chunk-zx300qjj.js";import{O}from"./chunk-29rv67gt.js";import{S}from"./chunk-a2q6egn2.js";F();var s={light:{background:"#f9f9f7",foreground:"#000000"},dark:{background:"#1f1f1e",foreground:"#ffffff"}};function PKo(i,n,t){if(!t)return;let r;if(i==="auto"){if(n===void 0)return;r=n}else r=gYt(i);return s5e(r)?s.light:s.dark}function l(){let t=w(4),[i,n]=y(yRn),r,o;if(t[0]===S)r=()=>mTt(()=>n(yRn())),o=[],t[0]=r,t[1]=o;else r=t[0],o=t[1];P(r,o);let m;if(t[2]!==i)m=PKo(PSn(),i,OSr()),t[2]=i,t[3]=m;else m=t[3];return m}function vQn(i){let m=w(9),{children:n,mouseTracking:t,killRing:r}=i,o=l(),c;if(m[0]!==n||m[1]!==r)c=e(svt,{handle:r,children:n}),m[0]=n,m[1]=r,m[2]=c;else c=m[2];let f=c;if(S6e()){let d;if(m[3]!==t)d=t??W1(),m[3]=t,m[4]=d;else d=m[4];let p;if(m[5]!==o||m[6]!==d||m[7]!==f)p=e(Zhe,{mouseTracking:d,surface:o,children:f}),m[5]=o,m[6]=d,m[7]=f,m[8]=p;else p=m[8];return p}return f}function QJs(){if(O()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{PKo,vQn,QJs};
