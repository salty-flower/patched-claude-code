// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{c0,bL}from"./chunk-5g70wphz.js";import{nE}from"./chunk-48by85wp.js";import{bOn}from"./chunk-wgy8bpka.js";import{_he,ZX}from"./chunk-3k2bwt52.js";import{E6n,Dut,Lut,k6n,C6n,A6n,T6n,R6n}from"./chunk-zhk9gpv9.js";import{join as i,resolve as f}from"path";function HIr(o,{backstop:t=!1}={}){return o.allowRules.sources.length>0||o.additionalDirectories.sources.length>0||!t&&(o.hookSources.length>0||o.commandHelperSources.length>0)}function MIr(){return{allowRules:Dut(),additionalDirectories:Lut(),hookSources:[],commandHelperSources:[]}}function Din(o){let t=f(o),m=bL(t,nE),r=c0(i(t,".claude","settings.json")).settings,c=i(m,".claude","settings.local.json"),a=i(t,".claude","settings.local.json"),s=[c0(c).settings,...a===c?[]:[c0(a).settings]].filter((e)=>e!==null),S=s.length===0?null:{permissions:{additionalDirectories:s.flatMap((e)=>e.permissions?.additionalDirectories??[])}},u={projectSettings:r,localSettings:S},p={sources:[["projectSettings",".claude/settings.json"],["localSettings",".claude/settings.local.json"]],read:(e)=>u[e]??null,rules:(e)=>e==="localSettings"?s.flatMap((h)=>_he(h,e)):_he(u[e]??null,e)},d=(e)=>C6n(e)||A6n(e)||T6n(e)||k6n(e)||R6n(e),l=[],n=[];if(E6n(r))l.push(".claude/settings.json");if(s.some(E6n))l.push(".claude/settings.local.json");let g=bOn(t);if(g!==null)l.push(ZX(g));if(d(r))n.push(".claude/settings.json");if(s.some(d))n.push(".claude/settings.local.json");return{allowRules:Dut(p),additionalDirectories:Lut(p),hookSources:l,commandHelperSources:n}}
export{HIr,MIr,Din};
