// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{i}from"./chunk-mx473n83.js";import{u}from"./chunk-jxvdfgn0.js";import{$r}from"./chunk-herm3ypf.js";import{z5t,G5t}from"./chunk-f2pbqezq.js";import{ze,Wt}from"./chunk-vryy7b5x.js";var p=["userSettings","projectSettings","localSettings","flagSettings","cliArg","session"];function s(l){if(l===ze)return ze;if(l===Wt)return Wt;return null}function c(l,e){let o=s(l);if(o===null)return null;if(e===void 0||e===""||/^[\s*]+$/.test(e))return"bare";return(o===ze?z5t(o,e):G5t(o,e))?"dangerous_prefix":"scoped"}function y(l){let e={},o=0;for(let r of p)for(let t of l[r]??[]){let{toolName:f,ruleContent:S}=$r(t),n=s(f);if(n===null)continue;let a=c(n,S);if(a===null)continue;let m=`${r}_${n}_${a}`;e[m]=(e[m]??0)+1,o++}return e.total_shell_allow_rules=o,e}function HVn(l){i("tengu_shell_allow_rules_at_init",y(l))}function dUt(l){for(let e of l){if(e.type!=="addRules"||e.behavior!=="allow")continue;for(let o of e.rules){let r=s(o.toolName);if(r===null)continue;let t=c(o.toolName,o.ruleContent);if(t===null)continue;i("tengu_shell_allow_rule_added",{toolName:u(r),category:u(t),destination:u(e.destination)})}}}
export{HVn,dUt};
