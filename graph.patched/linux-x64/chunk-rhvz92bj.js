// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{m}from"./chunk-vp9rx3bq.js";import{u}from"./chunk-0rpkhv24.js";import{We,Ut,I}from"./chunk-ce4ppmnp.js";import{i}from"./chunk-nx6yj2w6.js";import{Ur}from"./chunk-y0j7napd.js";import{w9t,v9t}from"./chunk-5bk908kr.js";import{rf}from"./chunk-b84ke5ee.js";import{s,T,c}from"./chunk-wvjc3h2t.js";var y=m(()=>T(c({marketplace:s(),plugin:s()})));function X1t(){let o=I("tengu_harbor_ledger",[]),e=y().safeParse(o);return e.success?e.data:[]}function Jq(){return!0}function s5e(o){if(!o)return!1;let{name:e,marketplace:l}=rf(o);if(!l)return!1;return X1t().some((r)=>r.plugin===e&&r.marketplace===l)}var d=["userSettings","projectSettings","localSettings","flagSettings","cliArg","session"];function a(o){if(o===We)return We;if(o===Ut)return Ut;return null}function g(o,e){let l=a(o);if(l===null)return null;if(e===void 0||e===""||/^[\s*]+$/.test(e))return"bare";return(l===We?w9t(l,e):v9t(l,e))?"dangerous_prefix":"scoped"}function h(o){let e={},l=0;for(let r of d)for(let t of o[r]??[]){let{toolName:S,ruleContent:_}=Ur(t),n=a(S);if(n===null)continue;let f=g(n,_);if(f===null)continue;let p=`${r}_${n}_${f}`;e[p]=(e[p]??0)+1,l++}return e.total_shell_allow_rules=l,e}function q3n(o){i("tengu_shell_allow_rules_at_init",h(o))}function Y1t(o){for(let e of o){if(e.type!=="addRules"||e.behavior!=="allow")continue;for(let l of e.rules){let r=a(l.toolName);if(r===null)continue;let t=g(l.toolName,l.ruleContent);if(t===null)continue;i("tengu_shell_allow_rule_added",{toolName:u(r),category:u(t),destination:u(e.destination)})}}}
export{q3n,Y1t,X1t,Jq,s5e};
