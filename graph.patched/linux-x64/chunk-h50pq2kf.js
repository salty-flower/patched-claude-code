// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{x}from"./chunk-ekgz6skk.js";import{p}from"./chunk-949csv87.js";import{gd}from"./chunk-h3dn4j2q.js";import{ZTe}from"./chunk-ww4tybgt.js";import{$n}from"./chunk-h4q93akb.js";import{o,T,u,Le,A}from"./chunk-mqaa2rrp.js";var a="anthropic/uploadsUnderSessionRules",Yzt="repo_rules";function cai(){return{experimental:{[a]:{v:1}}}}var b=p(()=>u({experimental:u({[a]:u({v:A(1)})})})),c="anthropic/monitorUnderSessionRules";function uai(){return{experimental:{[c]:{v:1}}}}var z=p(()=>u({experimental:u({[c]:u({v:A(1)})})}));var d=p(()=>{let e=Le({projectSettings:T(o()).optional(),localSettings:T(o()).optional()});return Le({deny:e,ask:e})});function gVr(e,t,s){if(!$n(t)||!(Yzt in t))return{args:t,rules:s};let{[Yzt]:i,...m}=t,n=ZTe(i)?void 0:d().safeParse(i).data;if(n===void 0)throw new x(`${e} was not run: its ${Yzt} could not be read. Retrying won't help.`,"call: the repo rules it brought could not be read");let r=s??gd();return{args:m,rules:{...r,alwaysDenyRules:l(r.alwaysDenyRules,n.deny),alwaysAskRules:l(r.alwaysAskRules,n.ask)}}}function l(e,t){return{...e,projectSettings:[...e.projectSettings??[],...t.projectSettings??[]],localSettings:[...e.localSettings??[],...t.localSettings??[]]}}
export{Yzt,cai,uai,gVr};
