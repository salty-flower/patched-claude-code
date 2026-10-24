// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{c}from"./chunk-ydpbzmt4.js";import{a}from"./chunk-wq923bwc.js";import{Bn}from"./chunk-ykcv164t.js";import{wWr,EWr}from"./chunk-zc9jwmmw.js";import{Be,Tt}from"./chunk-j2d407c1.js";var p=["userSettings","projectSettings","localSettings","flagSettings","cliArg","session"];function s(l){if(l===Be)return Be;if(l===Tt)return Tt;return null}function m(l,e){let o=s(l);if(o===null)return null;if(e===void 0||e===""||/^[\s*]+$/.test(e))return"bare";return(o===Be?wWr(o,e):EWr(o,e))?"dangerous_prefix":"scoped"}function y(l){let e={},o=0;for(let r of p)for(let t of l[r]??[]){let{toolName:f,ruleContent:S}=Bn(t),n=s(f);if(n===null)continue;let i=m(n,S);if(i===null)continue;let u=`${r}_${n}_${i}`;e[u]=(e[u]??0)+1,o++}return e.total_shell_allow_rules=o,e}function iSs(l){a("tengu_shell_allow_rules_at_init",y(l))}function ESr(l){for(let e of l){if(e.type!=="addRules"||e.behavior!=="allow")continue;for(let o of e.rules){let r=s(o.toolName);if(r===null)continue;let t=m(o.toolName,o.ruleContent);if(t===null)continue;a("tengu_shell_allow_rule_added",{toolName:c(r),category:c(t),destination:c(e.destination)})}}}
export{iSs,ESr};
