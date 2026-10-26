// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{ke,Ol,PW}from"./chunk-ersar6wn.js";import{f}from"./chunk-nyvhtfb3.js";import{t}from"./chunk-d7b0m8qy.js";import{ae}from"./chunk-hx3hkv7r.js";import{$Bo}from"./chunk-w8x996zn.js";import{ze}from"./chunk-aet23r5k.js";import{rat,j4t,vAn}from"./chunk-w63007b5.js";import{H8e}from"./chunk-3crwebzz.js";import{o,u,Fe}from"./chunk-k395ayhm.js";import{relative as g,sep as h}from"path";var dur="RegisterRepoRoot",w=32,BJr=4096,y=f(()=>u({directory:o().max(BJr)})),E=f(()=>Fe([u({directory:o().min(1).max(4096)}),u({refusal:o().min(1).max(64)})]));async function Tas(s,l,d){let{directory:R}=y().parse(s),c=d.toolUseContext(),{workspaceRoot:e={kind:"absent"}}=d,r;try{r=await vAn(R,()=>({...ae(c),additionalWorkingDirectories:new Map(e.kind==="valid"?[[e.root,{path:e.root,source:"cliArg"}]]:[])}),ke())}catch(i){let a=rat(i);if(a===void 0)throw i;if(a==="outside_scope"){let m=e.kind==="valid"?"the folder is not below the workspace root":e.kind==="invalid"?`the workspace root is invalid: ${e.fault}`:"no workspace root";t(`${dur}: outside_scope: ${m}`,{level:"warn"})}return p(a)}if(e.kind==="valid"&&!j4t(r,ke(),[],[]).allowed&&g(e.real,r).split(h).some((i)=>i===""||i.startsWith(".")))return t(`${dur}: outside_scope: the folder is not strictly below where the workspace root led at the daemon's start, or a folder on the way has a name that starts with a dot`,{level:"warn"}),p("outside_scope");l.throwIfAborted();let n=Ol();if(!n.includes(r)){if(n.length>=w)return p("too_many");PW([...n,r]),$Bo(r),ze.refreshConfig()}return await H8e(),{summary:"folder registered",output:{directory:r}}}function p(s){return{summary:`folder not registered: ${s}`,output:{refusal:s}}}
export{dur,BJr,Tas};
