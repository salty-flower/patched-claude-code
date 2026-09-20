// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{an}from"./chunk-qmm87fyw.js";import{b}from"./chunk-mvpw0rjp.js";import{Qp}from"./chunk-gyqjm99t.js";import{yt}from"./chunk-nxhd1nfq.js";import{s,n}from"./chunk-cskdt2sa.js";import{Ee}from"./chunk-e408783a.js";import{He}from"./chunk-8rds80r2.js";import{Bb,iq}from"./chunk-c1ak50sx.js";import{e,r}from"./chunk-437ab22y.js";import{Mt}from"./chunk-2pr017wh.js";import{y}from"./chunk-y8wd7we8.js";var M=5,W=5;function hae(ee){let o=b(27),{output:z,fullOutput:S,elapsedTimeSeconds:h,totalLines:j,totalBytes:P,timeoutMs:R,verbose:A}=ee,{columns:E}=Ee(),G;if(o[0]!==E||o[1]!==z||o[2]!==A)G=A?null:O(z,E),o[0]=E,o[1]=z,o[2]=A,o[3]=G;else G=o[3];let T=G,H;if(o[4]!==S||o[5]!==T)H=T?T.text:yt(S.trim()),o[4]=S,o[5]=T,o[6]=H;else H=o[6];let k=H;if(!k){let d;if(o[7]===y)d=e(n,{dimColor:!0,children:"Running\u2026 "}),o[7]=d;else d=o[7];let a;if(o[8]!==h||o[9]!==R)a=e(He,{children:r(Bb,{children:[d,e(iq,{elapsedTimeSeconds:h,timeoutMs:R})]})}),o[8]=h,o[9]=R,o[10]=a;else a=o[10];return a}let te=T?M:an(S,`
`)+1,N=(j?Math.max(0,j-te):0)+(T?.dropped??0),w="";if(P&&j)w=`~${j} lines`;else if(N>0)w=`+${N} lines`;let d;if(o[11]!==k)d=e(n,{dimColor:!0,children:k}),o[11]=k,o[12]=d;else d=o[12];let a;if(o[13]!==w)a=w?e(n,{dimColor:!0,children:w}):null,o[13]=w,o[14]=a;else a=o[14];let D;if(o[15]!==h||o[16]!==R)D=e(iq,{elapsedTimeSeconds:h,timeoutMs:R}),o[15]=h,o[16]=R,o[17]=D;else D=o[17];let I;if(o[18]!==P)I=P?e(n,{dimColor:!0,children:Mt(P)}):null,o[18]=P,o[19]=I;else I=o[19];let L;if(o[20]!==a||o[21]!==D||o[22]!==I)L=r(s,{flexDirection:"row",gap:1,children:[a,D,I]}),o[20]=a,o[21]=D,o[22]=I,o[23]=L;else L=o[23];let U;if(o[24]!==d||o[25]!==L)U=e(He,{children:e(Bb,{children:r(s,{flexDirection:"column",children:[d,L]})})}),o[24]=d,o[25]=L,o[26]=U;else U=o[26];return U}function GEn({output:g,fullOutput:m,totalLines:u},t){if(!m.trim())return!1;return(u??0)>M||O(g,t).clipped}function O(g,m){let u=Math.max(1,m-W),t=yt(g.trim()).replace(/\r\n?/g,`
`).split(`
`).filter((f)=>f),i=[],c=0,l=t.length;while(l>0&&c<M){let f=t[--l],p=Qp(f,u,{hard:!0,trim:!1}).split(`
`),x=M-c;if(p.length>x)return i.unshift(p.slice(-x).join("").replace(/^ /,"")),{text:i.join(`
`),clipped:!0,dropped:l};i.unshift(f),c+=p.length}return{text:i.join(`
`),clipped:l>0,dropped:l}}
export{hae,GEn};
