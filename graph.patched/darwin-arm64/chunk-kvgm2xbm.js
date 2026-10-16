// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{eT,e$}from"./chunk-d9vq4daa.js";import{Gv}from"./chunk-61p68esv.js";import{ozn}from"./chunk-a649v17m.js";import{_ee,See}from"./chunk-krmqqdbm.js";import{Jtr,bEt,wEt,Ztr,enr,tnr,nnr,rnr}from"./chunk-kdn6mzm4.js";import{join as i,resolve as f}from"path";function cqr(o,{backstop:t=!1}={}){return o.allowRules.sources.length>0||o.additionalDirectories.sources.length>0||!t&&(o.hookSources.length>0||o.commandHelperSources.length>0)}function uqr(){return{allowRules:bEt(),additionalDirectories:wEt(),hookSources:[],commandHelperSources:[]}}function ywn(o){let t=f(o),m=e$(t,Gv),r=eT(i(t,".claude","settings.json")).settings,c=i(m,".claude","settings.local.json"),a=i(t,".claude","settings.local.json"),s=[eT(c).settings,...a===c?[]:[eT(a).settings]].filter((e)=>e!==null),S=s.length===0?null:{permissions:{additionalDirectories:s.flatMap((e)=>e.permissions?.additionalDirectories??[])}},u={projectSettings:r,localSettings:S},p={sources:[["projectSettings",".claude/settings.json"],["localSettings",".claude/settings.local.json"]],read:(e)=>u[e]??null,rules:(e)=>e==="localSettings"?s.flatMap((h)=>_ee(h,e)):_ee(u[e]??null,e)},d=(e)=>enr(e)||tnr(e)||nnr(e)||Ztr(e)||rnr(e),l=[],n=[];if(Jtr(r))l.push(".claude/settings.json");if(s.some(Jtr))l.push(".claude/settings.local.json");let g=ozn(t);if(g!==null)l.push(See(g));if(d(r))n.push(".claude/settings.json");if(s.some(d))n.push(".claude/settings.local.json");return{allowRules:bEt(p),additionalDirectories:wEt(p),hookSources:l,commandHelperSources:n}}
export{cqr,uqr,ywn};
