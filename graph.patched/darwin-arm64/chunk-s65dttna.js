// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{_n}from"./chunk-qkcr56w2.js";import{_}from"./chunk-0jrfbepr.js";import{Tt}from"./chunk-akratr0p.js";import{o,n}from"./chunk-t50adtrb.js";import{Ie}from"./chunk-6yybdx8w.js";import{My,GW}from"./chunk-tbmfv7j9.js";import{e,r}from"./chunk-v5r13aq1.js";import{se}from"./chunk-z7cyba28.js";import{Ut}from"./chunk-6ks24cq1.js";import{f}from"./chunk-bge67taw.js";var i=5,V=5;function tee(nt){let t=_(30),{output:S,fullOutput:T,elapsedTimeSeconds:c,totalLines:D,totalBytes:R,timeoutMs:d,verbose:M}=nt,B;if(t[0]!==T)B=Tt(T.trim()),t[0]=T,t[1]=B;else B=t[1];let U=B,j,J;if(t[2]!==S||t[3]!==U||t[4]!==M)j=y(S),J=M?U:j.slice(-i).join(`
`),t[2]=S,t[3]=U,t[4]=M,t[5]=j,t[6]=J;else j=t[5],J=t[6];let O=J;if(!O){let a;if(t[7]===f)a=e(n,{dimColor:!0,children:"Running\u2026 "}),t[7]=a;else a=t[7];let u;if(t[8]!==c||t[9]!==d)u=e(Ie,{children:r(My,{children:[a,e(GW,{elapsedTimeSeconds:c,timeoutMs:d})]})}),t[8]=c,t[9]=d,t[10]=u;else u=t[10];return u}let et=M?_n(T,`
`)+1:i,K=D?Math.max(0,D-et):0,g="";if(R&&D)g=`~${D} lines`;else if(K>0)g=`+${K} lines`;const a=M?void 0:Math.min(i,j.length);let u;if(t[11]!==O)u=e(n,{dimColor:!0,children:O}),t[11]=O,t[12]=u;else u=t[12];let P;if(t[13]!==a||t[14]!==u)P=e(o,{height:a,flexDirection:"column",overflow:"hidden",children:u}),t[13]=a,t[14]=u,t[15]=P;else P=t[15];let W;if(t[16]!==g)W=g?e(n,{dimColor:!0,children:g}):null,t[16]=g,t[17]=W;else W=t[17];let w;if(t[18]!==c||t[19]!==d)w=e(GW,{elapsedTimeSeconds:c,timeoutMs:d}),t[18]=c,t[19]=d,t[20]=w;else w=t[20];let F;if(t[21]!==R)F=R?e(n,{dimColor:!0,children:Ut(R)}):null,t[21]=R,t[22]=F;else F=t[22];let k;if(t[23]!==W||t[24]!==w||t[25]!==F)k=r(o,{flexDirection:"row",gap:1,children:[W,w,F]}),t[23]=W,t[24]=w,t[25]=F,t[26]=k;else k=t[26];let Q;if(t[27]!==P||t[28]!==k)Q=e(Ie,{children:e(My,{children:r(o,{flexDirection:"column",children:[P,k]})})}),t[27]=P,t[28]=k,t[29]=Q;else Q=t[29];return Q}function mQt({output:l,fullOutput:s,totalLines:h},m){if(!s.trim())return!1;if((h??0)>i)return!0;let p=m-V;return y(l).some((x)=>se(x)>p)}function y(l){return Tt(l.trim()).split(`
`).filter((s)=>s)}
export{tee,mQt};
