// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{y}from"./chunk-hshe4789.js";import{n}from"./chunk-dqjxa0y4.js";import{pme,uEt,g_}from"./chunk-q742jnzw.js";import{Tt}from"./chunk-aash1vn4.js";import{D}from"./chunk-52gee78z.js";import{e}from"./chunk-zhg3ync1.js";import{re,E,C,d,N}from"./chunk-w8p0f9k6.js";import{p}from"./chunk-2cavdc9w.js";N();var x=2000,k=2000;function yG(r){let i=Tt(),[v,s]=d(null),t=C(null),l=C(null),o=C(null),a=C(0),f=C(!0),m=re(()=>{a.current+=1,o.current?.(),o.current=null,l.current=null,t.current?.(),t.current=null,s(null)},[]);E(()=>{if(m(),r!==null)uEt()},[r,m]),E(()=>(f.current=!0,()=>{f.current=!1,o.current?.(),o.current=null,l.current=null,t.current?.(),t.current=null}),[]);let R=re((b)=>{if(l.current===b)return;l.current=b,o.current?.(),o.current=i.setTimeout(()=>{o.current=null,l.current=null},x);let h=pme(),g=a.current;g_(b).then((P)=>{if(!f.current||g!==a.current)return;if(P)process.stdout.write(P);if(t.current?.(),t.current=null,s(h),h==="native")t.current=i.setTimeout(()=>{t.current=null,s(null)},k)})},[i]);return{copiedVia:v,copy:R,reset:m}}function tN(W){let U=y(2),{via:L}=W;if(L==="native"){let u;if(U[0]===p)u=e(n,{color:"success",children:"(Copied!)"}),U[0]=u;else u=U[0];return u}if(L===null){let u;if(U[1]===p)u=e(n,{dimColor:!0,children:e(D,{chord:"c",action:"copy",parens:!0})}),U[1]=u;else u=U[1];return u}return null}function nN(B){let S=y(2),{via:O}=B;if(O==="tmux-buffer"){let c;if(S[0]===p)c=e(n,{dimColor:!0,children:"(Copied to tmux buffer \xB7 select the URL manually if paste fails)"}),S[0]=c;else c=S[0];return c}if(O==="osc52"){let c;if(S[1]===p)c=e(n,{dimColor:!0,children:"(Sent via OSC 52 \xB7 select the URL manually if paste fails)"}),S[1]=c;else c=S[1];return c}return null}
export{yG,tN,nN};
