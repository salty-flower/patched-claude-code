// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{s}from"./chunk-kzyd0fd4.js";import{u}from"./chunk-2avye5sw.js";import{Ur}from"./chunk-2czbv1yw.js";import{KGt,XGt}from"./chunk-htp9pxxe.js";import{Qe,Gt}from"./chunk-h6md7820.js";var p=["userSettings","projectSettings","localSettings","flagSettings","cliArg","session"];function i(l){if(l===Qe)return Qe;if(l===Gt)return Gt;return null}function c(l,e){let o=i(l);if(o===null)return null;if(e===void 0||e===""||/^[\s*]+$/.test(e))return"bare";return(o===Qe?KGt(o,e):XGt(o,e))?"dangerous_prefix":"scoped"}function y(l){let e={},o=0;for(let r of p)for(let t of l[r]??[]){let{toolName:f,ruleContent:S}=Ur(t),n=i(f);if(n===null)continue;let a=c(n,S);if(a===null)continue;let m=`${r}_${n}_${a}`;e[m]=(e[m]??0)+1,o++}return e.total_shell_allow_rules=o,e}function Tjn(l){s("tengu_shell_allow_rules_at_init",y(l))}function pNt(l){for(let e of l){if(e.type!=="addRules"||e.behavior!=="allow")continue;for(let o of e.rules){let r=i(o.toolName);if(r===null)continue;let t=c(o.toolName,o.ruleContent);if(t===null)continue;s("tengu_shell_allow_rule_added",{toolName:u(r),category:u(t),destination:u(e.destination)})}}}
export{Tjn,pNt};
