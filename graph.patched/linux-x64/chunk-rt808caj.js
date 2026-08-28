// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-yhctzac5.js";import{bt}from"./chunk-3fgza2mw.js";import{o,t}from"./chunk-167xpx5m.js";import{Ie}from"./chunk-m3301m47.js";import{Qg,G2}from"./chunk-dw0xwwv5.js";import{e,r}from"./chunk-azctepqx.js";import{Dt}from"./chunk-fardef1f.js";import{p}from"./chunk-by569dsf.js";function Q(ee){return ee}function j7(v){let n=g(30),{output:w,fullOutput:y,elapsedTimeSeconds:m,totalLines:R,totalBytes:x,timeoutMs:l,verbose:s}=v,H;if(n[0]!==y)H=bt(y.trim()),n[0]=y,n[1]=H;else H=n[1];let z=H,C,J;if(n[2]!==w||n[3]!==z||n[4]!==s){let A=bt(w.trim());C=A.split(`
`).filter(Q);J=s?z:C.slice(-5).join(`
`);n[2]=w,n[3]=z,n[4]=s,n[5]=C,n[6]=J}else C=n[5],J=n[6];let I=J;if(!C.length){let u;if(n[7]===p)u=e(t,{dimColor:!0,children:"Running\u2026 "}),n[7]=u;else u=n[7];let i;if(n[8]!==m||n[9]!==l)i=e(Ie,{children:r(Qg,{children:[u,e(G2,{elapsedTimeSeconds:m,timeoutMs:l})]})}),n[8]=m,n[9]=l,n[10]=i;else i=n[10];return i}let K=R?Math.max(0,R-5):0,f="";if(!s&&x&&R)f=`~${R} lines`;else if(!s&&K>0)f=`+${K} lines`;const u=s?void 0:Math.min(5,C.length);let i;if(n[11]!==I)i=e(t,{dimColor:!0,children:I}),n[11]=I,n[12]=i;else i=n[12];let O;if(n[13]!==u||n[14]!==i)O=e(o,{height:u,flexDirection:"column",overflow:"hidden",children:i}),n[13]=u,n[14]=i,n[15]=O;else O=n[15];let b;if(n[16]!==f)b=f?e(t,{dimColor:!0,children:f}):null,n[16]=f,n[17]=b;else b=n[17];let D;if(n[18]!==m||n[19]!==l)D=e(G2,{elapsedTimeSeconds:m,timeoutMs:l}),n[18]=m,n[19]=l,n[20]=D;else D=n[20];let F;if(n[21]!==x)F=x?e(t,{dimColor:!0,children:Dt(x)}):null,n[21]=x,n[22]=F;else F=n[22];let P;if(n[23]!==b||n[24]!==D||n[25]!==F)P=r(o,{flexDirection:"row",gap:1,children:[b,D,F]}),n[23]=b,n[24]=D,n[25]=F,n[26]=P;else P=n[26];let L;if(n[27]!==O||n[28]!==P)L=e(Ie,{children:e(Qg,{children:r(o,{flexDirection:"column",children:[O,P]})})}),n[27]=O,n[28]=P,n[29]=L;else L=n[29];return L}
export{j7};
