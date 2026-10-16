// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{D}from"./chunk-xzypj06m.js";import{_}from"./chunk-bnfhb7sj.js";import{f}from"./chunk-5r64b6x9.js";import{Wn,Sn}from"./chunk-zw6exh70.js";import{qi}from"./chunk-1901fdh6.js";import{dt,qt,We}from"./chunk-1jaxs49d.js";import{Je}from"./chunk-1rc6bk2z.js";import{Gn}from"./chunk-rjxv46at.js";import{o,E,C,Me}from"./chunk-82bgdty3.js";import{createHash as u}from"crypto";var jZe="anthropic/returnToolOutput",m7n=[2],t6o=4194304;function njr(){return!0}function Mgn(e){return Gn(e)&&e.tool_host_interface!==void 0}var d=64;var l=1024,a=1024,p=65536,i=f(()=>C(E().int()).max(d)),c=f(()=>C(o().min(1).max(a)).max(l).refine((e)=>e.reduce((n,t)=>n+t.length,0)<=p)),y=f(()=>Me({versions:i(),deny_rules_digest:o().regex(/^[0-9a-f]{64}$/)}));function n6o(e){let n=s(e)?.[jZe];if(n===void 0)return{kind:"absent"};let t=i().safeParse(s(n)?.versions);if(!t.success)return{kind:"malformed"};if(m(t.data).length===0)return{kind:"no_shared_version",versions:t.data};let r=y().safeParse(n);return r.success?{kind:"requested",denyRulesDigest:r.data.deny_rules_digest}:{kind:"malformed"}}function m(e){return m7n.filter((n)=>e.includes(n))}var O={[We]:[Je,dt],[dt]:[Je],[qt]:[dt,Je],[qi]:[dt,Je]},T=D([We,...Object.values(O).flat()]);function rjr(e){return D(e.map(Wn).filter(({toolName:n,ruleContent:t})=>t!==void 0&&T.includes(n)).map(Sn)).toSorted()}function ojr(e){return c().safeParse(e).success}function r6o(e){return u("sha256").update(_(e)).digest("hex")}function o6o({tools:e,denyRules:n}){return{versions:[...m7n],tools:[...e],deny_rules:rjr(n)}}function s(e){return Gn(e)?e:void 0}
export{jZe,m7n,t6o,njr,Mgn,n6o,rjr,ojr,r6o,o6o};
