// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{D}from"./chunk-kpqr86hf.js";import{_}from"./chunk-tdxkq523.js";import{f}from"./chunk-ynakaye4.js";import{jn,En}from"./chunk-paax7ahr.js";import{da}from"./chunk-bvn0epzr.js";import{ct,Yt,We}from"./chunk-ex8w1b3a.js";import{Qe}from"./chunk-7nh1172a.js";import{Fn}from"./chunk-krna6hsk.js";import{o,E,C,Le}from"./chunk-xv841za9.js";import{createHash as u}from"crypto";var nnt="anthropic/returnToolOutput",ztr=[2],Q8o=4194304;function HVr(){return!0}function obn(e){return Fn(e)&&e.tool_host_interface!==void 0}var d=64;var l=1024,a=1024,p=65536,i=f(()=>C(E().int()).max(d)),c=f(()=>C(o().min(1).max(a)).max(l).refine((e)=>e.reduce((n,t)=>n+t.length,0)<=p)),y=f(()=>Le({versions:i(),deny_rules_digest:o().regex(/^[0-9a-f]{64}$/)}));function Z8o(e){let n=s(e)?.[nnt];if(n===void 0)return{kind:"absent"};let t=i().safeParse(s(n)?.versions);if(!t.success)return{kind:"malformed"};if(m(t.data).length===0)return{kind:"no_shared_version",versions:t.data};let r=y().safeParse(n);return r.success?{kind:"requested",denyRulesDigest:r.data.deny_rules_digest}:{kind:"malformed"}}function m(e){return ztr.filter((n)=>e.includes(n))}var O={[We]:[Qe,ct],[ct]:[Qe],[Yt]:[ct,Qe],[da]:[ct,Qe]},T=D([We,...Object.values(O).flat()]);function DVr(e){return D(e.map(jn).filter(({toolName:n,ruleContent:t})=>t!==void 0&&T.includes(n)).map(En)).toSorted()}function LVr(e){return c().safeParse(e).success}function eYo(e){return u("sha256").update(_(e)).digest("hex")}function tYo({tools:e,denyRules:n}){return{versions:[...ztr],tools:[...e],deny_rules:DVr(n)}}function s(e){return Fn(e)?e:void 0}
export{nnt,ztr,Q8o,HVr,obn,Z8o,DVr,LVr,eYo,tYo};
