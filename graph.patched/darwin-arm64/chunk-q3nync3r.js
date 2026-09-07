// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{IE,yH}from"./chunk-yt8z1z01.js";import{_}from"./chunk-c8ey99v5.js";import{mAn,VYe}from"./chunk-n495pc0t.js";import{o,n}from"./chunk-hrm5smjv.js";import{rc}from"./chunk-572sv32a.js";import{D}from"./chunk-vpbxab4s.js";import{e,r}from"./chunk-smtaex5n.js";import{q,N}from"./chunk-jegfnmzv.js";import{M}from"./chunk-r3kz4g76.js";import{f}from"./chunk-te942vjn.js";var y="cyan_FOR_SUBAGENTS_ONLY";function kb(t){if(!t)return y;if(yH(t))return IE[t];return`ansi:${t}`}N();var A={keyCase:"lower"};function cB(Q){let i=_(18),{displayName:O,count:G,addMargin:k,fallbackLabel:x,body:a}=Q,S=G===void 0?1:G,V=k===void 0?!0:k,C=rc("app:toggleTranscript","Global","ctrl+o"),B;if(i[0]!==O||i[1]!==x)B=VYe(O)||x,i[0]=O,i[1]=x,i[2]=B;else B=i[2];let E=B,F;if(i[3]!==a)F=a?mAn(a):"",i[3]=a,i[4]=F;else F=i[4];let p=F;const u=V?1:0;let H;if(i[5]===f)H=r(n,{"aria-hidden":!0,children:[M.pointerSmall," "]}),i[5]=H;else H=i[5];const R=S===1?"Message":`${S} messages`;let m;if(i[6]!==p)m=p?r(n,{italic:!0,children:[": ",p]}):"",i[6]=p,i[7]=m;else m=i[7];let c;if(i[8]!==C)c=e(D,{chord:C,action:"expand",parens:!0,format:A}),i[8]=C,i[9]=c;else c=i[9];let T;if(i[10]!==E||i[11]!==R||i[12]!==m||i[13]!==c)T=r(n,{dimColor:!0,children:[H,R," from @",E,m," ",c]}),i[10]=E,i[11]=R,i[12]=m,i[13]=c,i[14]=T;else T=i[14];let U;if(i[15]!==T||i[16]!==u)U=e(o,{marginTop:u,children:T}),i[15]=T,i[16]=u,i[17]=U;else U=i[17];return U}
export{kb,cB};
