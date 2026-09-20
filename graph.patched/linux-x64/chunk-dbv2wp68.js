// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Ug,mm,x_t,pZn,ytr}from"./chunk-txfrkyzp.js";import{Oe}from"./chunk-gj513b2z.js";import{X,ap,eZn}from"./chunk-847hpqqs.js";import{tW,o5n,a5e,$mt,Vfe}from"./chunk-30p0nwys.js";import{sp}from"./chunk-4knvtbyn.js";import{ca,bzt,Szt,A$e}from"./chunk-h4q23q42.js";import{XB}from"./chunk-te6f9h8j.js";import{$jt}from"./chunk-5mt43ge3.js";import{Rb,B8}from"./chunk-v25vm59m.js";import{pI}from"./chunk-86tcajxg.js";import{wKn}from"./chunk-qa67d96n.js";import{RHr}from"./chunk-4agcj7d4.js";import{wrr}from"./chunk-c5y9rx56.js";import{Nz}from"./chunk-s0be7gey.js";import{createServer as f}from"net";function Lbt(e,m,o){return new Promise((n,c)=>{let t=(r)=>{i.close(),c(r)},i=f((r)=>{let a="";r.setEncoding("utf8"),r.on("data",(d)=>{if(a+=d,o&&a.length>8388608){r.destroy();return}let p=a.indexOf(`
`);if(p<0)return;if(o){let s;try{s=X(a.slice(0,p))}catch{s=void 0}if(!s||!pI(s.auth,o)){r.destroy();return}i.close(),n(s);return}i.close();try{n(X(a.slice(0,p)))}catch(s){c(s)}}),r.on("error",o?()=>r.destroy():t)});if(i.on("error",t),m)i.once("listening",()=>{try{m()}catch(r){t(r)}});i.listen(e)})}async function Nbt(e,m){let o=await sp(e.cwd,void 0);ap(o);let n={originalCwd:o,projectRoot:o,cwd:o};if(e.sessionId)mm(Ug(e.sessionId),"spare_claim",null,n);else x_t(n);if(ca(),Vfe(),$mt(),pZn(),RHr(),XB({warm_spare_claimed:1}),Oe(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)){for(let t of Object.keys(process.env))if(bzt(t)||t==="ANTHROPIC_CUSTOM_HEADERS"||Szt(t)||A$e(t))delete process.env[t]}delete process.env.ANTHROPIC_AUTH_TOKEN,delete process.env.ANTHROPIC_API_KEY,delete process.env.CLAUDE_CODE_OAUTH_TOKEN,Object.assign(process.env,e.env),process.argv=[process.argv[0],process.argv[1],...e.argv],eZn(),await wrr(e.argv),ytr(),o5n(),$jt(),Nz(),a5e({preservePendingExposures:!0,preserveLoggedExposures:!0}),tW(),wKn(),B8(),Rb();let{main:c}=await m;await c()}
export{Lbt,Nbt};
