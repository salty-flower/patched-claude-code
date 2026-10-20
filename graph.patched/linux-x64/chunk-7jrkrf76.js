// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{D}from"./chunk-dxktn51d.js";import{_}from"./chunk-n5v91jc3.js";import{p}from"./chunk-949csv87.js";import{jn,vn}from"./chunk-7fdn9j0a.js";import{da}from"./chunk-7p6jp6kj.js";import{ct,Yt,We}from"./chunk-4qs43hr1.js";import{Qe}from"./chunk-71nhcy1n.js";import{$n}from"./chunk-h4q93akb.js";import{o,v,T,Le}from"./chunk-mqaa2rrp.js";import{createHash as u}from"crypto";var Xtt="anthropic/returnToolOutput",Ctr=[2],w8o=4194304;function lVr(){return!0}function Ubn(e){return $n(e)&&e.tool_host_interface!==void 0}var d=64;var l=1024,a=1024,c=65536,i=p(()=>T(v().int()).max(d)),y=p(()=>T(o().min(1).max(a)).max(l).refine((e)=>e.reduce((n,t)=>n+t.length,0)<=c)),f=p(()=>Le({versions:i(),deny_rules_digest:o().regex(/^[0-9a-f]{64}$/)}));function v8o(e){let n=s(e)?.[Xtt];if(n===void 0)return{kind:"absent"};let t=i().safeParse(s(n)?.versions);if(!t.success)return{kind:"malformed"};if(m(t.data).length===0)return{kind:"no_shared_version",versions:t.data};let r=f().safeParse(n);return r.success?{kind:"requested",denyRulesDigest:r.data.deny_rules_digest}:{kind:"malformed"}}function m(e){return Ctr.filter((n)=>e.includes(n))}var O={[We]:[Qe,ct],[ct]:[Qe],[Yt]:[ct,Qe],[da]:[ct,Qe]},g=D([We,...Object.values(O).flat()]);function dVr(e){return D(e.map(jn).filter(({toolName:n,ruleContent:t})=>t!==void 0&&g.includes(n)).map(vn)).toSorted()}function cVr(e){return y().safeParse(e).success}function E8o(e){return u("sha256").update(_(e)).digest("hex")}function k8o({tools:e,denyRules:n}){return{versions:[...Ctr],tools:[...e],deny_rules:dVr(n)}}function s(e){return $n(e)?e:void 0}
export{Xtt,Ctr,w8o,lVr,Ubn,v8o,dVr,cVr,E8o,k8o};
