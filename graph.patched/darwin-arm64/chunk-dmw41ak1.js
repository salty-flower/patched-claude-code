// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{s}from"./chunk-qw5jhqey.js";import{c}from"./chunk-9rhc0mtn.js";import{E,uo}from"./chunk-qr1avfxy.js";import{n}from"./chunk-ynzt0fm1.js";import{spawn as p}from"child_process";var k=500;function GE(e,o="SIGKILL"){if(!Number.isInteger(e)||e<=1)return Promise.resolve();return h(e,o).catch(()=>{})}async function h(e,o){let t=await w(e);try{process.kill(-e,o)}catch(r){try{process.kill(e,o)}catch{}if(E(r)!=="ESRCH")f("group_kill",r)}for(let r of t)try{process.kill(r,o)}catch{}}async function w(e){let o;try{o=await Promise.race([g(),new Promise((u)=>{let i=setTimeout((m)=>m(""),k,u);if(typeof i==="object")i.unref()})])}catch(u){return f("enum_spawn",u),new Set}let t=new Map;for(let u of o.split(`
`)){let i=u.match(/^\s*(\d+)\s+(\d+)\s*$/);if(!i)continue;let m=Number(i[1]),a=Number(i[2]),d=t.get(a);if(d)d.push(m);else t.set(a,[m])}let r=new Set,l=[e];while(l.length>0){let u=l.shift();for(let i of t.get(u)??[])if(i>1&&i!==e&&!r.has(i))r.add(i),l.push(i)}return r}function g(){return new Promise((e,o)=>{let t;try{t=p("ps",["-A","-o","pid=","-o","ppid="],{cwd:"/",stdio:["ignore","pipe","ignore"],windowsHide:!0})}catch(l){o(l);return}let r="";t.stdout?.on("data",(l)=>r+=l),t.once("error",o),t.once("close",()=>e(r))})}function f(e,o){try{let t=E(o),r=uo(o);n(`killProcessTree ${e} failed: ${t??o}`),s("tengu_bash_tool_kill_error",{stage:c(e),...r&&{error_code:r}})}catch{}}
export{GE};
