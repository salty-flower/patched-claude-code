// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{HR,RN}from"./chunk-3cynezh1.js";import{ME}from"./chunk-x0dc37w9.js";import{nNn}from"./chunk-g5kag0b4.js";import{N_e,HJ}from"./chunk-2bcyxj9q.js";import{_5n,Pgt,Igt,b5n,w5n,E5n,v5n,k5n}from"./chunk-zfqx9wjc.js";import{join as i,resolve as f}from"path";function ONr(o,{backstop:t=!1}={}){return o.allowRules.sources.length>0||o.additionalDirectories.sources.length>0||!t&&(o.hookSources.length>0||o.commandHelperSources.length>0)}function HNr(){return{allowRules:Pgt(),additionalDirectories:Igt(),hookSources:[],commandHelperSources:[]}}function cpn(o){let t=f(o),m=RN(t,ME),r=HR(i(t,".claude","settings.json")).settings,c=i(m,".claude","settings.local.json"),a=i(t,".claude","settings.local.json"),s=[HR(c).settings,...a===c?[]:[HR(a).settings]].filter((e)=>e!==null),S=s.length===0?null:{permissions:{additionalDirectories:s.flatMap((e)=>e.permissions?.additionalDirectories??[])}},u={projectSettings:r,localSettings:S},p={sources:[["projectSettings",".claude/settings.json"],["localSettings",".claude/settings.local.json"]],read:(e)=>u[e]??null,rules:(e)=>e==="localSettings"?s.flatMap((h)=>N_e(h,e)):N_e(u[e]??null,e)},d=(e)=>w5n(e)||E5n(e)||v5n(e)||b5n(e)||k5n(e),l=[],n=[];if(_5n(r))l.push(".claude/settings.json");if(s.some(_5n))l.push(".claude/settings.local.json");let g=nNn(t);if(g!==null)l.push(HJ(g));if(d(r))n.push(".claude/settings.json");if(s.some(d))n.push(".claude/settings.local.json");return{allowRules:Pgt(p),additionalDirectories:Igt(p),hookSources:l,commandHelperSources:n}}
export{ONr,HNr,cpn};
