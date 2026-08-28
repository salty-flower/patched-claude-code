// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{iIc as d,jIc as a,kIc as r,lIc as m,mIc as R,nIc as c,oIc as n,qIc as S,rIc as _,sIc as k}from"./_706.js";import{Exd as h}from"./_839.js";import{execFile as w}from"child_process";import{existsSync as f}from"fs";class E{promise=null;start(){if(this.promise)return;this.promise=I()}reset(){this.promise=null}}function l(t,o){return new Promise((e)=>{try{w(t,o,{encoding:"utf-8",timeout:c,windowsHide:!0},(s,u)=>{e({stdout:u??"",code:s?1:0})})}catch{e({stdout:"",code:1})}})}function I(){return(async()=>{{let t=_(),e=(await Promise.all(t.map(async({path:s,label:u})=>{if(!f(s))return{stdout:"",label:u,ok:!1};let{stdout:i,code:P}=await l(m,[...R,s]);return{stdout:i,label:u,ok:P===0&&!!i}}))).find((s)=>s.ok);return{plistStdouts:e?[{stdout:e.stdout,label:e.label}]:[],hklmStdout:null,hkcuStdout:null}}if(S()){let[t,o]=await Promise.all([l(n,["query",d,"/v",r]),l(n,["query",a,"/v",r])]);return{plistStdouts:null,hklmStdout:t.code===0?t.stdout:null,hkcuStdout:o.code===0?o.stdout:null}}return{plistStdouts:null,hklmStdout:null,hkcuStdout:null}})()}function y(){p.start()}function A(){return p.promise}var p;var T=h(()=>{k();p=new E});
export{p as GGc,I as HGc,y as IGc,A as JGc,T as KGc};
