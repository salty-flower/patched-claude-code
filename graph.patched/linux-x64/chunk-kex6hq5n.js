// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Hf,oR,gX,vG,QYe,kE,v_}from"./chunk-8c4ttmk8.js";import{Cy,Iu}from"./chunk-5z5dtbrz.js";import{tn}from"./chunk-nd02r7dv.js";var wjt="next";function ade(t,n,o){let s=!1,r;return n.update(t,(e)=>{if(r=e,e.notified)return e;if(s=!0,o?.skipStampIfRunning&&e.status==="running")return e;return{...e,notified:!0}}),{claimed:s,task:r}}var JSt=new RegExp(`^<${Hf}>\\n<${oR}>([^<]+)</${oR}>`+[gX,vG,QYe].map((t)=>`(?:\\n<${t}>[^<]*</${t}>)?`).join("")+`\\n<${kE}>`),g="It is being resumed automatically from its saved transcript, which may lack its last steps. It reports back to you in a notification when it is done, so do not start its task again unless the user asks for that.";function fsa(t){let n=t.indexOf(`</${v_}>`);return n>=0&&t.slice(0,n).endsWith(g)}function zi({taskId:t,toolUseId:n,taskType:o,outputFile:s,status:r,summary:e,summaryLead:l,body:u,trailing:f}){let m=[[oR,t],[gX,n],[vG,o],[QYe,s],[kE,r],[v_,e]],a=`<${Hf}>`;for(let[i,T]of m)if(T)a+=`
${i===v_?l??"":""}<${i}>${T}</${i}>`;let c=(f??"").replaceAll(new RegExp(`<(?=\\s*/\\s*${Hf}\\b)`,"gi"),"&lt;"),d=`${a}${u??""}`,p=Iu(Cy.filter((i)=>d.includes(tn(i))),d).trimEnd();return`${a}${p&&`
${p}`}${u??""}
</${Hf}>${c}`}
export{wjt,ade,JSt,fsa,zi};
