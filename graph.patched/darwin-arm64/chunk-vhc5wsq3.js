// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{ju,oN,LK,i$,n$e,ew,Wy}from"./chunk-thm21ca7.js";var c_t="next";function WJ(e,s,r){let n=!1,i;return s.update(e,(t)=>{if(i=t,t.notified)return t;if(n=!0,r?.skipStampIfRunning&&t.status==="running")return t;return{...t,notified:!0}}),{claimed:n,task:i}}var yun=new RegExp(`^<${ju}>\\n<${oN}>([^<]+)</${oN}>`+[LK,i$,n$e].map((e)=>`(?:\\n<${e}>[^<]*</${e}>)?`).join("")+`\\n<${ew}>`);function Hi({taskId:e,toolUseId:s,taskType:r,outputFile:n,status:i,summary:t,body:u,trailing:p}){let d=[[oN,e],[LK,s],[i$,r],[n$e,n],[ew,i],[Wy,t]],o=`<${ju}>`;for(let[a,T]of d)if(T)o+=`
<${a}>${T}</${a}>`;return`${o}${u??""}
</${ju}>${p??""}`}
export{c_t,WJ,yun,Hi};
