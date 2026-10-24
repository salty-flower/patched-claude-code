// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{i}from"./chunk-9a41hw1t.js";import{O}from"./chunk-dz0rx1wn.js";import{zDr}from"./chunk-vsk9mzbd.js";import{cQe}from"./chunk-tkrm3286.js";import{FIn}from"./chunk-y6x1q9pp.js";import{w}from"./chunk-zqxc4qtb.js";import{yPt}from"./chunk-ea8pzfxk.js";import{hwe}from"./chunk-2fzp6mzy.js";import{m2e,R2}from"./chunk-e5dw09p7.js";import{e}from"./chunk-f790ajz4.js";import{gFn,LMt,tZt}from"./chunk-tnnwxyz2.js";import{P,y,j}from"./chunk-s8vmszp2.js";import{b}from"./chunk-meds60nn.js";j();var s={light:{background:"#f9f9f7",foreground:"#000000"},dark:{background:"#1f1f1e",foreground:"#ffffff"}};function vds(n,t,o){if(!o)return;let r;if(n==="auto"){if(t===void 0)return;r=t}else r=tZt(n);return cQe(r)?s.light:s.dark}function l(){let o=w(4),[n,t]=y(gFn),r,m;if(o[0]===b)r=()=>LMt(()=>t(gFn())),m=[],o[0]=r,o[1]=m;else r=o[0],m=o[1];P(r,m);let f;if(o[2]!==n)f=vds(FIn(),n,zDr()),o[2]=n,o[3]=f;else f=o[3];return f}function Dpr(n){let f=w(9),{children:t,mouseTracking:o,killRing:r}=n,m=l(),c;if(f[0]!==t||f[1]!==r)c=e(yPt,{handle:r,children:t}),f[0]=t,f[1]=r,f[2]=c;else c=f[2];let a=c;if(m2e()){let d;if(f[3]!==o)d=o??R2(),f[3]=o,f[4]=d;else d=f[4];let p;if(f[5]!==m||f[6]!==d||f[7]!==a)p=e(hwe,{mouseTracking:d,surface:m,children:a}),f[5]=m,f[6]=d,f[7]=a,f[8]=p;else p=f[8];return p}return a}function Yvi(){if(O()==="windows"||i.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{vds,Dpr,Yvi};
