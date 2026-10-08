// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{iM,hL}from"./chunk-5zqw5ss6.js";import{tv}from"./chunk-gsa86a2x.js";import{nOn}from"./chunk-kc6070xy.js";import{phe,VX}from"./chunk-bx1nhgzb.js";import{s2n,xut,Put,a2n,l2n,c2n,d2n,u2n}from"./chunk-msscs91c.js";import{join as i,resolve as f}from"path";function dIr(o,{backstop:t=!1}={}){return o.allowRules.sources.length>0||o.additionalDirectories.sources.length>0||!t&&(o.hookSources.length>0||o.commandHelperSources.length>0)}function uIr(){return{allowRules:xut(),additionalDirectories:Put(),hookSources:[],commandHelperSources:[]}}function bin(o){let t=f(o),m=hL(t,tv),r=iM(i(t,".claude","settings.json")).settings,c=i(m,".claude","settings.local.json"),a=i(t,".claude","settings.local.json"),s=[iM(c).settings,...a===c?[]:[iM(a).settings]].filter((e)=>e!==null),S=s.length===0?null:{permissions:{additionalDirectories:s.flatMap((e)=>e.permissions?.additionalDirectories??[])}},u={projectSettings:r,localSettings:S},p={sources:[["projectSettings",".claude/settings.json"],["localSettings",".claude/settings.local.json"]],read:(e)=>u[e]??null,rules:(e)=>e==="localSettings"?s.flatMap((h)=>phe(h,e)):phe(u[e]??null,e)},d=(e)=>l2n(e)||c2n(e)||d2n(e)||a2n(e)||u2n(e),l=[],n=[];if(s2n(r))l.push(".claude/settings.json");if(s.some(s2n))l.push(".claude/settings.local.json");let g=nOn(t);if(g!==null)l.push(VX(g));if(d(r))n.push(".claude/settings.json");if(s.some(d))n.push(".claude/settings.local.json");return{allowRules:xut(p),additionalDirectories:Put(p),hookSources:l,commandHelperSources:n}}
export{dIr,uIr,bin};
