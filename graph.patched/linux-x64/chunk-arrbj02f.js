// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{y}from"./chunk-a5ahs27a.js";import{Et}from"./chunk-1nj7y1sr.js";import{o,t}from"./chunk-snr8xejh.js";import{Le}from"./chunk-70qxt2tf.js";import{Ny,Uz}from"./chunk-xcgh659g.js";import{e,r}from"./chunk-ys8dsnqt.js";import{Nt}from"./chunk-7bqj7ctw.js";import{d}from"./chunk-5nnrmmhw.js";function Q(ee){return ee}function hQ(v){let n=y(30),{output:k,fullOutput:w,elapsedTimeSeconds:m,totalLines:M,totalBytes:g,timeoutMs:l,verbose:s}=v,H;if(n[0]!==w)H=Et(w.trim()),n[0]=w,n[1]=H;else H=n[1];let z=H,R,J;if(n[2]!==k||n[3]!==z||n[4]!==s){let A=Et(k.trim());R=A.split(`
`).filter(Q);J=s?z:R.slice(-5).join(`
`);n[2]=k,n[3]=z,n[4]=s,n[5]=R,n[6]=J}else R=n[5],J=n[6];let I=J;if(!R.length){let u;if(n[7]===d)u=e(t,{dimColor:!0,children:"Running\u2026 "}),n[7]=u;else u=n[7];let i;if(n[8]!==m||n[9]!==l)i=e(Le,{children:r(Ny,{children:[u,e(Uz,{elapsedTimeSeconds:m,timeoutMs:l})]})}),n[8]=m,n[9]=l,n[10]=i;else i=n[10];return i}let K=M?Math.max(0,M-5):0,p="";if(!s&&g&&M)p=`~${M} lines`;else if(!s&&K>0)p=`+${K} lines`;const u=s?void 0:Math.min(5,R.length);let i;if(n[11]!==I)i=e(t,{dimColor:!0,children:I}),n[11]=I,n[12]=i;else i=n[12];let C;if(n[13]!==u||n[14]!==i)C=e(o,{height:u,flexDirection:"column",overflow:"hidden",children:i}),n[13]=u,n[14]=i,n[15]=C;else C=n[15];let O;if(n[16]!==p)O=p?e(t,{dimColor:!0,children:p}):null,n[16]=p,n[17]=O;else O=n[17];let b;if(n[18]!==m||n[19]!==l)b=e(Uz,{elapsedTimeSeconds:m,timeoutMs:l}),n[18]=m,n[19]=l,n[20]=b;else b=n[20];let D;if(n[21]!==g)D=g?e(t,{dimColor:!0,children:Nt(g)}):null,n[21]=g,n[22]=D;else D=n[22];let F;if(n[23]!==O||n[24]!==b||n[25]!==D)F=r(o,{flexDirection:"row",gap:1,children:[O,b,D]}),n[23]=O,n[24]=b,n[25]=D,n[26]=F;else F=n[26];let L;if(n[27]!==C||n[28]!==F)L=e(Le,{children:e(Ny,{children:r(o,{flexDirection:"column",children:[C,F]})})}),n[27]=C,n[28]=F,n[29]=L;else L=n[29];return L}
export{hQ};
