// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{y}from"./chunk-pqa42v56.js";import{o}from"./chunk-86a8apqx.js";import{e}from"./chunk-6ccz96s4.js";import{yn,qe,K,j}from"./chunk-8wk5q2vw.js";j();j();var t=yn(void 0);function HIe(){return qe(t)}var g=2;function iDt(P){let p=y(10),{isFirst:r,useBriefLayout:V,selectionHighlight:s,children:f}=P,d=V?0:g;const c=d*2;let h;if(p[0]!==r||p[1]!==s||p[2]!==c)h={isQueued:!0,isFirst:r,paddingWidth:c,selectionHighlight:s},p[0]=r,p[1]=s,p[2]=c,p[3]=h;else h=p[3];let l=h,u;if(p[4]!==f||p[5]!==d)u=e(o,{paddingX:d,children:f}),p[4]=f,p[5]=d,p[6]=u;else u=p[6];let m;if(p[7]!==u||p[8]!==l)m=e(t.Provider,{value:l,children:u}),p[7]=u,p[8]=l,p[9]=m;else m=p[9];return m}
export{HIe,iDt};
