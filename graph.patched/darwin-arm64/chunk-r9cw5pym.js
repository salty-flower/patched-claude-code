// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{kn}from"./chunk-hp9wjta4.js";import{Zge,Lr}from"./chunk-j5h9ds58.js";import{_t}from"./chunk-j4jfcs5p.js";import{g}from"./chunk-8mr77ghb.js";import{o,t}from"./chunk-htcaw08y.js";import{Sm}from"./chunk-v5khjy83.js";import{Ie}from"./chunk-h5x3jsqp.js";import{e,r}from"./chunk-80eepr01.js";var JEe=10;function oxn(n){if(typeof n==="string")return B(n,9);if(!Array.isArray(n))return!1;let i=0;for(let s of n){if(i+=1,i>10)return!0;if(s.type!=="text")continue;let a=s.text,l=0;while(i<=10){if(l=a.indexOf(`
`,l),l===-1)break;l++,i++}if(i>10)return!0}return!1}function B(n,i){let s=0;for(let a=0;a<=i;a++){if(s=n.indexOf(`
`,s),s===-1)return!1;s++}return!0}function Id(V){let R=g(26),{result:f,verbose:m}=V,_,d,x,A,L,h,N;if(R[0]!==f||R[1]!==m){let p;if(typeof f!=="string")p="Tool execution failed";else{let c;if(R[9]!==f)c=Lr(f,"tool_use_error")??f,R[9]=f,R[10]=c;else c=R[10];let j=_t(c);let E=Zge(j).replace(/<\/?error>/g,"").trim();if(!m&&E.includes("InputValidationError: "))p="Invalid tool parameters";else if(E.startsWith("Error: ")||E.startsWith("Cancelled: "))p=E;else p=`Error: ${E}`}A=kn(p,`
`)+1-JEe;x=Ie;d=o;N="column";_=t;L="error";h=m?p:p.split(`
`).slice(0,JEe).join(`
`);R[0]=f,R[1]=m,R[2]=_,R[3]=d,R[4]=x,R[5]=A,R[6]=L,R[7]=h,R[8]=N}else _=R[2],d=R[3],x=R[4],A=R[5],L=R[6],h=R[7],N=R[8];let c;if(R[11]!==_||R[12]!==L||R[13]!==h)c=e(_,{color:L,children:h}),R[11]=_,R[12]=L,R[13]=h,R[14]=c;else c=R[14];let T;if(R[15]!==A||R[16]!==m)T=!m&&e(Sm,{count:A,expandable:!0}),R[15]=A,R[16]=m,R[17]=T;else T=R[17];let y;if(R[18]!==d||R[19]!==N||R[20]!==c||R[21]!==T)y=r(d,{flexDirection:N,children:[c,T]}),R[18]=d,R[19]=N,R[20]=c,R[21]=T,R[22]=y;else y=R[22];let D;if(R[23]!==x||R[24]!==y)D=e(x,{children:y}),R[23]=x,R[24]=y,R[25]=D;else D=R[25];return D}
export{JEe,oxn,Id};
