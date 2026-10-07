// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{C0,R0}from"./chunk-p72qafcy.js";import{Hw}from"./chunk-2c0pkjse.js";import{rCn}from"./chunk-ab4khrmp.js";import{vme,R9}from"./chunk-vy7fk9eg.js";import{kBn,ylt,_lt,ABn,CBn,RBn,xBn,PBn}from"./chunk-gty5zynm.js";import{join as i,resolve as f}from"path";function akr(o,{backstop:t=!1}={}){return o.allowRules.sources.length>0||o.additionalDirectories.sources.length>0||!t&&(o.hookSources.length>0||o.commandHelperSources.length>0)}function lkr(){return{allowRules:ylt(),additionalDirectories:_lt(),hookSources:[],commandHelperSources:[]}}function enn(o){let t=f(o),m=R0(t,Hw),r=C0(i(t,".claude","settings.json")).settings,c=i(m,".claude","settings.local.json"),a=i(t,".claude","settings.local.json"),s=[C0(c).settings,...a===c?[]:[C0(a).settings]].filter((e)=>e!==null),S=s.length===0?null:{permissions:{additionalDirectories:s.flatMap((e)=>e.permissions?.additionalDirectories??[])}},u={projectSettings:r,localSettings:S},p={sources:[["projectSettings",".claude/settings.json"],["localSettings",".claude/settings.local.json"]],read:(e)=>u[e]??null,rules:(e)=>e==="localSettings"?s.flatMap((h)=>vme(h,e)):vme(u[e]??null,e)},d=(e)=>CBn(e)||RBn(e)||xBn(e)||ABn(e)||PBn(e),l=[],n=[];if(kBn(r))l.push(".claude/settings.json");if(s.some(kBn))l.push(".claude/settings.local.json");let g=rCn(t);if(g!==null)l.push(R9(g));if(d(r))n.push(".claude/settings.json");if(s.some(d))n.push(".claude/settings.local.json");return{allowRules:ylt(p),additionalDirectories:_lt(p),hookSources:l,commandHelperSources:n}}
export{akr,lkr,enn};
