// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{gp,kU,K5,zB,Z6e,VE,ES}from"./chunk-87y2sp93.js";var fIt="next";function jre(e,s,r){let n=!1,i;return s.update(e,(t)=>{if(i=t,t.notified)return t;if(n=!0,r?.skipStampIfRunning&&t.status==="running")return t;return{...t,notified:!0}}),{claimed:n,task:i}}var tOn=new RegExp(`^<${gp}>\\n<${kU}>([^<]+)</${kU}>`+[K5,zB,Z6e].map((e)=>`(?:\\n<${e}>[^<]*</${e}>)?`).join("")+`\\n<${VE}>`);function Ui({taskId:e,toolUseId:s,taskType:r,outputFile:n,status:i,summary:t,body:u,trailing:p}){let d=[[kU,e],[K5,s],[zB,r],[Z6e,n],[VE,i],[ES,t]],o=`<${gp}>`;for(let[a,T]of d)if(T)o+=`
<${a}>${T}</${a}>`;let f=(p??"").replaceAll(new RegExp(`<(?=\\s*/\\s*${gp}\\b)`,"gi"),"&lt;");return`${o}${u??""}
</${gp}>${f}`}
export{fIt,jre,tOn,Ui};
