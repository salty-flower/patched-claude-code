// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{an}from"./chunk-j317bre5.js";import{_}from"./chunk-c8ey99v5.js";import{lp}from"./chunk-qs8h438x.js";import{ft}from"./chunk-t4hc7q7h.js";import{o,n}from"./chunk-hrm5smjv.js";import{be}from"./chunk-vx6rcfh8.js";import{xe}from"./chunk-p3tp3g47.js";import{uy,xW}from"./chunk-3ay0qph3.js";import{e,r}from"./chunk-smtaex5n.js";import{Lt}from"./chunk-nzcy74j6.js";import{f}from"./chunk-te942vjn.js";var M=5,U=5;function dZ(ee){let i=_(27),{output:y,fullOutput:S,elapsedTimeSeconds:h,totalLines:j,totalBytes:P,timeoutMs:R,verbose:z}=ee,{columns:A}=be(),F;if(i[0]!==A||i[1]!==y||i[2]!==z)F=z?null:O(y,A),i[0]=A,i[1]=y,i[2]=z,i[3]=F;else F=i[3];let T=F,G;if(i[4]!==S||i[5]!==T)G=T?T.text:ft(S.trim()),i[4]=S,i[5]=T,i[6]=G;else G=i[6];let k=G;if(!k){let a;if(i[7]===f)a=e(n,{dimColor:!0,children:"Running\u2026 "}),i[7]=a;else a=i[7];let g;if(i[8]!==h||i[9]!==R)g=e(xe,{children:r(uy,{children:[a,e(xW,{elapsedTimeSeconds:h,timeoutMs:R})]})}),i[8]=h,i[9]=R,i[10]=g;else g=i[10];return g}let te=T?M:an(S,`
`)+1,H=(j?Math.max(0,j-te):0)+(T?.dropped??0),w="";if(P&&j)w=`~${j} lines`;else if(H>0)w=`+${H} lines`;let a;if(i[11]!==k)a=e(n,{dimColor:!0,children:k}),i[11]=k,i[12]=a;else a=i[12];let g;if(i[13]!==w)g=w?e(n,{dimColor:!0,children:w}):null,i[13]=w,i[14]=g;else g=i[14];let D;if(i[15]!==h||i[16]!==R)D=e(xW,{elapsedTimeSeconds:h,timeoutMs:R}),i[15]=h,i[16]=R,i[17]=D;else D=i[17];let I;if(i[18]!==P)I=P?e(n,{dimColor:!0,children:Lt(P)}):null,i[18]=P,i[19]=I;else I=i[19];let L;if(i[20]!==g||i[21]!==D||i[22]!==I)L=r(o,{flexDirection:"row",gap:1,children:[g,D,I]}),i[20]=g,i[21]=D,i[22]=I,i[23]=L;else L=i[23];let N;if(i[24]!==a||i[25]!==L)N=e(xe,{children:e(uy,{children:r(o,{flexDirection:"column",children:[a,L]})})}),i[24]=a,i[25]=L,i[26]=N;else N=i[26];return N}function hJt({output:x,fullOutput:m,totalLines:u},t){if(!m.trim())return!1;return(u??0)>M||O(x,t).clipped}function O(x,m){let u=Math.max(1,m-U),t=ft(x.trim()).replace(/\r\n?/g,`
`).split(`
`).filter((d)=>d),s=[],c=0,l=t.length;while(l>0&&c<M){let d=t[--l],p=lp(d,u,{hard:!0,trim:!1}).split(`
`),b=M-c;if(p.length>b)return s.unshift(p.slice(-b).join("").replace(/^ /,"")),{text:s.join(`
`),clipped:!0,dropped:l};s.unshift(d),c+=p.length}return{text:s.join(`
`),clipped:l>0,dropped:l}}
export{dZ,hJt};
