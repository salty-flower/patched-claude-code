// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{w}from"./chunk-2mxgft48.js";import{on,n}from"./chunk-1r9zp6s1.js";import{pye,yxn,Sv,le,P,R,y,N}from"./chunk-kexg5hxg.js";import{z}from"./chunk-0qkpwgr4.js";import{e}from"./chunk-d5st5fww.js";import{b}from"./chunk-txt1tvjz.js";N();var x=2000,k=2000;function Sie(i){let o=on(),[u,r]=y(null),t=R(null),c=R(null),l=R(null),a=R(0),s=R(!0),p=le(()=>{a.current+=1,l.current?.(),l.current=null,c.current=null,t.current?.(),t.current=null,r(null)},[]);P(()=>{if(p(),i!==null)yxn()},[i,p]),P(()=>(s.current=!0,()=>{s.current=!1,l.current?.(),l.current=null,c.current=null,t.current?.(),t.current=null}),[]);let h=le((d)=>{if(c.current===d)return;c.current=d,l.current?.(),l.current=o.setTimeout(()=>{l.current=null,c.current=null},x);let f=pye(),g=a.current;Sv(d).then((C)=>{if(!s.current||g!==a.current)return;if(C)process.stdout.write(C);if(t.current?.(),t.current=null,r(f),f==="native")t.current=o.setTimeout(()=>{t.current=null,r(null)},k)})},[o]);return{copiedVia:u,copy:h,reset:p}}function I4(i){let u=w(2),{via:o}=i;if(o==="native"){let r;if(u[0]===b)r=e(n,{color:"success",children:"(Copied!)"}),u[0]=r;else r=u[0];return r}if(o===null){let r;if(u[1]===b)r=e(n,{dimColor:!0,children:e(z,{chord:"c",action:"copy",parens:!0})}),u[1]=r;else r=u[1];return r}return null}function O4(i){let u=w(2),{via:o}=i;if(o==="tmux-buffer"){let r;if(u[0]===b)r=e(n,{dimColor:!0,children:"(Copied to tmux buffer \xB7 select the URL manually if paste fails)"}),u[0]=r;else r=u[0];return r}if(o==="osc52"){let r;if(u[1]===b)r=e(n,{dimColor:!0,children:"(Sent via OSC 52 \xB7 select the URL manually if paste fails)"}),u[1]=r;else r=u[1];return r}return null}
export{Sie,I4,O4};
