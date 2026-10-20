// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Gc,HL,AK,EH,wLe,kS,rb}from"./chunk-jkcb7qdd.js";var Hft="next";function NX(e,s,r){let n=!1,i;return s.update(e,(t)=>{if(i=t,t.notified)return t;if(n=!0,r?.skipStampIfRunning&&t.status==="running")return t;return{...t,notified:!0}}),{claimed:n,task:i}}var ssn=new RegExp(`^<${Gc}>\\n<${HL}>([^<]+)</${HL}>`+[AK,EH,wLe].map((e)=>`(?:\\n<${e}>[^<]*</${e}>)?`).join("")+`\\n<${kS}>`);function mi({taskId:e,toolUseId:s,taskType:r,outputFile:n,status:i,summary:t,body:u,trailing:p}){let d=[[HL,e],[AK,s],[EH,r],[wLe,n],[kS,i],[rb,t]],o=`<${Gc}>`;for(let[a,T]of d)if(T)o+=`
<${a}>${T}</${a}>`;return`${o}${u??""}
</${Gc}>${p??""}`}
export{Hft,NX,ssn,mi};
