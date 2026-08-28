// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{s}from"./chunk-3jdapt8v.js";import{c}from"./chunk-jqgad8sa.js";import{jr}from"./chunk-1a6j9rxs.js";import{b2t,S2t}from"./chunk-dsq3dn3b.js";import{Xe,Nt}from"./chunk-cgpv4wh0.js";var p=["userSettings","projectSettings","localSettings","flagSettings","cliArg","session"];function i(l){if(l===Xe)return Xe;if(l===Nt)return Nt;return null}function m(l,e){let o=i(l);if(o===null)return null;if(e===void 0||e===""||/^[\s*]+$/.test(e))return"bare";return(o===Xe?b2t(o,e):S2t(o,e))?"dangerous_prefix":"scoped"}function y(l){let e={},o=0;for(let r of p)for(let t of l[r]??[]){let{toolName:f,ruleContent:S}=jr(t),n=i(f);if(n===null)continue;let u=m(n,S);if(u===null)continue;let a=`${r}_${n}_${u}`;e[a]=(e[a]??0)+1,o++}return e.total_shell_allow_rules=o,e}function ELn(l){s("tengu_shell_allow_rules_at_init",y(l))}function Sxt(l){for(let e of l){if(e.type!=="addRules"||e.behavior!=="allow")continue;for(let o of e.rules){let r=i(o.toolName);if(r===null)continue;let t=m(o.toolName,o.ruleContent);if(t===null)continue;s("tengu_shell_allow_rule_added",{toolName:c(r),category:c(t),destination:c(e.destination)})}}}
export{ELn,Sxt};
