// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{_}from"./chunk-0jrfbepr.js";import{n}from"./chunk-t50adtrb.js";import{Tfe,Cbt,fy}from"./chunk-vh3m4arr.js";import{xt}from"./chunk-f48rwwbk.js";import{F}from"./chunk-q1xyrhsh.js";import{e}from"./chunk-v5r13aq1.js";import{B,C,v,d,j}from"./chunk-xyxaqzpf.js";import{f}from"./chunk-bge67taw.js";j();var x=2000,k=2000;function qW(r){let i=xt(),[P,s]=d(null),t=v(null),l=v(null),o=v(null),a=v(0),p=v(!0),m=B(()=>{a.current+=1,o.current?.(),o.current=null,l.current=null,t.current?.(),t.current=null,s(null)},[]);C(()=>{if(m(),r!==null)Cbt()},[r,m]),C(()=>(p.current=!0,()=>{p.current=!1,o.current?.(),o.current=null,l.current=null,t.current?.(),t.current=null}),[]);let R=B((b)=>{if(l.current===b)return;l.current=b,o.current?.(),o.current=i.setTimeout(()=>{o.current=null,l.current=null},x);let y=Tfe(),g=a.current;fy(b).then((h)=>{if(!p.current||g!==a.current)return;if(h)process.stdout.write(h);if(t.current?.(),t.current=null,s(y),y==="native")t.current=i.setTimeout(()=>{t.current=null,s(null)},k)})},[i]);return{copiedVia:P,copy:R,reset:m}}function rM(M){let U=_(2),{via:L}=M;if(L==="native"){let u;if(U[0]===f)u=e(n,{color:"success",children:"(Copied!)"}),U[0]=u;else u=U[0];return u}if(L===null){let u;if(U[1]===f)u=e(n,{dimColor:!0,children:e(F,{chord:"c",action:"copy",parens:!0})}),U[1]=u;else u=U[1];return u}return null}function oM(W){let O=_(2),{via:E}=W;if(E==="tmux-buffer"){let c;if(O[0]===f)c=e(n,{dimColor:!0,children:"(Copied to tmux buffer \xB7 select the URL manually if paste fails)"}),O[0]=c;else c=O[0];return c}if(E==="osc52"){let c;if(O[1]===f)c=e(n,{dimColor:!0,children:"(Sent via OSC 52 \xB7 select the URL manually if paste fails)"}),O[1]=c;else c=O[1];return c}return null}
export{qW,rM,oM};
