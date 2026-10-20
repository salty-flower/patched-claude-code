// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{x}from"./chunk-nre716m4.js";import{f}from"./chunk-ynakaye4.js";import{gd}from"./chunk-f4yykyp9.js";import{sTe}from"./chunk-gzssw8ss.js";import{Fn}from"./chunk-krna6hsk.js";import{o,C,u,Le,T}from"./chunk-xv841za9.js";var a="anthropic/uploadsUnderSessionRules",nzt="repo_rules";function Bai(){return{experimental:{[a]:{v:1}}}}var b=f(()=>u({experimental:u({[a]:u({v:T(1)})})})),p="anthropic/monitorUnderSessionRules";function jai(){return{experimental:{[p]:{v:1}}}}var z=f(()=>u({experimental:u({[p]:u({v:T(1)})})}));var m=f(()=>{let e=Le({projectSettings:C(o()).optional(),localSettings:C(o()).optional()});return Le({deny:e,ask:e})});function SVr(e,t,s){if(!Fn(t)||!(nzt in t))return{args:t,rules:s};let{[nzt]:i,...c}=t,n=sTe(i)?void 0:m().safeParse(i).data;if(n===void 0)throw new x(`${e} was not run: its ${nzt} could not be read. Retrying won't help.`,"call: the repo rules it brought could not be read");let r=s??gd();return{args:c,rules:{...r,alwaysDenyRules:l(r.alwaysDenyRules,n.deny),alwaysAskRules:l(r.alwaysAskRules,n.ask)}}}function l(e,t){return{...e,projectSettings:[...e.projectSettings??[],...t.projectSettings??[]],localSettings:[...e.localSettings??[],...t.localSettings??[]]}}
export{nzt,Bai,jai,SVr};
