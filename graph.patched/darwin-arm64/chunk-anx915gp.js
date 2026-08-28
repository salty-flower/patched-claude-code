// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-8mr77ghb.js";import{PL}from"./chunk-ghnc2x4f.js";import{o,t,it}from"./chunk-htcaw08y.js";import{Si}from"./chunk-r4zafbsh.js";import{Ir}from"./chunk-xf5wanfz.js";import{e,r}from"./chunk-80eepr01.js";import{E,u,N}from"./chunk-5752v0zq.js";import{p}from"./chunk-t2kfemrk.js";N();function T(h,L){let A=h.match(d);if(!A){return e(t,{dimColor:!0,children:h},L)}let S=A[0];let P=A.index??0;let J=h.slice(0,P);let K=h.slice(P+S.length);return r(t,{dimColor:!0,children:[J,e(it,{url:S,children:S}),K]},L)}var d=/https?:\/\/\S+/;function kCe(){let c=g(10),C;if(c[0]===p)C=PL.getInstance().getStatus(),c[0]=C;else C=c[0];let[n,H]=u(C),I,B;if(c[1]===p)I=()=>PL.getInstance().subscribe(H),B=[],c[1]=I,c[2]=B;else I=c[1],B=c[2];if(E(I,B),!n.isAuthenticating&&!n.error&&n.output.length===0){return null}if(!n.isAuthenticating&&!n.error){return null}let l;if(c[3]!==n.output)l=n.output.length>0&&e(o,{flexDirection:"column",children:n.output.slice(-5).map(T)}),c[3]=n.output,c[4]=l;else l=c[4];let f;if(c[5]!==n.error)f=n.error&&e(Ir,{error:n.error}),c[5]=n.error,c[6]=f;else f=c[6];let D;if(c[7]!==l||c[8]!==f)D=e(o,{marginY:1,children:r(Si,{color:"permission",title:"Authentication",children:[l,f]})}),c[7]=l,c[8]=f,c[9]=D;else D=c[9];return D}
export{kCe};
