// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Dc,qD,L2,eH,FHe,Jb,L_}from"./chunk-9pt2nr7j.js";var lut="next";function j9(e,s,r){let n=!1,i;return s.update(e,(t)=>{if(i=t,t.notified)return t;if(n=!0,r?.skipStampIfRunning&&t.status==="running")return t;return{...t,notified:!0}}),{claimed:n,task:i}}var wtn=new RegExp(`^<${Dc}>\\n<${qD}>([^<]+)</${qD}>`+[L2,eH,FHe].map((e)=>`(?:\\n<${e}>[^<]*</${e}>)?`).join("")+`\\n<${Jb}>`);function ii({taskId:e,toolUseId:s,taskType:r,outputFile:n,status:i,summary:t,body:u,trailing:p}){let d=[[qD,e],[L2,s],[eH,r],[FHe,n],[Jb,i],[L_,t]],o=`<${Dc}>`;for(let[a,T]of d)if(T)o+=`
<${a}>${T}</${a}>`;return`${o}${u??""}
</${Dc}>${p??""}`}
export{lut,j9,wtn,ii};
