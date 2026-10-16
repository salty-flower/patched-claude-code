// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{a}from"./chunk-k4g6y57j.js";import{Zbr}from"./chunk-e7a594zy.js";import{f5e}from"./chunk-vds4wvdn.js";import{zbn}from"./chunk-zs7j342k.js";import{w}from"./chunk-d6ktxc5j.js";import{lEt}from"./chunk-ssjr64sc.js";import{aye}from"./chunk-7tcfg23g.js";import{R4e,ZB}from"./chunk-nr6ryhnk.js";import{e}from"./chunk-esdbx0br.js";import{$Rn,CCt,x3t}from"./chunk-86ksdrva.js";import{P,y,F}from"./chunk-57p87fb1.js";import{O}from"./chunk-c1a9wnpp.js";import{b}from"./chunk-71kjn9x8.js";F();var s={light:{background:"#f9f9f7",foreground:"#000000"},dark:{background:"#1f1f1e",foreground:"#ffffff"}};function Dqo(i,n,t){if(!t)return;let r;if(i==="auto"){if(n===void 0)return;r=n}else r=x3t(i);return f5e(r)?s.light:s.dark}function l(){let t=w(4),[i,n]=y($Rn),r,o;if(t[0]===b)r=()=>CCt(()=>n($Rn())),o=[],t[0]=r,t[1]=o;else r=t[0],o=t[1];P(r,o);let m;if(t[2]!==i)m=Dqo(zbn(),i,Zbr()),t[2]=i,t[3]=m;else m=t[3];return m}function ZJn(i){let m=w(9),{children:n,mouseTracking:t,killRing:r}=i,o=l(),c;if(m[0]!==n||m[1]!==r)c=e(lEt,{handle:r,children:n}),m[0]=n,m[1]=r,m[2]=c;else c=m[2];let f=c;if(R4e()){let d;if(m[3]!==t)d=t??ZB(),m[3]=t,m[4]=d;else d=m[4];let p;if(m[5]!==o||m[6]!==d||m[7]!==f)p=e(aye,{mouseTracking:d,surface:o,children:f}),m[5]=o,m[6]=d,m[7]=f,m[8]=p;else p=m[8];return p}return f}function NJs(){if(O()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{Dqo,ZJn,NJs};
