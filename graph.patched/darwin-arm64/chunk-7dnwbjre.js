// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{E}from"./chunk-xysnb9s9.js";import{tt,s,Da}from"./chunk-b2f7pn4f.js";import{VLe}from"./chunk-2x0rzhys.js";import{ap}from"./chunk-0ebrjsyq.js";import{e}from"./chunk-zrhzz8fw.js";var t=150;function Y7t(M){let p=E(8),{tone:n,text:i}=M,T=ap(),N=tt(),o=T||N,[c,P]=Da(o?null:t);const f=Math.floor(P/t);let r;if(p[0]!==o||p[1]!==f||p[2]!==i||p[3]!==n)r=e(VLe,{state:"live",tone:n,text:i,linkify:!1,frame:f,reducedMotion:o}),p[0]=o,p[1]=f,p[2]=i,p[3]=n,p[4]=r;else r=p[4];let m;if(p[5]!==c||p[6]!==r)m=e(s,{ref:c,flexDirection:"column",children:r}),p[5]=c,p[6]=r,p[7]=m;else m=p[7];return m}var zLe=0;
export{Y7t,zLe};
