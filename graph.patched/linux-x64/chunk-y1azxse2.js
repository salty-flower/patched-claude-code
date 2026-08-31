// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Ln}from"./chunk-764j5mtt.js";import{Zbe,Fr}from"./chunk-h6btyxas.js";import{Et}from"./chunk-1nj7y1sr.js";import{y}from"./chunk-a5ahs27a.js";import{o,t}from"./chunk-snr8xejh.js";import{Xm}from"./chunk-6xe5mh12.js";import{Le}from"./chunk-70qxt2tf.js";import{e,r}from"./chunk-ys8dsnqt.js";var UTe=10;function D$n(n){if(typeof n==="string")return B(n,9);if(!Array.isArray(n))return!1;let i=0;for(let s of n){if(i+=1,i>10)return!0;if(s.type!=="text")continue;let a=s.text,l=0;while(i<=10){if(l=a.indexOf(`
`,l),l===-1)break;l++,i++}if(i>10)return!0}return!1}function B(n,i){let s=0;for(let a=0;a<=i;a++){if(s=n.indexOf(`
`,s),s===-1)return!1;s++}return!0}function Zd(V){let R=y(26),{result:f,verbose:m}=V,_,d,x,A,L,g,h;if(R[0]!==f||R[1]!==m){let p;if(typeof f!=="string")p="Tool execution failed";else{let c;if(R[9]!==f)c=Fr(f,"tool_use_error")??f,R[9]=f,R[10]=c;else c=R[10];let j=Et(c);let E=Zbe(j).replace(/<\/?error>/g,"").trim();if(!m&&E.includes("InputValidationError: "))p="Invalid tool parameters";else if(E.startsWith("Error: ")||E.startsWith("Cancelled: "))p=E;else p=`Error: ${E}`}A=Ln(p,`
`)+1-UTe;x=Le;d=o;h="column";_=t;L="error";g=m?p:p.split(`
`).slice(0,UTe).join(`
`);R[0]=f,R[1]=m,R[2]=_,R[3]=d,R[4]=x,R[5]=A,R[6]=L,R[7]=g,R[8]=h}else _=R[2],d=R[3],x=R[4],A=R[5],L=R[6],g=R[7],h=R[8];let c;if(R[11]!==_||R[12]!==L||R[13]!==g)c=e(_,{color:L,children:g}),R[11]=_,R[12]=L,R[13]=g,R[14]=c;else c=R[14];let N;if(R[15]!==A||R[16]!==m)N=!m&&e(Xm,{count:A,expandable:!0}),R[15]=A,R[16]=m,R[17]=N;else N=R[17];let T;if(R[18]!==d||R[19]!==h||R[20]!==c||R[21]!==N)T=r(d,{flexDirection:h,children:[c,N]}),R[18]=d,R[19]=h,R[20]=c,R[21]=N,R[22]=T;else T=R[22];let D;if(R[23]!==x||R[24]!==T)D=e(x,{children:T}),R[23]=x,R[24]=T,R[25]=D;else D=R[25];return D}
export{UTe,D$n,Zd};
