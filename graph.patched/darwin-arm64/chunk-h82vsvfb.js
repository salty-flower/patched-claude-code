// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{lv,S1}from"./chunk-qnvapa9t.js";import{nC}from"./chunk-32v5ghb4.js";import{WJn}from"./chunk-5fzvzdp1.js";import{X3}from"./chunk-8tyz1ak6.js";import{tyr,YPt,XPt,ryr,oyr,syr,iyr,ayr}from"./chunk-emepk0bf.js";import{pQ}from"./chunk-w8x996zn.js";import{join as i,resolve as f}from"path";function eso(o,{backstop:t=!1}={}){return o.allowRules.sources.length>0||o.additionalDirectories.sources.length>0||!t&&(o.hookSources.length>0||o.commandHelperSources.length>0)}function tso(){return{allowRules:YPt(),additionalDirectories:XPt(),hookSources:[],commandHelperSources:[]}}function ZOn(o){let t=f(o),m=S1(t,nC),r=lv(i(t,".claude","settings.json")).settings,c=i(m,".claude","settings.local.json"),a=i(t,".claude","settings.local.json"),s=[lv(c).settings,...a===c?[]:[lv(a).settings]].filter((e)=>e!==null),S=s.length===0?null:{permissions:{additionalDirectories:s.flatMap((e)=>e.permissions?.additionalDirectories??[])}},u={projectSettings:r,localSettings:S},p={sources:[["projectSettings",".claude/settings.json"],["localSettings",".claude/settings.local.json"]],read:(e)=>u[e]??null,rules:(e)=>e==="localSettings"?s.flatMap((h)=>X3(h,e)):X3(u[e]??null,e)},d=(e)=>oyr(e)||syr(e)||iyr(e)||ryr(e)||ayr(e),l=[],n=[];if(tyr(r))l.push(".claude/settings.json");if(s.some(tyr))l.push(".claude/settings.local.json");let g=WJn(t);if(g!==null)l.push(pQ(g));if(d(r))n.push(".claude/settings.json");if(s.some(d))n.push(".claude/settings.local.json");return{allowRules:YPt(p),additionalDirectories:XPt(p),hookSources:l,commandHelperSources:n}}
export{eso,tso,ZOn};
