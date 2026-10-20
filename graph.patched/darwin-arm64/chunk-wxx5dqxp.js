// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{zc,FD,H6,C0,TDe,kb,oS}from"./chunk-277zhca1.js";var Pft="next";function VX(e,s,r){let n=!1,i;return s.update(e,(t)=>{if(i=t,t.notified)return t;if(n=!0,r?.skipStampIfRunning&&t.status==="running")return t;return{...t,notified:!0}}),{claimed:n,task:i}}var fsn=new RegExp(`^<${zc}>\\n<${FD}>([^<]+)</${FD}>`+[H6,C0,TDe].map((e)=>`(?:\\n<${e}>[^<]*</${e}>)?`).join("")+`\\n<${kb}>`);function mi({taskId:e,toolUseId:s,taskType:r,outputFile:n,status:i,summary:t,body:u,trailing:p}){let d=[[FD,e],[H6,s],[C0,r],[TDe,n],[kb,i],[oS,t]],o=`<${zc}>`;for(let[a,T]of d)if(T)o+=`
<${a}>${T}</${a}>`;return`${o}${u??""}
</${zc}>${p??""}`}
export{Pft,VX,fsn,mi};
