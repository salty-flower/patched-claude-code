// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Dre,v2}from"./chunk-zpb414p7.js";import{jT}from"./chunk-e561d543.js";import{$un}from"./chunk-bbe2krkp.js";import{fzn,mce}from"./chunk-9add1rv0.js";import{rRn,qZe,KZe,sRn,iRn,aRn,lRn,cRn}from"./chunk-29gbbcxz.js";import{join as i,resolve as f}from"path";function rlr(o,{backstop:t=!1}={}){return o.allowRules.sources.length>0||o.additionalDirectories.sources.length>0||!t&&(o.hookSources.length>0||o.commandHelperSources.length>0)}function olr(){return{allowRules:qZe(),additionalDirectories:KZe(),hookSources:[],commandHelperSources:[]}}function DKt(o){let t=f(o),m=v2(t,jT),r=Dre(i(t,".claude","settings.json")).settings,c=i(m,".claude","settings.local.json"),a=i(t,".claude","settings.local.json"),s=[Dre(c).settings,...a===c?[]:[Dre(a).settings]].filter((e)=>e!==null),S=s.length===0?null:{permissions:{additionalDirectories:s.flatMap((e)=>e.permissions?.additionalDirectories??[])}},u={projectSettings:r,localSettings:S},p={sources:[["projectSettings",".claude/settings.json"],["localSettings",".claude/settings.local.json"]],read:(e)=>u[e]??null,rules:(e)=>e==="localSettings"?s.flatMap((h)=>fzn(h,e)):fzn(u[e]??null,e)},d=(e)=>iRn(e)||aRn(e)||lRn(e)||sRn(e)||cRn(e),l=[],n=[];if(rRn(r))l.push(".claude/settings.json");if(s.some(rRn))l.push(".claude/settings.local.json");let g=$un(t);if(g!==null)l.push(mce(g));if(d(r))n.push(".claude/settings.json");if(s.some(d))n.push(".claude/settings.local.json");return{allowRules:qZe(p),additionalDirectories:KZe(p),hookSources:l,commandHelperSources:n}}
export{rlr,olr,DKt};
