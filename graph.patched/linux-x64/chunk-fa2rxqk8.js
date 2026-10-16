// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{pzn}from"./chunk-sxgf7ra0.js";import{Noe}from"./chunk-38nf1dnm.js";var m7r=new Set(["invoke-command","start-job","start-threadjob","register-scheduledjob"]),g7r=new Set(["invoke-command","invoke-expression","start-job","start-threadjob","register-scheduledjob","register-engineevent","register-objectevent","register-wmievent","new-pssession","enter-pssession"]),h7r=new Set(["import-module","ipmo","install-module","save-module","update-module","install-script","save-script"]),o=["pwsh","powershell","cmd","bash","wsl","sh","start-process","start","add-type","new-object"];function s(t){return Object.entries(Noe).filter(([,e])=>t.has(e.toLowerCase())).map(([e])=>e)}var r=new Set(["invoke-webrequest","invoke-restmethod"]),n=new Set(["set-alias","sal","new-alias","nal","set-variable","sv","new-variable","nv"]),i=new Set(["invoke-wmimethod","iwmi","invoke-cimmethod","icim","wmic","wmic.exe"]),a=new Set(["select-object","sort-object","group-object","where-object","measure-object","write-output","write-host","start-sleep","format-table","format-list","format-wide","format-custom","out-string","out-host","ipconfig","hostname","route","arp"]),Ios=(()=>{let t=new Set([...o,...m7r,...g7r,...h7r,...r,...n,...i,...a,"foreach-object",...pzn.filter((e)=>!e.includes(" "))]);return new Set([...t,...s(t)])})();
export{m7r,g7r,h7r,Ios};
