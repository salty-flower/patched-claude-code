// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Nf,iR,TX,k6,sYe,Ck,E_}from"./chunk-mddke2ke.js";import{Ay,Iu}from"./chunk-29cd2nzs.js";import{Qt}from"./chunk-pj4gmx93.js";var C2t="next";function hde(t,n,o){let s=!1,r;return n.update(t,(e)=>{if(r=e,e.notified)return e;if(s=!0,o?.skipStampIfRunning&&e.status==="running")return e;return{...e,notified:!0}}),{claimed:s,task:r}}var twt=new RegExp(`^<${Nf}>\\n<${iR}>([^<]+)</${iR}>`+[TX,k6,sYe].map((t)=>`(?:\\n<${t}>[^<]*</${t}>)?`).join("")+`\\n<${Ck}>`),g="It is being resumed automatically from its saved transcript, which may lack its last steps. It reports back to you in a notification when it is done, so do not start its task again unless the user asks for that.";function Qsa(t){let n=t.indexOf(`</${E_}>`);return n>=0&&t.slice(0,n).endsWith(g)}function Vi({taskId:t,toolUseId:n,taskType:o,outputFile:s,status:r,summary:e,summaryLead:l,body:u,trailing:f}){let m=[[iR,t],[TX,n],[k6,o],[sYe,s],[Ck,r],[E_,e]],a=`<${Nf}>`;for(let[i,T]of m)if(T)a+=`
${i===E_?l??"":""}<${i}>${T}</${i}>`;let c=(f??"").replaceAll(new RegExp(`<(?=\\s*/\\s*${Nf}\\b)`,"gi"),"&lt;"),d=`${a}${u??""}`,p=Iu(Ay.filter((i)=>d.includes(Qt(i))),d).trimEnd();return`${a}${p&&`
${p}`}${u??""}
</${Nf}>${c}`}
export{C2t,hde,twt,Qsa,Vi};
