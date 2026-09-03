// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{uA,BH}from"./chunk-scv00ktt.js";import{_}from"./chunk-0jrfbepr.js";import{bAn,TJe}from"./chunk-h6md7820.js";import{o,n}from"./chunk-t50adtrb.js";import{tp}from"./chunk-d4qnhqqr.js";import{F}from"./chunk-q1xyrhsh.js";import{e,r}from"./chunk-v5r13aq1.js";import{z,j}from"./chunk-xyxaqzpf.js";import{N}from"./chunk-tb0rqh1q.js";import{f}from"./chunk-bge67taw.js";var h="cyan_FOR_SUBAGENTS_ONLY";function Vb(t){if(!t)return h;if(BH(t))return uA[t];return`ansi:${t}`}j();var A={keyCase:"lower"};function zB(Q){let i=_(18),{displayName:O,count:y,addMargin:G,fallbackLabel:x,body:a}=Q,k=y===void 0?1:y,V=G===void 0?!0:G,C=tp("app:toggleTranscript","Global","ctrl+o"),S;if(i[0]!==O||i[1]!==x)S=TJe(O)||x,i[0]=O,i[1]=x,i[2]=S;else S=i[2];let E=S,B;if(i[3]!==a)B=a?bAn(a):"",i[3]=a,i[4]=B;else B=i[4];let p=B;const u=V?1:0;let H;if(i[5]===f)H=r(n,{"aria-hidden":!0,children:[N.pointerSmall," "]}),i[5]=H;else H=i[5];const R=k===1?"Message":`${k} messages`;let m;if(i[6]!==p)m=p?r(n,{italic:!0,children:[": ",p]}):"",i[6]=p,i[7]=m;else m=i[7];let c;if(i[8]!==C)c=e(F,{chord:C,action:"expand",parens:!0,format:A}),i[8]=C,i[9]=c;else c=i[9];let T;if(i[10]!==E||i[11]!==R||i[12]!==m||i[13]!==c)T=r(n,{dimColor:!0,children:[H,R," from @",E,m," ",c]}),i[10]=E,i[11]=R,i[12]=m,i[13]=c,i[14]=T;else T=i[14];let U;if(i[15]!==T||i[16]!==u)U=e(o,{marginTop:u,children:T}),i[15]=T,i[16]=u,i[17]=U;else U=i[17];return U}
export{Vb,zB};
