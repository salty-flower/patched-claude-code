// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{w}from"./chunk-2mxgft48.js";import{Pmt}from"./chunk-tmm8mxey.js";import{Imt}from"./chunk-z0j09x94.js";import{iWn,aWn}from"./chunk-3cynezh1.js";import{s,n}from"./chunk-1r9zp6s1.js";import{Ej}from"./chunk-qk5dmnqk.js";import{QD}from"./chunk-356hrhz3.js";import{e,r}from"./chunk-d5st5fww.js";function sk(d){let t=Pmt(),m=Imt()?.isQueued===!0;return!d&&!t&&!m&&QD()}function HXe(d){let l=w(25),{tone:t,text:m,detail:c,subLines:T,linkify:P}=d,o=P?Ej:n,h=d.state==="live"&&!d.reducedMotion?aWn[d.frame%aWn.length]:iWn,a=t==="gold"?"warning":t==="red"?"error":void 0,i=t==="dim";const R=t==="red"?"error:":t==="gold"?"warning:":void 0;let u;if(l[0]!==a||l[1]!==i||l[2]!==h||l[3]!==R)u=r(n,{"aria-hidden":i,"aria-label":R,italic:!0,color:a,dimColor:i,children:[h," "]}),l[0]=a,l[1]=i,l[2]=h,l[3]=R,l[4]=u;else u=l[4];let g;if(l[5]!==o||l[6]!==m)g=e(o,{children:m}),l[5]=o,l[6]=m,l[7]=g;else g=l[7];let y;if(l[8]!==o||l[9]!==c)y=c!==void 0&&r(n,{dimColor:!0,children:[" \xB7 ",e(o,{children:c})]}),l[8]=o,l[9]=c,l[10]=y;else y=l[10];let C;if(l[11]!==a||l[12]!==i||l[13]!==g||l[14]!==y)C=r(n,{italic:!0,color:a,dimColor:i,children:[g,y]}),l[11]=a,l[12]=i,l[13]=g,l[14]=y,l[15]=C;else C=l[15];let b;if(l[16]!==o||l[17]!==T)b=T?.map((S,V)=>e(n,{dimColor:!0,children:e(o,{children:S})},V)),l[16]=o,l[17]=T,l[18]=b;else b=l[18];let x;if(l[19]!==C||l[20]!==b)x=r(s,{flexDirection:"column",flexGrow:1,children:[C,b]}),l[19]=C,l[20]=b,l[21]=x;else x=l[21];let Q;if(l[22]!==u||l[23]!==x)Q=r(s,{flexDirection:"row",children:[u,x]}),l[22]=u,l[23]=x,l[24]=Q;else Q=l[24];return Q}
export{HXe,sk};
