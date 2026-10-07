// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{PD,ID}from"./chunk-nqb0d8cm.js";import{Dw}from"./chunk-861a7whf.js";import{wTn}from"./chunk-7ewj4b02.js";import{Rme,DY}from"./chunk-j8zs3xhh.js";import{BUn,Clt,klt,WUn,GUn,zUn,VUn,qUn}from"./chunk-casrafay.js";import{join as i,resolve as f}from"path";function PCr(o,{backstop:t=!1}={}){return o.allowRules.sources.length>0||o.additionalDirectories.sources.length>0||!t&&(o.hookSources.length>0||o.commandHelperSources.length>0)}function ICr(){return{allowRules:Clt(),additionalDirectories:klt(),hookSources:[],commandHelperSources:[]}}function hnn(o){let t=f(o),m=ID(t,Dw),r=PD(i(t,".claude","settings.json")).settings,c=i(m,".claude","settings.local.json"),a=i(t,".claude","settings.local.json"),s=[PD(c).settings,...a===c?[]:[PD(a).settings]].filter((e)=>e!==null),S=s.length===0?null:{permissions:{additionalDirectories:s.flatMap((e)=>e.permissions?.additionalDirectories??[])}},u={projectSettings:r,localSettings:S},p={sources:[["projectSettings",".claude/settings.json"],["localSettings",".claude/settings.local.json"]],read:(e)=>u[e]??null,rules:(e)=>e==="localSettings"?s.flatMap((h)=>Rme(h,e)):Rme(u[e]??null,e)},d=(e)=>GUn(e)||zUn(e)||VUn(e)||WUn(e)||qUn(e),l=[],n=[];if(BUn(r))l.push(".claude/settings.json");if(s.some(BUn))l.push(".claude/settings.local.json");let g=wTn(t);if(g!==null)l.push(DY(g));if(d(r))n.push(".claude/settings.json");if(s.some(d))n.push(".claude/settings.local.json");return{allowRules:Clt(p),additionalDirectories:klt(p),hookSources:l,commandHelperSources:n}}
export{PCr,ICr,hnn};
