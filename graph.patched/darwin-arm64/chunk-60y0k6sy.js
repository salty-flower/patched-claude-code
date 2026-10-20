// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{hJn,yJn}from"./chunk-gzssw8ss.js";import{w}from"./chunk-mjaw4h5n.js";import{s,n}from"./chunk-t3eqa5fc.js";import{dkt}from"./chunk-9wg76754.js";import{Trt}from"./chunk-hzd6pqq3.js";import{U2}from"./chunk-v71p7jna.js";import{Ok}from"./chunk-hmt2at5g.js";import{e,r}from"./chunk-q4w894bt.js";function D_e(i){let a=w(26),{tone:o,text:l,detail:u,subLines:x,linkify:j}=i,t=j?U2:n,L=i.state==="live"&&!i.reducedMotion?yJn[i.frame%yJn.length]:hJn,h=o==="gold"?"warning":o==="red"?"error":void 0,D=o==="red";const T=o==="dim",k=o==="red"?"error:":o==="gold"?"warning:":void 0,R=o==="dim";let c;if(a[0]!==L||a[1]!==h||a[2]!==T||a[3]!==k||a[4]!==R)c=r(n,{"aria-hidden":T,"aria-label":k,italic:!0,color:h,dimColor:R,children:[L," "]}),a[0]=L,a[1]=h,a[2]=T,a[3]=k,a[4]=R,a[5]=c;else c=a[5];const Q=D?"error":void 0,V=!D;let f;if(a[6]!==t||a[7]!==l)f=e(t,{children:l}),a[6]=t,a[7]=l,a[8]=f;else f=a[8];let m;if(a[9]!==t||a[10]!==u)m=u!==void 0&&r(n,{dimColor:!0,children:[" \xB7 ",e(t,{children:u})]}),a[9]=t,a[10]=u,a[11]=m;else m=a[11];let y;if(a[12]!==Q||a[13]!==V||a[14]!==f||a[15]!==m)y=r(n,{italic:!0,color:Q,dimColor:V,children:[f,m]}),a[12]=Q,a[13]=V,a[14]=f,a[15]=m,a[16]=y;else y=a[16];let g;if(a[17]!==t||a[18]!==x)g=x?.map((z,G)=>e(n,{dimColor:!0,children:e(t,{children:z})},G)),a[17]=t,a[18]=x,a[19]=g;else g=a[19];let C;if(a[20]!==y||a[21]!==g)C=r(s,{flexDirection:"column",flexGrow:1,children:[y,g]}),a[20]=y,a[21]=g,a[22]=C;else C=a[22];let E;if(a[23]!==C||a[24]!==c)E=r(s,{flexDirection:"row",children:[c,C]}),a[23]=C,a[24]=c,a[25]=E;else E=a[25];return E}function Zw(i){let o=dkt(),l=Trt()?.isQueued===!0;return!i&&!o&&!l&&Ok()}function g5r(i){let o=Zw(i),l=Trt();return l?.isQueued===!0?l.noticeSystemLines:o}
export{D_e,Zw,g5r};
