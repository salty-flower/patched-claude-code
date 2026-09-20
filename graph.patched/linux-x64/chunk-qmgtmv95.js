// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{fv}from"./chunk-rrga261b.js";import{ys}from"./chunk-847hpqqs.js";import{S}from"./chunk-6qjhsn35.js";import{n}from"./chunk-g8n1e3fe.js";import{e,r}from"./chunk-437ab22y.js";import{Yt}from"./chunk-bbmh8g33.js";var p=[" ","\u258F","\u258E","\u258D","\u258C","\u258B","\u258A","\u2589","\u2588"],x={fill:"\u25B0",empty:"\u25B1"},A={fill:"\u2588",empty:"\u2591"},M=()=>fv.hasGeometricShapesInkBleedBug()?A:x,T=(a)=>Math.min(1,Math.max(0,a)),B=(a,o)=>{let t=Math.floor(a*o),s=[ys(p.at(-1),t)];if(t<o){let f=a*o-t,m=Math.floor(f*(p.length-1));s.push(p[m]);let l=o-t-1;if(l>0)s.push(p[0].repeat(l))}return s.join("")};function Bb(q){let E=S(17),{ratio:_,width:c,fillColor:L,emptyColor:i,variant:I}=q,g=I===void 0?"block":I,u,h,P,y,b,k;if(E[0]!==i||E[1]!==L||E[2]!==_||E[3]!==g||E[4]!==c){k=Yt;bb0:{let C=T(_);if(g==="pill"){let{fill:v,empty:K}=M();let H=Math.round(C*c);k=r(n,{children:[e(n,{color:L,children:ys(v,H)}),e(n,{color:i,dimColor:i===void 0,children:ys(K,c-H)})]});break bb0}u=n;h=L;P=i;y=`${Math.round(C*100)}%`;b=B(C,c)}E[0]=i,E[1]=L,E[2]=_,E[3]=g,E[4]=c,E[5]=u,E[6]=h,E[7]=P,E[8]=y,E[9]=b,E[10]=k}else u=E[5],h=E[6],P=E[7],y=E[8],b=E[9],k=E[10];if(k!==Yt)return k;let Y;if(E[11]!==u||E[12]!==h||E[13]!==P||E[14]!==y||E[15]!==b)Y=e(u,{color:h,backgroundColor:P,"aria-label":y,children:b}),E[11]=u,E[12]=h,E[13]=P,E[14]=y,E[15]=b,E[16]=Y;else Y=E[16];return Y}
export{Bb};
