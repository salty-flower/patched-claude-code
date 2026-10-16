// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{JA,q$}from"./chunk-9155m2kg.js";import{WE}from"./chunk-a502zyxr.js";import{UGn}from"./chunk-s6ygxfp3.js";import{uee,pee}from"./chunk-6qewndbd.js";import{Cer,Nwt,$wt,xer,Per,Ier,Oer,Mer}from"./chunk-vcq9ea6n.js";import{join as i,resolve as f}from"path";function TVr(o,{backstop:t=!1}={}){return o.allowRules.sources.length>0||o.additionalDirectories.sources.length>0||!t&&(o.hookSources.length>0||o.commandHelperSources.length>0)}function AVr(){return{allowRules:Nwt(),additionalDirectories:$wt(),hookSources:[],commandHelperSources:[]}}function nSn(o){let t=f(o),m=q$(t,WE),r=JA(i(t,".claude","settings.json")).settings,c=i(m,".claude","settings.local.json"),a=i(t,".claude","settings.local.json"),s=[JA(c).settings,...a===c?[]:[JA(a).settings]].filter((e)=>e!==null),S=s.length===0?null:{permissions:{additionalDirectories:s.flatMap((e)=>e.permissions?.additionalDirectories??[])}},u={projectSettings:r,localSettings:S},p={sources:[["projectSettings",".claude/settings.json"],["localSettings",".claude/settings.local.json"]],read:(e)=>u[e]??null,rules:(e)=>e==="localSettings"?s.flatMap((h)=>uee(h,e)):uee(u[e]??null,e)},d=(e)=>Per(e)||Ier(e)||Oer(e)||xer(e)||Mer(e),l=[],n=[];if(Cer(r))l.push(".claude/settings.json");if(s.some(Cer))l.push(".claude/settings.local.json");let g=UGn(t);if(g!==null)l.push(pee(g));if(d(r))n.push(".claude/settings.json");if(s.some(d))n.push(".claude/settings.local.json");return{allowRules:Nwt(p),additionalDirectories:$wt(p),hookSources:l,commandHelperSources:n}}
export{TVr,AVr,nSn};
