// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{y}from"./chunk-hshe4789.js";import{o}from"./chunk-dqjxa0y4.js";import{e}from"./chunk-zhg3ync1.js";import{Yt,De,N}from"./chunk-w8p0f9k6.js";N();N();var t=Yt(void 0);function PPe(){return De(t)}var l=2;function CMt(M){let c=y(10),{isFirst:u,useBriefLayout:V,selectionHighlight:a,children:s}=M,n=V?0:l;const r=n*2;let b;if(c[0]!==u||c[1]!==a||c[2]!==r)b={isQueued:!0,isFirst:u,paddingWidth:r,selectionHighlight:a},c[0]=u,c[1]=a,c[2]=r,c[3]=b;else b=c[3];let f=b,i;if(c[4]!==s||c[5]!==n)i=e(o,{paddingX:n,children:s}),c[4]=s,c[5]=n,c[6]=i;else i=c[6];let Q;if(c[7]!==i||c[8]!==f)Q=e(t.Provider,{value:f,children:i}),c[7]=i,c[8]=f,c[9]=Q;else Q=c[9];return Q}
export{PPe,CMt};
