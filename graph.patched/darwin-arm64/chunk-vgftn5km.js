// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{w}from"./chunk-naky2abr.js";import{Zt,n}from"./chunk-behv2vm9.js";import{lle,Nrn,Mb,ie,T,C,g,M}from"./chunk-757fgf90.js";import{F}from"./chunk-xjc7gdgb.js";import{e}from"./chunk-ne6sbmea.js";import{b}from"./chunk-pj3wn6z3.js";function xG(i){let u=w(2),{via:o}=i;if(o==="native"){let r;if(u[0]===b)r=e(n,{color:"success",children:"(Copied!)"}),u[0]=r;else r=u[0];return r}if(o===null){let r;if(u[1]===b)r=e(n,{dimColor:!0,children:e(F,{chord:"c",action:"copy",parens:!0})}),u[1]=r;else r=u[1];return r}return null}function PG(i){let u=w(2),{via:o}=i;if(o==="tmux-buffer"){let r;if(u[0]===b)r=e(n,{dimColor:!0,children:"(Copied to tmux buffer \xB7 select the URL manually if paste fails)"}),u[0]=r;else r=u[0];return r}if(o==="osc52"){let r;if(u[1]===b)r=e(n,{dimColor:!0,children:"(Sent via OSC 52 \xB7 select the URL manually if paste fails)"}),u[1]=r;else r=u[1];return r}return null}M();var R=2000,x=2000;function CQ(i){let o=Zt(),[u,r]=g(null),t=C(null),c=C(null),l=C(null),a=C(0),s=C(!0),p=ie(()=>{a.current+=1,l.current?.(),l.current=null,c.current=null,t.current?.(),t.current=null,r(null)},[]);T(()=>{if(p(),i!==null)Nrn()},[i,p]),T(()=>(s.current=!0,()=>{s.current=!1,l.current?.(),l.current=null,c.current=null,t.current?.(),t.current=null}),[]);let h=ie((d)=>{if(c.current===d)return;c.current=d,l.current?.(),l.current=o.setTimeout(()=>{l.current=null,c.current=null},R);let f=lle(),P=a.current;Mb(d).then((m)=>{if(!s.current||P!==a.current)return;if(m)process.stdout.write(m);if(t.current?.(),t.current=null,r(f),f==="native")t.current=o.setTimeout(()=>{t.current=null,r(null)},x)})},[o]);return{copiedVia:u,copy:h,reset:p}}
export{xG,PG,CQ};
