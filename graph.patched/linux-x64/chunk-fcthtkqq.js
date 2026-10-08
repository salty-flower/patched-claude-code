// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{w}from"./chunk-c74pxqn1.js";import{ln,n}from"./chunk-13cxqtms.js";import{jme,fEn,Mv,le,P,C,g,N}from"./chunk-y6zm4y48.js";import{z}from"./chunk-7wr4a45y.js";import{e}from"./chunk-efrp9dmx.js";import{S}from"./chunk-0y12vz6b.js";N();var R=2000,x=2000;function boe(i){let o=ln(),[u,r]=g(null),t=C(null),c=C(null),l=C(null),a=C(0),s=C(!0),p=le(()=>{a.current+=1,l.current?.(),l.current=null,c.current=null,t.current?.(),t.current=null,r(null)},[]);P(()=>{if(p(),i!==null)fEn()},[i,p]),P(()=>(s.current=!0,()=>{s.current=!1,l.current?.(),l.current=null,c.current=null,t.current?.(),t.current=null}),[]);let y=le((d)=>{if(c.current===d)return;c.current=d,l.current?.(),l.current=o.setTimeout(()=>{l.current=null,c.current=null},R);let f=jme(),h=a.current;Mv(d).then((m)=>{if(!s.current||h!==a.current)return;if(m)process.stdout.write(m);if(t.current?.(),t.current=null,r(f),f==="native")t.current=o.setTimeout(()=>{t.current=null,r(null)},x)})},[o]);return{copiedVia:u,copy:y,reset:p}}function Z4(i){let u=w(2),{via:o}=i;if(o==="native"){let r;if(u[0]===S)r=e(n,{color:"success",children:"(Copied!)"}),u[0]=r;else r=u[0];return r}if(o===null){let r;if(u[1]===S)r=e(n,{dimColor:!0,children:e(z,{chord:"c",action:"copy",parens:!0})}),u[1]=r;else r=u[1];return r}return null}function eY(i){let u=w(2),{via:o}=i;if(o==="tmux-buffer"){let r;if(u[0]===S)r=e(n,{dimColor:!0,children:"(Copied to tmux buffer \xB7 select the URL manually if paste fails)"}),u[0]=r;else r=u[0];return r}if(o==="osc52"){let r;if(u[1]===S)r=e(n,{dimColor:!0,children:"(Sent via OSC 52 \xB7 select the URL manually if paste fails)"}),u[1]=r;else r=u[1];return r}return null}
export{boe,Z4,eY};
