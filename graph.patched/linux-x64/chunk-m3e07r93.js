// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{PT,q0}from"./chunk-ck3gk161.js";import{S}from"./chunk-6qjhsn35.js";import{Oft,k6n}from"./chunk-30p0nwys.js";import{s,n}from"./chunk-g8n1e3fe.js";import{yu}from"./chunk-rwjf1p9c.js";import{D}from"./chunk-bk6xhf5q.js";import{e,r}from"./chunk-437ab22y.js";import{N}from"./chunk-e82fscam.js";import{V,L}from"./chunk-cf8g1269.js";import{y}from"./chunk-bbmh8g33.js";var P="cyan_FOR_SUBAGENTS_ONLY";function uE(o){if(!o)return P;if(q0(o))return PT[o];return`ansi:${o}`}L();var u={keyCase:"lower"};function vG(Q){let t=S(18),{displayName:l,count:h,addMargin:G,fallbackLabel:_,body:a}=Q,k=h===void 0?1:h,W=G===void 0?!0:G,O=yu("app:toggleTranscript","Global","ctrl+o"),B;if(t[0]!==l||t[1]!==_)B=Oft(l)||_,t[0]=l,t[1]=_,t[2]=B;else B=t[2];let x=B,F;if(t[3]!==a)F=a?k6n(a):"",t[3]=a,t[4]=F;else F=t[4];let p=F;const C=W?1:0;let H;if(t[5]===y)H=r(n,{"aria-hidden":!0,children:[N.pointerSmall," "]}),t[5]=H;else H=t[5];const E=k===1?"Message":`${k} messages`;let m;if(t[6]!==p)m=p?r(n,{italic:!0,children:[": ",p]}):"",t[6]=p,t[7]=m;else m=t[7];let f;if(t[8]!==O)f=e(D,{chord:O,action:"expand",parens:!0,format:u}),t[8]=O,t[9]=f;else f=t[9];let c;if(t[10]!==x||t[11]!==E||t[12]!==m||t[13]!==f)c=r(n,{dimColor:!0,children:[H,E," from @",x,m," ",f]}),t[10]=x,t[11]=E,t[12]=m,t[13]=f,t[14]=c;else c=t[14];let U;if(t[15]!==c||t[16]!==C)U=e(s,{marginTop:C,children:c}),t[15]=c,t[16]=C,t[17]=U;else U=t[17];return U}
export{uE,vG};
