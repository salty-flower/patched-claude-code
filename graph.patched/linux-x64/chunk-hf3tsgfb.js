// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{D}from"./chunk-eqmywwjn.js";import{_}from"./chunk-cwsn6mdf.js";import{p}from"./chunk-he0s6sfd.js";import{Wn,bn}from"./chunk-d3cqnp4r.js";import{Ki}from"./chunk-k16gymf7.js";import{dt,Kt,We}from"./chunk-dzt95g1x.js";import{Je}from"./chunk-ymemkdhw.js";import{zn}from"./chunk-1tk79c3h.js";import{o,v,T,He}from"./chunk-zypddzr3.js";import{createHash as u}from"crypto";var LZe="anthropic/returnToolOutput",JXn=[2],T2o=4194304;function D1r(){return!0}function _gn(e){return zn(e)&&e.tool_host_interface!==void 0}var d=64;var l=1024,a=1024,c=65536,i=p(()=>T(v().int()).max(d)),y=p(()=>T(o().min(1).max(a)).max(l).refine((e)=>e.reduce((n,t)=>n+t.length,0)<=c)),f=p(()=>He({versions:i(),deny_rules_digest:o().regex(/^[0-9a-f]{64}$/)}));function A2o(e){let n=s(e)?.[LZe];if(n===void 0)return{kind:"absent"};let t=i().safeParse(s(n)?.versions);if(!t.success)return{kind:"malformed"};if(m(t.data).length===0)return{kind:"no_shared_version",versions:t.data};let r=f().safeParse(n);return r.success?{kind:"requested",denyRulesDigest:r.data.deny_rules_digest}:{kind:"malformed"}}function m(e){return JXn.filter((n)=>e.includes(n))}var O={[We]:[Je,dt],[dt]:[Je],[Kt]:[dt,Je],[Ki]:[dt,Je]},g=D([We,...Object.values(O).flat()]);function L1r(e){return D(e.map(Wn).filter(({toolName:n,ruleContent:t})=>t!==void 0&&g.includes(n)).map(bn)).toSorted()}function N1r(e){return y().safeParse(e).success}function C2o(e){return u("sha256").update(_(e)).digest("hex")}function R2o({tools:e,denyRules:n}){return{versions:[...JXn],tools:[...e],deny_rules:L1r(n)}}function s(e){return zn(e)?e:void 0}
export{LZe,JXn,T2o,D1r,_gn,A2o,L1r,N1r,C2o,R2o};
