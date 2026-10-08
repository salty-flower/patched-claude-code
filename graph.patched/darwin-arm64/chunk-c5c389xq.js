// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{w}from"./chunk-p3sxj9wz.js";import{ln,n}from"./chunk-8pkmgy8b.js";import{Kme,Ovn,DE,le,P,T,g,N}from"./chunk-f6geyac8.js";import{G}from"./chunk-82zheyd6.js";import{e}from"./chunk-efrp9dmx.js";import{b}from"./chunk-8drz5tx3.js";N();var R=2000,x=2000;function Toe(i){let o=ln(),[u,r]=g(null),t=T(null),c=T(null),l=T(null),a=T(0),s=T(!0),p=le(()=>{a.current+=1,l.current?.(),l.current=null,c.current=null,t.current?.(),t.current=null,r(null)},[]);P(()=>{if(p(),i!==null)Ovn()},[i,p]),P(()=>(s.current=!0,()=>{s.current=!1,l.current?.(),l.current=null,c.current=null,t.current?.(),t.current=null}),[]);let y=le((d)=>{if(c.current===d)return;c.current=d,l.current?.(),l.current=o.setTimeout(()=>{l.current=null,c.current=null},R);let f=Kme(),h=a.current;DE(d).then((C)=>{if(!s.current||h!==a.current)return;if(C)process.stdout.write(C);if(t.current?.(),t.current=null,r(f),f==="native")t.current=o.setTimeout(()=>{t.current=null,r(null)},x)})},[o]);return{copiedVia:u,copy:y,reset:p}}function l3(i){let u=w(2),{via:o}=i;if(o==="native"){let r;if(u[0]===b)r=e(n,{color:"success",children:"(Copied!)"}),u[0]=r;else r=u[0];return r}if(o===null){let r;if(u[1]===b)r=e(n,{dimColor:!0,children:e(G,{chord:"c",action:"copy",parens:!0})}),u[1]=r;else r=u[1];return r}return null}function c3(i){let u=w(2),{via:o}=i;if(o==="tmux-buffer"){let r;if(u[0]===b)r=e(n,{dimColor:!0,children:"(Copied to tmux buffer \xB7 select the URL manually if paste fails)"}),u[0]=r;else r=u[0];return r}if(o==="osc52"){let r;if(u[1]===b)r=e(n,{dimColor:!0,children:"(Sent via OSC 52 \xB7 select the URL manually if paste fails)"}),u[1]=r;else r=u[1];return r}return null}
export{Toe,l3,c3};
