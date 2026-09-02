// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Pn}from"./chunk-04aem4bh.js";import{rbe,$r}from"./chunk-fy12d89p.js";import{Et}from"./chunk-nag2zkkq.js";import{_}from"./chunk-rykc5fv4.js";import{o,t}from"./chunk-hm4dvvtr.js";import{Ym}from"./chunk-henr7gh8.js";import{Pe}from"./chunk-rhdx4g9g.js";import{e,r}from"./chunk-wk3xnwvn.js";var qRe=10;function jLn(n){if(typeof n==="string")return B(n,9);if(!Array.isArray(n))return!1;let i=0;for(let s of n){if(i+=1,i>10)return!0;if(s.type!=="text")continue;let a=s.text,l=0;while(i<=10){if(l=a.indexOf(`
`,l),l===-1)break;l++,i++}if(i>10)return!0}return!1}function B(n,i){let s=0;for(let a=0;a<=i;a++){if(s=n.indexOf(`
`,s),s===-1)return!1;s++}return!0}function ep(V){let R=_(26),{result:f,verbose:m}=V,d,x,A,L,g,h,N;if(R[0]!==f||R[1]!==m){let p;if(typeof f!=="string")p="Tool execution failed";else{let c;if(R[9]!==f)c=$r(f,"tool_use_error")??f,R[9]=f,R[10]=c;else c=R[10];let j=Et(c);let E=rbe(j).replace(/<\/?error>/g,"").trim();if(!m&&E.includes("InputValidationError: "))p="Invalid tool parameters";else if(E.startsWith("Error: ")||E.startsWith("Cancelled: "))p=E;else p=`Error: ${E}`}L=Pn(p,`
`)+1-qRe;A=Pe;x=o;N="column";d=t;g="error";h=m?p:p.split(`
`).slice(0,qRe).join(`
`);R[0]=f,R[1]=m,R[2]=d,R[3]=x,R[4]=A,R[5]=L,R[6]=g,R[7]=h,R[8]=N}else d=R[2],x=R[3],A=R[4],L=R[5],g=R[6],h=R[7],N=R[8];let c;if(R[11]!==d||R[12]!==g||R[13]!==h)c=e(d,{color:g,children:h}),R[11]=d,R[12]=g,R[13]=h,R[14]=c;else c=R[14];let T;if(R[15]!==L||R[16]!==m)T=!m&&e(Ym,{count:L,expandable:!0}),R[15]=L,R[16]=m,R[17]=T;else T=R[17];let y;if(R[18]!==x||R[19]!==N||R[20]!==c||R[21]!==T)y=r(x,{flexDirection:N,children:[c,T]}),R[18]=x,R[19]=N,R[20]=c,R[21]=T,R[22]=y;else y=R[22];let D;if(R[23]!==A||R[24]!==y)D=e(A,{children:y}),R[23]=A,R[24]=y,R[25]=D;else D=R[25];return D}
export{qRe,jLn,ep};
