// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Gu,Xp,Jtt,WIn,UOn}from"./chunk-hdbxv3pp.js";import{Le}from"./chunk-5e3knf27.js";import{K,Wu,IIn}from"./chunk-t2jwg94b.js";import{dU,cCn,w$e,gQe,bie}from"./chunk-h6md7820.js";import{hl}from"./chunk-0s8h31st.js";import{Vl,ECt,ACt,ARe}from"./chunk-tgbc60ar.js";import{cW}from"./chunk-qfzsdjtj.js";import{WA,_q}from"./chunk-09669z0m.js";import{avt}from"./chunk-3yv85b0k.js";import{DR}from"./chunk-3vg54qd4.js";import{iwn}from"./chunk-dy9qenww.js";import{iYn}from"./chunk-4hd0hp9b.js";import{LLn}from"./chunk-77e4q9zf.js";import{iU}from"./chunk-xkj3bqd7.js";import{createServer as f}from"net";function srt(e,m,o){return new Promise((n,c)=>{let t=(r)=>{i.close(),c(r)},i=f((r)=>{let a="";r.setEncoding("utf8"),r.on("data",(d)=>{if(a+=d,o&&a.length>8388608){r.destroy();return}let p=a.indexOf(`
`);if(p<0)return;if(o){let s;try{s=K(a.slice(0,p))}catch{s=void 0}if(!s||!DR(s.auth,o)){r.destroy();return}i.close(),n(s);return}i.close();try{n(K(a.slice(0,p)))}catch(s){c(s)}}),r.on("error",o?()=>r.destroy():t)});if(i.on("error",t),m)i.once("listening",()=>{try{m()}catch(r){t(r)}});i.listen(e)})}async function art(e,m){let o=await hl(e.cwd,void 0);Wu(o);let n={originalCwd:o,projectRoot:o,cwd:o};if(e.sessionId)Xp(Gu(e.sessionId),"spare_claim",null,n);else Jtt(n);if(Vl(),bie(),gQe(),WIn(),iYn(),cW({warm_spare_claimed:1}),Le(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)){for(let t of Object.keys(process.env))if(ECt(t)||t==="ANTHROPIC_CUSTOM_HEADERS"||ACt(t)||ARe(t))delete process.env[t]}delete process.env.ANTHROPIC_AUTH_TOKEN,delete process.env.ANTHROPIC_API_KEY,delete process.env.CLAUDE_CODE_OAUTH_TOKEN,Object.assign(process.env,e.env),process.argv=[process.argv[0],process.argv[1],...e.argv],IIn(),await LLn(e.argv),UOn(),cCn(),avt(),iU(),w$e({preservePendingExposures:!0,preserveLoggedExposures:!0}),dU(),iwn(),_q(),WA();let{main:c}=await m;await c()}
export{srt,art};
