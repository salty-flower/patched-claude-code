// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{s}from"./chunk-yqfv1yd3.js";import{c}from"./chunk-r1b219q3.js";import{Br}from"./chunk-1vhz7b90.js";import{CGt,IGt}from"./chunk-t0yzptsk.js";import{Qe,Ut}from"./chunk-1e5y3pjf.js";var p=["userSettings","projectSettings","localSettings","flagSettings","cliArg","session"];function i(l){if(l===Qe)return Qe;if(l===Ut)return Ut;return null}function m(l,e){let o=i(l);if(o===null)return null;if(e===void 0||e===""||/^[\s*]+$/.test(e))return"bare";return(o===Qe?CGt(o,e):IGt(o,e))?"dangerous_prefix":"scoped"}function y(l){let e={},o=0;for(let r of p)for(let t of l[r]??[]){let{toolName:f,ruleContent:S}=Br(t),n=i(f);if(n===null)continue;let u=m(n,S);if(u===null)continue;let a=`${r}_${n}_${u}`;e[a]=(e[a]??0)+1,o++}return e.total_shell_allow_rules=o,e}function bUn(l){s("tengu_shell_allow_rules_at_init",y(l))}function J0t(l){for(let e of l){if(e.type!=="addRules"||e.behavior!=="allow")continue;for(let o of e.rules){let r=i(o.toolName);if(r===null)continue;let t=m(o.toolName,o.ruleContent);if(t===null)continue;s("tengu_shell_allow_rule_added",{toolName:c(r),category:c(t),destination:c(e.destination)})}}}
export{bUn,J0t};
