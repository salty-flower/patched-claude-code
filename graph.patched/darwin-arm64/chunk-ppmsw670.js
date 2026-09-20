// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{OT,rO}from"./chunk-r75dbkc6.js";import{b}from"./chunk-mvpw0rjp.js";import{qft,YKn}from"./chunk-g4c6ggz4.js";import{s,n}from"./chunk-cskdt2sa.js";import{hu}from"./chunk-pbteyy1k.js";import{L}from"./chunk-kbj067kk.js";import{e,r}from"./chunk-437ab22y.js";import{N}from"./chunk-z0473pgd.js";import{q,M}from"./chunk-ncc6kxz8.js";import{y}from"./chunk-y8wd7we8.js";var h="cyan_FOR_SUBAGENTS_ONLY";function fv(o){if(!o)return h;if(rO(o))return OT[o];return`ansi:${o}`}M();var u={keyCase:"lower"};function Iz(V){let t=b(18),{displayName:l,count:G,addMargin:k,fallbackLabel:_,body:a}=V,S=G===void 0?1:G,W=k===void 0?!0:k,O=hu("app:toggleTranscript","Global","ctrl+o"),B;if(t[0]!==l||t[1]!==_)B=qft(l)||_,t[0]=l,t[1]=_,t[2]=B;else B=t[2];let x=B,F;if(t[3]!==a)F=a?YKn(a):"",t[3]=a,t[4]=F;else F=t[4];let p=F;const C=W?1:0;let H;if(t[5]===y)H=r(n,{"aria-hidden":!0,children:[N.pointerSmall," "]}),t[5]=H;else H=t[5];const E=S===1?"Message":`${S} messages`;let m;if(t[6]!==p)m=p?r(n,{italic:!0,children:[": ",p]}):"",t[6]=p,t[7]=m;else m=t[7];let f;if(t[8]!==O)f=e(L,{chord:O,action:"expand",parens:!0,format:u}),t[8]=O,t[9]=f;else f=t[9];let c;if(t[10]!==x||t[11]!==E||t[12]!==m||t[13]!==f)c=r(n,{dimColor:!0,children:[H,E," from @",x,m," ",f]}),t[10]=x,t[11]=E,t[12]=m,t[13]=f,t[14]=c;else c=t[14];let U;if(t[15]!==c||t[16]!==C)U=e(s,{marginTop:C,children:c}),t[15]=c,t[16]=C,t[17]=U;else U=t[17];return U}
export{fv,Iz};
