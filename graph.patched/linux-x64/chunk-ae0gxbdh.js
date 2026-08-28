// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-yhctzac5.js";import{$k,f1}from"./chunk-jxyaf9gv.js";import{mmn,I6e}from"./chunk-ns0ekkj0.js";import{o,t}from"./chunk-167xpx5m.js";import{au}from"./chunk-qt6d5tcj.js";import{P}from"./chunk-xe1bmz2a.js";import{e,r}from"./chunk-azctepqx.js";import{fn,ze,W,N}from"./chunk-q0z49y3j.js";import{M}from"./chunk-9xfehjen.js";import{p}from"./chunk-by569dsf.js";N();N();var s=fn(!1);function tNe(z){let J=g(2),{children:_}=z,G;if(J[0]!==_)G=e(s.Provider,{value:!0,children:_}),J[0]=_,J[1]=G;else G=J[1];return G}function eF(K,Q){let V=ze(s);return Boolean(K||Q||V)}var k="cyan_FOR_SUBAGENTS_ONLY";function jb(n){if(!n)return k;if(f1(n))return $k[n];return`ansi:${n}`}N();var b={keyCase:"lower"};function tF(po){let a=g(18),{displayName:C,count:B,addMargin:S,fallbackLabel:O,body:f}=po,F=B===void 0?1:B,mo=S===void 0?!0:S,E=au("app:toggleTranscript","Global","ctrl+o"),H;if(a[0]!==C||a[1]!==O)H=I6e(C)||O,a[0]=C,a[1]=O,a[2]=H;else H=a[2];let h=H,U;if(a[3]!==f)U=f?mmn(f):"",a[3]=f,a[4]=U;else U=a[4];let d=U;const A=mo?1:0;let w;if(a[5]===p)w=r(t,{"aria-hidden":!0,children:[M.pointerSmall," "]}),a[5]=w;else w=a[5];const L=F===1?"Message":`${F} messages`;let l;if(a[6]!==d)l=d?r(t,{italic:!0,children:[": ",d]}):"",a[6]=d,a[7]=l;else l=a[7];let T;if(a[8]!==E)T=e(P,{chord:E,action:"expand",parens:!0,format:b}),a[8]=E,a[9]=T;else T=a[9];let R;if(a[10]!==h||a[11]!==L||a[12]!==l||a[13]!==T)R=r(t,{dimColor:!0,children:[w,L," from @",h,l," ",T]}),a[10]=h,a[11]=L,a[12]=l,a[13]=T,a[14]=R;else R=a[14];let D;if(a[15]!==R||a[16]!==A)D=e(o,{marginTop:A,children:R}),a[15]=R,a[16]=A,a[17]=D;else D=a[17];return D}
export{tNe,eF,jb,tF};
