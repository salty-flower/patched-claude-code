// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{E}from"./chunk-xysnb9s9.js";import{bn}from"./chunk-1f8jcja6.js";import{n}from"./chunk-b2f7pn4f.js";import{e}from"./chunk-zrhzz8fw.js";function MAe(M){let d=E(10),{elapsedTimeSeconds:l,timeoutMs:i}=M;if(l===void 0&&!i){return null}let f;if(d[0]!==i)f=i?bn(i,{hideTrailingZeros:!0}):void 0,d[0]=i,d[1]=f;else f=d[1];let a=f;if(l===void 0){const t=`(timeout ${a})`;let m;if(d[2]!==t)m=e(n,{dimColor:!0,children:t}),d[2]=t,d[3]=m;else m=d[3];return m}const t=l*1000;let m;if(d[4]!==t)m=bn(t),d[4]=t,d[5]=m;else m=d[5];let T=m;if(a){const o=`(${T} \xB7 timeout ${a})`;let s;if(d[6]!==o)s=e(n,{dimColor:!0,children:o}),d[6]=o,d[7]=s;else s=d[7];return s}const o=`(${T})`;let s;if(d[8]!==o)s=e(n,{dimColor:!0,children:o}),d[8]=o,d[9]=s;else s=d[9];return s}
export{MAe};
