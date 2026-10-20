// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{MA,B$}from"./chunk-gzssw8ss.js";import{uk}from"./chunk-qwytg6a7.js";import{c3n}from"./chunk-2j9r3w5k.js";import{mte,gte}from"./chunk-y573qe02.js";import{Lar,uCt,pCt,Far,$ar,Uar,Bar,jar}from"./chunk-tv6syjsm.js";import{join as i,resolve as f}from"path";function q8r(o,{backstop:t=!1}={}){return o.allowRules.sources.length>0||o.additionalDirectories.sources.length>0||!t&&(o.hookSources.length>0||o.commandHelperSources.length>0)}function Y8r(){return{allowRules:uCt(),additionalDirectories:pCt(),hookSources:[],commandHelperSources:[]}}function MCn(o){let t=f(o),m=B$(t,uk),r=MA(i(t,".claude","settings.json")).settings,c=i(m,".claude","settings.local.json"),a=i(t,".claude","settings.local.json"),s=[MA(c).settings,...a===c?[]:[MA(a).settings]].filter((e)=>e!==null),S=s.length===0?null:{permissions:{additionalDirectories:s.flatMap((e)=>e.permissions?.additionalDirectories??[])}},u={projectSettings:r,localSettings:S},p={sources:[["projectSettings",".claude/settings.json"],["localSettings",".claude/settings.local.json"]],read:(e)=>u[e]??null,rules:(e)=>e==="localSettings"?s.flatMap((h)=>mte(h,e)):mte(u[e]??null,e)},d=(e)=>$ar(e)||Uar(e)||Bar(e)||Far(e)||jar(e),l=[],n=[];if(Lar(r))l.push(".claude/settings.json");if(s.some(Lar))l.push(".claude/settings.local.json");let g=c3n(t);if(g!==null)l.push(gte(g));if(d(r))n.push(".claude/settings.json");if(s.some(d))n.push(".claude/settings.local.json");return{allowRules:uCt(p),additionalDirectories:pCt(p),hookSources:l,commandHelperSources:n}}
export{q8r,Y8r,MCn};
