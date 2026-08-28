// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{$O as U,XO as S,ZO as P}from"./_390.js";import{Aja as O,Dja as D}from"./_444.js";import{A9a as C,B9a as _,G9a as R,Y9a as L}from"./_478.js";import{Tdb as I,Udb as W}from"./_492.js";import{Exb as F,zxb as x}from"./_540.js";import{y1b as y,z1b as N}from"./_620.js";import{A$c as A,z$c as h}from"./_791.js";import{Ded as E,Eed as w,Red as u,Xed as T}from"./_806.js";import{Exd as b}from"./_839.js";import{spawnSync as m}from"child_process";function K(e){let t=u(),i=I.get(process.stdout);if(!i)throw Error("Ink instance not found - cannot pause rendering");let n=P();if(!n)return{content:null};try{t.statSync(e)}catch{return{content:null}}let l=S(n)===void 0;if(l)i.enterAlternateScreen();else i.prepareTerminalForHandoff();try{let c=k[n]??n,d=c.split(" "),s=d[0]??c,r=d.slice(1),o;{let a=h();if(o=m(s,[...r,e],{stdio:"inherit",...a}),o.error&&a.cgroup!==void 0)o=m(s,[...r,e],{stdio:"inherit"})}if(o.error||o.signal||o.status!==null&&o.status!==0){let a=O(n);return{content:null,error:o.error?`Couldn't open ${a} \u2014 ${o.error.message}`:o.signal?`${a} closed unexpectedly (${o.signal})`:`${a} quit unexpectedly (exit code ${o.status})`}}return{content:t.readFileSync(e,{encoding:"utf-8"})}}catch{return{content:null}}finally{if(l)i.exitAlternateScreen();else i.restoreTerminalAfterHandoff()}}function M(e,t,i){let n=e;for(let[l,c]of Object.entries(i))if(c.type==="text"){let d=parseInt(l),s=c.content;if(c.unavailable||s==="")continue;let r=n.indexOf(s);if(r!==-1){let o=C(s),p=_(d,o);n=n.slice(0,r)+p+n.slice(r+s.length)}}return n}function j(e){let t=x(e).split(`
`);if(t.length>g)t=t.slice(-g),t.unshift("\u2026 (earlier output truncated)");return`# \u2500\u2500\u2500 Claude's last response (for reference; removed on save) \u2500\u2500\u2500
`+`${t.map((n)=>n?`# ${n}`:"#").join(`
`)}
${f}

`}function v(e){let t=e.indexOf(f);if(t===-1)return e;return e.slice(t+f.length).replace(/^\r?\n\r?\n?/,"")}function nt(e,t,i){let n=u(),l=y();try{let c=t?R(e,t):e,d=i?j(i)+c:c;E(l,d,{encoding:"utf-8",flush:!0});let s=K(l);if(s.content===null)return s;let r=s.content;if(i)r=v(r);if(r.endsWith(`
`)&&!r.endsWith(`

`))r=r.slice(0,-1);if(t)r=M(r,e,t);return{content:r}}finally{try{n.unlinkSync(l)}catch{}}}var k,f="# \u2500\u2500\u2500 Write your reply below this line \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",g=50;var H=b(()=>{L();W();F();U();T();D();A();w();N();k={code:"code -w",subl:"subl --wait"}});
export{K as UO,nt as VO,H as WO};
