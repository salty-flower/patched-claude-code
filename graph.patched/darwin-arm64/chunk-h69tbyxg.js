// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{f}from"./chunk-67jj8qay.js";import{c}from"./chunk-k6smmjsm.js";import{je,Vt,P}from"./chunk-g4c6ggz4.js";import{i}from"./chunk-jxv3x25k.js";import{ur}from"./chunk-6vm9fw1n.js";import{Kcn,Ycn}from"./chunk-tk9shsyf.js";import{am}from"./chunk-9ntt317t.js";import{o,k,u}from"./chunk-s6d8yza1.js";var y=f(()=>k(u({marketplace:o(),plugin:o()})));function hYt(){let l=P("tengu_harbor_ledger",[]),e=y().safeParse(l);return e.success?e.data:[]}function Iq(){return!0}function Det(l){if(!l)return!1;let{name:e,marketplace:r}=am(l);if(!r)return!1;return hYt().some((t)=>t.plugin===e&&t.marketplace===r)}var d=["userSettings","projectSettings","localSettings","flagSettings","cliArg","session"];function a(l){if(l===je)return je;if(l===Vt)return Vt;return null}function g(l,e){let r=a(l);if(r===null)return null;if(e===void 0||e===""||/^[\s*]+$/.test(e))return"bare";return(r===je?Kcn(r,e):Ycn(r,e))?"dangerous_prefix":"scoped"}function h(l){let e={},r=0;for(let t of d)for(let n of l[t]??[]){let{toolName:S,ruleContent:_}=ur(n),s=a(S);if(s===null)continue;let m=g(s,_);if(m===null)continue;let p=`${t}_${s}_${m}`;e[p]=(e[p]??0)+1,r++}return e.total_shell_allow_rules=r,e}function kfr(l){i("tengu_shell_allow_rules_at_init",h(l))}function gYt(l){for(let e of l){if(e.type!=="addRules"||e.behavior!=="allow")continue;for(let r of e.rules){let t=a(r.toolName);if(t===null)continue;let n=g(r.toolName,r.ruleContent);if(n===null)continue;i("tengu_shell_allow_rule_added",{toolName:c(t),category:c(n),destination:c(e.destination)})}}}
export{kfr,gYt,hYt,Iq,Det};
