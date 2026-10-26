// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{L}from"./chunk-ersar6wn.js";import{_}from"./chunk-d7b0m8qy.js";import{f}from"./chunk-nyvhtfb3.js";import{Bn,dn}from"./chunk-ykcv164t.js";import{ra}from"./chunk-27xjmczp.js";import{at,qt,Be}from"./chunk-j2d407c1.js";import{qe}from"./chunk-djgw0xdn.js";import{mn}from"./chunk-1a0taxx3.js";import{o,E,C,Ue}from"./chunk-k395ayhm.js";import{createHash as u}from"crypto";var Jit="anthropic/returnToolOutput",iur=[2],bas=4194304;function IJr(){return!0}function mAn(e){return mn(e)&&e.tool_host_interface!==void 0}var d=64;var l=1024,a=1024,p=65536,i=f(()=>C(E().int()).max(d)),c=f(()=>C(o().min(1).max(a)).max(l).refine((e)=>e.reduce((n,t)=>n+t.length,0)<=p)),y=f(()=>Ue({versions:i(),deny_rules_digest:o().regex(/^[0-9a-f]{64}$/)}));function was(e){let n=s(e)?.[Jit];if(n===void 0)return{kind:"absent"};let t=i().safeParse(s(n)?.versions);if(!t.success)return{kind:"malformed"};if(m(t.data).length===0)return{kind:"no_shared_version",versions:t.data};let r=y().safeParse(n);return r.success?{kind:"requested",denyRulesDigest:r.data.deny_rules_digest}:{kind:"malformed"}}function m(e){return iur.filter((n)=>e.includes(n))}var O={[Be]:[qe,at],[at]:[qe],[qt]:[at,qe],[ra]:[at,qe]},T=L([Be,...Object.values(O).flat()]);function OJr(e){return L(e.map(Bn).filter(({toolName:n,ruleContent:t})=>t!==void 0&&T.includes(n)).map(dn)).toSorted()}function MJr(e){return c().safeParse(e).success}function Eas(e){return u("sha256").update(_(e)).digest("hex")}function vas({tools:e,denyRules:n}){return{versions:[...iur],tools:[...e],deny_rules:OJr(n)}}function s(e){return mn(e)?e:void 0}
export{Jit,iur,bas,IJr,mAn,was,OJr,MJr,Eas,vas};
