// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{d}from"./chunk-bkr1h20c.js";import{i}from"./chunk-nayw0pf7.js";import{jn}from"./chunk-tfrn9jh8.js";import{Rdr,xdr}from"./chunk-tkepzc5h.js";import{$e,At}from"./chunk-hesrqedr.js";var S=["userSettings","projectSettings","localSettings","flagSettings","cliArg","session"];function s(l){if(l===$e)return $e;if(l===At)return At;return null}function m(l,e){let o=s(l);if(o===null)return null;if(e===void 0||e===""||/^[\s*]+$/.test(e))return"bare";return(o===$e?Rdr(o,e):xdr(o,e))?"dangerous_prefix":"scoped"}function p(l){let e={},o=0;for(let r of S)for(let t of l[r]??[]){let{toolName:c,ruleContent:f}=jn(t),n=s(c);if(n===null)continue;let u=m(n,f);if(u===null)continue;let a=`${r}_${n}_${u}`;e[a]=(e[a]??0)+1,o++}return e.total_shell_allow_rules=o,e}function gDo(l){i("tengu_shell_allow_rules_at_init",p(l))}function cVn(l){for(let e of l){if(e.type!=="addRules"||e.behavior!=="allow")continue;for(let o of e.rules){let r=s(o.toolName);if(r===null)continue;let t=m(o.toolName,o.ruleContent);if(t===null)continue;i("tengu_shell_allow_rule_added",{toolName:d(r),category:d(t),destination:d(e.destination)})}}}
export{gDo,cVn};
