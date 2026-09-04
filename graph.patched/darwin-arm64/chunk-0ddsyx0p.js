// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{s}from"./chunk-v5cr82c7.js";import{u}from"./chunk-g1553wr3.js";import{E,so}from"./chunk-dsb06hq9.js";import{t}from"./chunk-84crg0gy.js";import{Ve}from"./chunk-p5xeqf1z.js";import{spawn as w}from"child_process";var f=500;function Dw(n,r="SIGKILL"){if(!Number.isInteger(n)||n<=1)return Promise.resolve(new Set);return g(n,r).catch(()=>new Set)}async function g(n,r){let o=await S(n);try{process.kill(-n,r)}catch(e){try{process.kill(n,r)}catch{}if(E(e)!=="ESRCH")k("group_kill",e)}for(let e of o)try{process.kill(e,r)}catch{}return o}async function jrr(n){let r=[...n].filter((e)=>Number.isInteger(e)&&e>1),o=new Map;if(r.length===0)return o;return d(r)}async function Wrr(n,r){if(n.size===0)return;let o;try{o=await d([...n.keys()])}catch{return}for(let[e,i]of n){if(o.get(e)!==i)continue;try{process.kill(e,r)}catch{}}}async function d(n){let r=new Map,{stdout:o}=await Ve("ps",["-o","pid=","-o","lstart=","-p",n.join(",")],{timeout:f,cwd:"/",env:{USER_TYPE:"external",NODE_ENV:"production",LC_ALL:"C",TZ:"UTC"},stripFinalNewline:!1});for(let e of o.split(`
`)){let i=e.match(/^\s*(\d+)\s+(\S.*\S)\s*$/);if(i)r.set(Number(i[1]),i[2])}return r}async function S(n){let r;try{r=await Promise.race([b(),new Promise((a)=>{let c=setTimeout((l)=>l(""),f,a);if(typeof c==="object")c.unref()})])}catch(a){return k("enum_spawn",a),new Set}let o=new Map;for(let a of r.split(`
`)){let c=a.match(/^\s*(\d+)\s+(\d+)\s*$/);if(!c)continue;let l=Number(c[1]),m=Number(c[2]),p=o.get(m);if(p)p.push(l);else o.set(m,[l])}let e=new Set,i=[n];while(i.length>0){let a=i.shift();for(let c of o.get(a)??[])if(c>1&&c!==n&&c!==process.pid&&!e.has(c))e.add(c),i.push(c)}return e}function b(){return new Promise((n,r)=>{let o;try{o=w("ps",["-A","-o","pid=","-o","ppid="],{cwd:"/",stdio:["ignore","pipe","ignore"],windowsHide:!0})}catch(i){r(i);return}let e="";o.stdout?.on("data",(i)=>e+=i),o.once("error",r),o.once("close",()=>n(e))})}function k(n,r){try{let o=E(r),e=so(r);t(`killProcessTree ${n} failed: ${o??r}`),s("tengu_bash_tool_kill_error",{stage:u(n),...e&&{error_code:e}})}catch{}}
export{Dw,jrr,Wrr};
