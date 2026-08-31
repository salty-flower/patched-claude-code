// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{y}from"./chunk-a5ahs27a.js";import{Bk,$F}from"./chunk-267gdh09.js";import{SSn,Z6e}from"./chunk-1e5y3pjf.js";import{o,t}from"./chunk-snr8xejh.js";import{uu}from"./chunk-exk8kr77.js";import{O}from"./chunk-kzjewftw.js";import{e,r}from"./chunk-ys8dsnqt.js";import{_n,ze,V,F}from"./chunk-v59pjxqq.js";import{M}from"./chunk-kd55bhf8.js";import{d}from"./chunk-5nnrmmhw.js";F();F();var s=_n(!1);function dUe(z){let J=y(2),{children:x}=z,v;if(J[0]!==x)v=e(s.Provider,{value:!0,children:x}),J[0]=x,J[1]=v;else v=J[1];return v}function W1(K,Q){let W=ze(s);return Boolean(K||Q||W)}var G="cyan_FOR_SUBAGENTS_ONLY";function Eb(n){if(!n)return G;if($F(n))return Bk[n];return`ansi:${n}`}F();var A={keyCase:"lower"};function V1(po){let a=y(18),{displayName:_,count:k,addMargin:B,fallbackLabel:C,body:c}=po,S=k===void 0?1:k,mo=B===void 0?!0:B,E=uu("app:toggleTranscript","Global","ctrl+o"),H;if(a[0]!==_||a[1]!==C)H=Z6e(_)||C,a[0]=_,a[1]=C,a[2]=H;else H=a[2];let N=H,U;if(a[3]!==c)U=c?SSn(c):"",a[3]=c,a[4]=U;else U=a[4];let f=U;const P=mo?1:0;let w;if(a[5]===d)w=r(t,{"aria-hidden":!0,children:[M.pointerSmall," "]}),a[5]=w;else w=a[5];const h=S===1?"Message":`${S} messages`;let l;if(a[6]!==f)l=f?r(t,{italic:!0,children:[": ",f]}):"",a[6]=f,a[7]=l;else l=a[7];let T;if(a[8]!==E)T=e(O,{chord:E,action:"expand",parens:!0,format:A}),a[8]=E,a[9]=T;else T=a[9];let R;if(a[10]!==N||a[11]!==h||a[12]!==l||a[13]!==T)R=r(t,{dimColor:!0,children:[w,h," from @",N,l," ",T]}),a[10]=N,a[11]=h,a[12]=l,a[13]=T,a[14]=R;else R=a[14];let D;if(a[15]!==R||a[16]!==P)D=e(o,{marginTop:P,children:R}),a[15]=R,a[16]=P,a[17]=D;else D=a[17];return D}
export{dUe,W1,Eb,V1};
