// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{_}from"./chunk-gyf58rwf.js";import{p}from"./chunk-fdwn5gdv.js";import{Un,_n}from"./chunk-z6p21rxk.js";import{Zi}from"./chunk-bk5ct2gw.js";import{ht,Xt,Be}from"./chunk-r2vtj1kh.js";import{rt}from"./chunk-1d8w1b0d.js";import{sr}from"./chunk-nnctmda1.js";import{o,v,A,De}from"./chunk-9cmjz7j9.js";import{D}from"./chunk-3qabb19b.js";import{createHash as u}from"crypto";var hYe="anthropic/returnToolOutput",G6n=[2],J0o=4194304;function GIr(){return!0}function Win(e){return sr(e)&&e.tool_host_interface!==void 0}var d=64;var l=1024,a=1024,c=65536,i=p(()=>A(v().int()).max(d)),y=p(()=>A(o().min(1).max(a)).max(l).refine((e)=>e.reduce((n,t)=>n+t.length,0)<=c)),f=p(()=>De({versions:i(),deny_rules_digest:o().regex(/^[0-9a-f]{64}$/)}));function Q0o(e){let n=s(e)?.[hYe];if(n===void 0)return{kind:"absent"};let t=i().safeParse(s(n)?.versions);if(!t.success)return{kind:"malformed"};if(m(t.data).length===0)return{kind:"no_shared_version",versions:t.data};let r=f().safeParse(n);return r.success?{kind:"requested",denyRulesDigest:r.data.deny_rules_digest}:{kind:"malformed"}}function m(e){return G6n.filter((n)=>e.includes(n))}var O={[Be]:[rt,ht],[ht]:[rt],[Xt]:[ht,rt],[Zi]:[ht,rt]},T=D([Be,...Object.values(O).flat()]);function zIr(e){return D(e.map(Un).filter(({toolName:n,ruleContent:t})=>t!==void 0&&T.includes(n)).map(_n)).toSorted()}function VIr(e){return y().safeParse(e).success}function Z0o(e){return u("sha256").update(_(e)).digest("hex")}function eHo({tools:e,denyRules:n}){return{versions:[...G6n],tools:[...e],deny_rules:zIr(n)}}function s(e){return sr(e)?e:void 0}
export{hYe,G6n,J0o,GIr,Win,Q0o,zIr,VIr,Z0o,eHo};
