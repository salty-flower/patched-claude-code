// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-8mr77ghb.js";import{une}from"./chunk-nw6r1618.js";import{t}from"./chunk-htcaw08y.js";import{lu}from"./chunk-5ja4gd3d.js";import{D}from"./chunk-5cjcy5a7.js";import{KU}from"./chunk-a19q2hw9.js";import{M,e,r}from"./chunk-80eepr01.js";import{fn,We,N}from"./chunk-5752v0zq.js";import{p}from"./chunk-t2kfemrk.js";N();N();var n=fn(!1);function eCe(V){let q=g(2),{children:l}=V,x;if(q[0]!==l)x=e(n.Provider,{value:!0,children:l}),q[0]=l,q[1]=x;else x=q[1];return x}function hc(){let b=g(3),w=We(n),z=We(KU),d=lu("app:toggleTranscript","Global","ctrl+o");if(w||z){return null}let P;if(b[0]===p)P={keyCase:"lower"},b[0]=P;else P=b[0];let h;if(b[1]!==d)h=e(t,{dimColor:!0,children:e(D,{chord:d,action:"expand",parens:!0,format:P})}),b[1]=d,b[2]=h;else h=b[2];return h}function Sm(Q){let u=g(8),{count:c,unit:v,expandable:y}=Q,s=v===void 0?"line":v,R=y===void 0?!1:y;if(c<=0){return null}let f;if(u[0]!==c||u[1]!==s)f=une(c,s),u[0]=c,u[1]=s,u[2]=f;else f=u[2];let m;if(u[3]!==R)m=R&&r(M,{children:[" ",e(hc,{})]}),u[3]=R,u[4]=m;else m=u[4];let C;if(u[5]!==f||u[6]!==m)C=r(t,{dimColor:!0,children:[f,m]}),u[5]=f,u[6]=m,u[7]=C;else C=u[7];return C}
export{eCe,hc,Sm};
