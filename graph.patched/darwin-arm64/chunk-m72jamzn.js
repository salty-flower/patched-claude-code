// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{gn}from"./chunk-y5gt0775.js";import{y}from"./chunk-pqa42v56.js";import{Ep}from"./chunk-2fnmmmh0.js";import{wt}from"./chunk-mtyvzmw4.js";import{o,n}from"./chunk-86a8apqx.js";import{we}from"./chunk-vnftkrjc.js";import{Pe}from"./chunk-zyykz1tk.js";import{qy,g9}from"./chunk-9sahvhx7.js";import{e,r}from"./chunk-6ccz96s4.js";import{Ut}from"./chunk-6y1qpzy9.js";import{f}from"./chunk-agfzafth.js";var M=5,W=5;function Lee(ee){let i=y(27),{output:z,fullOutput:S,elapsedTimeSeconds:h,totalLines:j,totalBytes:P,timeoutMs:R,verbose:A}=ee,{columns:E}=we(),G;if(i[0]!==E||i[1]!==z||i[2]!==A)G=A?null:O(z,E),i[0]=E,i[1]=z,i[2]=A,i[3]=G;else G=i[3];let T=G,H;if(i[4]!==S||i[5]!==T)H=T?T.text:wt(S.trim()),i[4]=S,i[5]=T,i[6]=H;else H=i[6];let k=H;if(!k){let a;if(i[7]===f)a=e(n,{dimColor:!0,children:"Running\u2026 "}),i[7]=a;else a=i[7];let g;if(i[8]!==h||i[9]!==R)g=e(Pe,{children:r(qy,{children:[a,e(g9,{elapsedTimeSeconds:h,timeoutMs:R})]})}),i[8]=h,i[9]=R,i[10]=g;else g=i[10];return g}let te=T?M:gn(S,`
`)+1,N=(j?Math.max(0,j-te):0)+(T?.dropped??0),w="";if(P&&j)w=`~${j} lines`;else if(N>0)w=`+${N} lines`;let a;if(i[11]!==k)a=e(n,{dimColor:!0,children:k}),i[11]=k,i[12]=a;else a=i[12];let g;if(i[13]!==w)g=w?e(n,{dimColor:!0,children:w}):null,i[13]=w,i[14]=g;else g=i[14];let D;if(i[15]!==h||i[16]!==R)D=e(g9,{elapsedTimeSeconds:h,timeoutMs:R}),i[15]=h,i[16]=R,i[17]=D;else D=i[17];let I;if(i[18]!==P)I=P?e(n,{dimColor:!0,children:Ut(P)}):null,i[18]=P,i[19]=I;else I=i[19];let L;if(i[20]!==g||i[21]!==D||i[22]!==I)L=r(o,{flexDirection:"row",gap:1,children:[g,D,I]}),i[20]=g,i[21]=D,i[22]=I,i[23]=L;else L=i[23];let U;if(i[24]!==a||i[25]!==L)U=e(Pe,{children:e(qy,{children:r(o,{flexDirection:"column",children:[a,L]})})}),i[24]=a,i[25]=L,i[26]=U;else U=i[26];return U}function Ken({output:x,fullOutput:m,totalLines:u},t){if(!m.trim())return!1;return(u??0)>M||O(x,t).clipped}function O(x,m){let u=Math.max(1,m-W),t=wt(x.trim()).replace(/\r\n?/g,`
`).split(`
`).filter((d)=>d),s=[],c=0,l=t.length;while(l>0&&c<M){let d=t[--l],p=Ep(d,u,{hard:!0,trim:!1}).split(`
`),b=M-c;if(p.length>b)return s.unshift(p.slice(-b).join("").replace(/^ /,"")),{text:s.join(`
`),clipped:!0,dropped:l};s.unshift(d),c+=p.length}return{text:s.join(`
`),clipped:l>0,dropped:l}}
export{Lee,Ken};
