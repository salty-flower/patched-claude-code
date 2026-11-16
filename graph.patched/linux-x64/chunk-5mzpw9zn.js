// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{n}from"./chunk-bzk3ayzm.js";import{v}from"./chunk-mfqtr69m.js";import{ei}from"./chunk-wfvjxj7b.js";import{e}from"./chunk-zrhzz8fw.js";function Dfe(s){let b=v(3),{children:u,exitActive:o,onInterrupt:x,italic:r}=s,R=o===void 0?!0:o,t=r===void 0?!1:r,{pending:y,keyName:N}=ei(void 0,x,R);const i=y?`Press ${N} again to exit`:u;let a;if(b[0]!==t||b[1]!==i)a=e(n,{dimColor:!0,italic:t,children:i}),b[0]=t,b[1]=i,b[2]=a;else a=b[2];return a}
export{Dfe};
