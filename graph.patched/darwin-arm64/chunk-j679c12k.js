// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{y}from"./chunk-pqa42v56.js";import{n}from"./chunk-86a8apqx.js";import{r}from"./chunk-6ccz96s4.js";function qc(k){let w=y(7),{children:a,color:e,textColor:x,padded:u,bold:d,wrap:l}=k,o=u?" ":"";const s=x??(e?"inverseText":void 0);let T;if(w[0]!==d||w[1]!==a||w[2]!==e||w[3]!==o||w[4]!==s||w[5]!==l)T=r(n,{backgroundColor:e,color:s,bold:d,wrap:l,children:[o,a,o]}),w[0]=d,w[1]=a,w[2]=e,w[3]=o,w[4]=s,w[5]=l,w[6]=T;else T=w[6];return T}
export{qc};
