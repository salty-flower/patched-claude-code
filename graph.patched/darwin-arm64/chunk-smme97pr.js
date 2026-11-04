// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{n}from"./chunk-v5qk8x3w.js";import{b}from"./chunk-6r9k9nrd.js";import{Fs}from"./chunk-4kyffp04.js";import{e}from"./chunk-6n4z8qxn.js";function nae(s){let g=b(3),{children:u,exitActive:o,onInterrupt:x,italic:r}=s,R=o===void 0?!0:o,t=r===void 0?!1:r,{pending:y,keyName:N}=Fs(void 0,x,R);const i=y?`Press ${N} again to exit`:u;let a;if(g[0]!==t||g[1]!==i)a=e(n,{dimColor:!0,italic:t,children:i}),g[0]=t,g[1]=i,g[2]=a;else a=g[2];return a}
export{nae};
