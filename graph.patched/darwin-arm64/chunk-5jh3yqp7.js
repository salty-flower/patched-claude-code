// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Bg,gm,B_t,NZn,jtr}from"./chunk-sgamszzq.js";import{Oe}from"./chunk-vx7e38ke.js";import{X,cp,CZn}from"./chunk-qmm87fyw.js";import{cW,x9n,S9e,Qmt,eme}from"./chunk-g4c6ggz4.js";import{ip}from"./chunk-rffpe63a.js";import{ua,U6t,B6t,$1e}from"./chunk-a38xyc22.js";import{r2}from"./chunk-jghr2zs7.js";import{ojt}from"./chunk-8yjp8tpt.js";import{HS,Y5}from"./chunk-9ngv0yxa.js";import{_0}from"./chunk-7tmdsrws.js";import{KVn}from"./chunk-gk3240hr.js";import{uIr}from"./chunk-0vj66tyn.js";import{Vor}from"./chunk-2rzdns6y.js";import{G6}from"./chunk-rkmrec0m.js";import{createServer as f}from"net";function XSt(e,m,o){return new Promise((n,c)=>{let t=(r)=>{i.close(),c(r)},i=f((r)=>{let a="";r.setEncoding("utf8"),r.on("data",(d)=>{if(a+=d,o&&a.length>8388608){r.destroy();return}let p=a.indexOf(`
`);if(p<0)return;if(o){let s;try{s=X(a.slice(0,p))}catch{s=void 0}if(!s||!_0(s.auth,o)){r.destroy();return}i.close(),n(s);return}i.close();try{n(X(a.slice(0,p)))}catch(s){c(s)}}),r.on("error",o?()=>r.destroy():t)});if(i.on("error",t),m)i.once("listening",()=>{try{m()}catch(r){t(r)}});i.listen(e)})}async function JSt(e,m){let o=await ip(e.cwd,void 0);cp(o);let n={originalCwd:o,projectRoot:o,cwd:o};if(e.sessionId)gm(Bg(e.sessionId),"spare_claim",null,n);else B_t(n);if(ua(),eme(),Qmt(),NZn(),uIr(),r2({warm_spare_claimed:1}),Oe(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)){for(let t of Object.keys(process.env))if(U6t(t)||t==="ANTHROPIC_CUSTOM_HEADERS"||B6t(t)||$1e(t))delete process.env[t]}delete process.env.ANTHROPIC_AUTH_TOKEN,delete process.env.ANTHROPIC_API_KEY,delete process.env.CLAUDE_CODE_OAUTH_TOKEN,Object.assign(process.env,e.env),process.argv=[process.argv[0],process.argv[1],...e.argv],CZn(),await Vor(e.argv),jtr(),x9n(),ojt(),G6(),S9e({preservePendingExposures:!0,preserveLoggedExposures:!0}),cW(),KVn(),Y5(),HS();let{main:c}=await m;await c()}
export{XSt,JSt};
