// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{_}from"./chunk-c8ey99v5.js";import{K$}from"./chunk-n495pc0t.js";import{o,n,ct}from"./chunk-hrm5smjv.js";import{hs}from"./chunk-0be54znw.js";import{Nr}from"./chunk-qb1nv326.js";import{e,r}from"./chunk-smtaex5n.js";import{E,d,N}from"./chunk-jegfnmzv.js";import{f}from"./chunk-te942vjn.js";N();function P(p,D){let b=p.match(A);if(!b){return e(n,{dimColor:!0,children:p},D)}let y=b[0];let L=b.index??0;let H=p.slice(0,L);let J=p.slice(L+y.length);return r(n,{dimColor:!0,children:[H,e(ct,{url:y,children:y}),J]},D)}var A=/https?:\/\/\S+/;function $_e(){let i=_(10),R;if(i[0]===f)R=K$.getInstance().getStatus(),i[0]=R;else R=i[0];let[t,G]=d(R),C,I;if(i[1]===f)C=()=>K$.getInstance().subscribe(G),I=[],i[1]=C,i[2]=I;else C=i[1],I=i[2];if(E(C,I),!t.isAuthenticating&&!t.error&&t.output.length===0){return null}if(!t.isAuthenticating&&!t.error){return null}let a;if(i[3]!==t.output)a=t.output.length>0&&e(o,{flexDirection:"column",children:t.output.slice(-5).map(P)}),i[3]=t.output,i[4]=a;else a=i[4];let l;if(i[5]!==t.error)l=t.error&&e(Nr,{error:t.error}),i[5]=t.error,i[6]=l;else l=i[6];let B;if(i[7]!==a||i[8]!==l)B=e(o,{marginY:1,children:r(hs,{color:"permission",title:"Authentication",children:[a,l]})}),i[7]=a,i[8]=l,i[9]=B;else B=i[9];return B}
export{$_e};
