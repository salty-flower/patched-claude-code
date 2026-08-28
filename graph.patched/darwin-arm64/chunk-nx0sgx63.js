// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-8mr77ghb.js";import{$C,pN}from"./chunk-qn0p3nv8.js";import{hmn,IGe}from"./chunk-ghnc2x4f.js";import{o,t}from"./chunk-htcaw08y.js";import{lu}from"./chunk-5ja4gd3d.js";import{D}from"./chunk-5cjcy5a7.js";import{e,r}from"./chunk-80eepr01.js";import{fn,We,q,N}from"./chunk-5752v0zq.js";import{L}from"./chunk-xbhjxa6g.js";import{p}from"./chunk-t2kfemrk.js";N();N();var s=fn(!1);function yFe(J){let K=g(2),{children:_}=J,y;if(K[0]!==_)y=e(s.Provider,{value:!0,children:_}),K[0]=_,K[1]=y;else y=K[1];return y}function o$(Q,V){let W=We(s);return Boolean(Q||V||W)}var G="cyan_FOR_SUBAGENTS_ONLY";function j_(n){if(!n)return G;if(pN(n))return $C[n];return`ansi:${n}`}N();var M={keyCase:"lower"};function i$(po){let a=g(18),{displayName:C,count:k,addMargin:B,fallbackLabel:O,body:f}=po,S=k===void 0?1:k,mo=B===void 0?!0:B,E=lu("app:toggleTranscript","Global","ctrl+o"),F;if(a[0]!==C||a[1]!==O)F=IGe(C)||O,a[0]=C,a[1]=O,a[2]=F;else F=a[2];let P=F,H;if(a[3]!==f)H=f?hmn(f):"",a[3]=f,a[4]=H;else H=a[4];let d=H;const h=mo?1:0;let U;if(a[5]===p)U=r(t,{"aria-hidden":!0,children:[L.pointerSmall," "]}),a[5]=U;else U=a[5];const A=S===1?"Message":`${S} messages`;let l;if(a[6]!==d)l=d?r(t,{italic:!0,children:[": ",d]}):"",a[6]=d,a[7]=l;else l=a[7];let T;if(a[8]!==E)T=e(D,{chord:E,action:"expand",parens:!0,format:M}),a[8]=E,a[9]=T;else T=a[9];let R;if(a[10]!==P||a[11]!==A||a[12]!==l||a[13]!==T)R=r(t,{dimColor:!0,children:[U,A," from @",P,l," ",T]}),a[10]=P,a[11]=A,a[12]=l,a[13]=T,a[14]=R;else R=a[14];let w;if(a[15]!==R||a[16]!==h)w=e(o,{marginTop:h,children:R}),a[15]=R,a[16]=h,a[17]=w;else w=a[17];return w}
export{yFe,o$,j_,i$};
