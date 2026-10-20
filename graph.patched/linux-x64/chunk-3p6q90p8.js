// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{PC,DF}from"./chunk-ww4tybgt.js";import{ck}from"./chunk-merbp8kx.js";import{K4n}from"./chunk-zjry9n9d.js";import{ate,lte}from"./chunk-gzxd3rp1.js";import{_ar,sTt,iTt,Sar,war,Ear,kar,Tar}from"./chunk-jz2pvsgf.js";import{join as i,resolve as f}from"path";function k8r(o,{backstop:t=!1}={}){return o.allowRules.sources.length>0||o.additionalDirectories.sources.length>0||!t&&(o.hookSources.length>0||o.commandHelperSources.length>0)}function T8r(){return{allowRules:sTt(),additionalDirectories:iTt(),hookSources:[],commandHelperSources:[]}}function yTn(o){let t=f(o),m=DF(t,ck),r=PC(i(t,".claude","settings.json")).settings,c=i(m,".claude","settings.local.json"),a=i(t,".claude","settings.local.json"),s=[PC(c).settings,...a===c?[]:[PC(a).settings]].filter((e)=>e!==null),S=s.length===0?null:{permissions:{additionalDirectories:s.flatMap((e)=>e.permissions?.additionalDirectories??[])}},u={projectSettings:r,localSettings:S},p={sources:[["projectSettings",".claude/settings.json"],["localSettings",".claude/settings.local.json"]],read:(e)=>u[e]??null,rules:(e)=>e==="localSettings"?s.flatMap((h)=>ate(h,e)):ate(u[e]??null,e)},d=(e)=>war(e)||Ear(e)||kar(e)||Sar(e)||Tar(e),l=[],n=[];if(_ar(r))l.push(".claude/settings.json");if(s.some(_ar))l.push(".claude/settings.local.json");let g=K4n(t);if(g!==null)l.push(lte(g));if(d(r))n.push(".claude/settings.json");if(s.some(d))n.push(".claude/settings.local.json");return{allowRules:sTt(p),additionalDirectories:iTt(p),hookSources:l,commandHelperSources:n}}
export{k8r,T8r,yTn};
