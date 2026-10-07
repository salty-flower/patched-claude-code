// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{d}from"./chunk-hdvxmrfb.js";import{i}from"./chunk-qbf9wv32.js";import{Bn}from"./chunk-peyxry7r.js";import{gor,hor}from"./chunk-an9ypasp.js";import{Fe,kt}from"./chunk-ma17m27h.js";var S=["userSettings","projectSettings","localSettings","flagSettings","cliArg","session"];function s(l){if(l===Fe)return Fe;if(l===kt)return kt;return null}function m(l,e){let o=s(l);if(o===null)return null;if(e===void 0||e===""||/^[\s*]+$/.test(e))return"bare";return(o===Fe?gor(o,e):hor(o,e))?"dangerous_prefix":"scoped"}function p(l){let e={},o=0;for(let r of S)for(let t of l[r]??[]){let{toolName:c,ruleContent:f}=Bn(t),n=s(c);if(n===null)continue;let u=m(n,f);if(u===null)continue;let a=`${r}_${n}_${u}`;e[a]=(e[a]??0)+1,o++}return e.total_shell_allow_rules=o,e}function bRo(l){i("tengu_shell_allow_rules_at_init",p(l))}function l2n(l){for(let e of l){if(e.type!=="addRules"||e.behavior!=="allow")continue;for(let o of e.rules){let r=s(o.toolName);if(r===null)continue;let t=m(o.toolName,o.ruleContent);if(t===null)continue;i("tengu_shell_allow_rule_added",{toolName:d(r),category:d(t),destination:d(e.destination)})}}}
export{bRo,l2n};
