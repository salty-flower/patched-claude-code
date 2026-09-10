// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{m}from"./chunk-vp9rx3bq.js";import{u}from"./chunk-am8gnetv.js";import{ze,Bt,H}from"./chunk-e02s7cks.js";import{i}from"./chunk-z0p50v56.js";import{Ur}from"./chunk-fx59774s.js";import{j8t,W8t}from"./chunk-06mxd1fp.js";import{rf}from"./chunk-8yp693fz.js";import{s,T,c}from"./chunk-asdfkk3x.js";var y=m(()=>T(c({marketplace:s(),plugin:s()})));function f2t(){let o=H("tengu_harbor_ledger",[]),e=y().safeParse(o);return e.success?e.data:[]}function a3(){return!0}function _Ke(o){if(!o)return!1;let{name:e,marketplace:l}=rf(o);if(!l)return!1;return f2t().some((r)=>r.plugin===e&&r.marketplace===l)}var d=["userSettings","projectSettings","localSettings","flagSettings","cliArg","session"];function a(o){if(o===ze)return ze;if(o===Bt)return Bt;return null}function g(o,e){let l=a(o);if(l===null)return null;if(e===void 0||e===""||/^[\s*]+$/.test(e))return"bare";return(l===ze?j8t(l,e):W8t(l,e))?"dangerous_prefix":"scoped"}function h(o){let e={},l=0;for(let r of d)for(let t of o[r]??[]){let{toolName:S,ruleContent:_}=Ur(t),n=a(S);if(n===null)continue;let f=g(n,_);if(f===null)continue;let p=`${r}_${n}_${f}`;e[p]=(e[p]??0)+1,l++}return e.total_shell_allow_rules=l,e}function A9n(o){i("tengu_shell_allow_rules_at_init",h(o))}function p2t(o){for(let e of o){if(e.type!=="addRules"||e.behavior!=="allow")continue;for(let l of e.rules){let r=a(l.toolName);if(r===null)continue;let t=g(l.toolName,l.ruleContent);if(t===null)continue;i("tengu_shell_allow_rule_added",{toolName:u(r),category:u(t),destination:u(e.destination)})}}}
export{A9n,p2t,f2t,a3,_Ke};
