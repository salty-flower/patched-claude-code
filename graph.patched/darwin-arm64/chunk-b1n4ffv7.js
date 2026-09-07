// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{_}from"./chunk-c8ey99v5.js";import{n}from"./chunk-hrm5smjv.js";import{Xde,B_t,F_}from"./chunk-ktny7f3b.js";import{Ct}from"./chunk-v6grt0bs.js";import{D}from"./chunk-vpbxab4s.js";import{e}from"./chunk-smtaex5n.js";import{re,E,C,d,N}from"./chunk-jegfnmzv.js";import{f}from"./chunk-te942vjn.js";N();var g=2000,x=2000;function HW(r){let i=Ct(),[P,s]=d(null),t=C(null),l=C(null),o=C(null),a=C(0),p=C(!0),m=re(()=>{a.current+=1,o.current?.(),o.current=null,l.current=null,t.current?.(),t.current=null,s(null)},[]);E(()=>{if(m(),r!==null)B_t()},[r,m]),E(()=>(p.current=!0,()=>{p.current=!1,o.current?.(),o.current=null,l.current=null,t.current?.(),t.current=null}),[]);let v=re((b)=>{if(l.current===b)return;l.current=b,o.current?.(),o.current=i.setTimeout(()=>{o.current=null,l.current=null},g);let y=Xde(),R=a.current;F_(b).then((h)=>{if(!p.current||R!==a.current)return;if(h)process.stdout.write(h);if(t.current?.(),t.current=null,s(y),y==="native")t.current=i.setTimeout(()=>{t.current=null,s(null)},x)})},[i]);return{copiedVia:P,copy:v,reset:m}}function IL(W){let L=_(2),{via:k}=W;if(k==="native"){let u;if(L[0]===f)u=e(n,{color:"success",children:"(Copied!)"}),L[0]=u;else u=L[0];return u}if(k===null){let u;if(L[1]===f)u=e(n,{dimColor:!0,children:e(D,{chord:"c",action:"copy",parens:!0})}),L[1]=u;else u=L[1];return u}return null}function PL(B){let O=_(2),{via:U}=B;if(U==="tmux-buffer"){let c;if(O[0]===f)c=e(n,{dimColor:!0,children:"(Copied to tmux buffer \xB7 select the URL manually if paste fails)"}),O[0]=c;else c=O[0];return c}if(U==="osc52"){let c;if(O[1]===f)c=e(n,{dimColor:!0,children:"(Sent via OSC 52 \xB7 select the URL manually if paste fails)"}),O[1]=c;else c=O[1];return c}return null}
export{HW,IL,PL};
