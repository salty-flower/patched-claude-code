// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{i}from"./chunk-jxv3x25k.js";import{c}from"./chunk-k6smmjsm.js";import{C,ro}from"./chunk-qq9jq5dz.js";import{t}from"./chunk-qmm87fyw.js";import{We}from"./chunk-nemb0v5p.js";import{spawn as w}from"child_process";var f=500;function H_(n,r="SIGKILL"){if(!Number.isInteger(n)||n<=1)return Promise.resolve(new Set);return g(n,r).catch(()=>new Set)}async function g(n,r){let o=await S(n);try{process.kill(-n,r)}catch(e){try{process.kill(n,r)}catch{}if(C(e)!=="ESRCH")k("group_kill",e)}for(let e of o)try{process.kill(e,r)}catch{}return o}async function Zan(n){let r=[...n].filter((e)=>Number.isInteger(e)&&e>1),o=new Map;if(r.length===0)return o;return d(r)}async function eln(n,r){if(n.size===0)return;let o;try{o=await d([...n.keys()])}catch{return}for(let[e,s]of n){if(o.get(e)!==s)continue;try{process.kill(e,r)}catch{}}}async function d(n){let r=new Map,{stdout:o}=await We("ps",["-o","pid=","-o","lstart=","-p",n.join(",")],{timeout:f,cwd:"/",env:{USER_TYPE:"external",NODE_ENV:"production",LC_ALL:"C",TZ:"UTC"},stripFinalNewline:!1});for(let e of o.split(`
`)){let s=e.match(/^\s*(\d+)\s+(\S.*\S)\s*$/);if(s)r.set(Number(s[1]),s[2])}return r}async function S(n){let r;try{r=await Promise.race([b(),new Promise((a)=>{let u=setTimeout((l)=>l(""),f,a);if(typeof u==="object")u.unref()})])}catch(a){return k("enum_spawn",a),new Set}let o=new Map;for(let a of r.split(`
`)){let u=a.match(/^\s*(\d+)\s+(\d+)\s*$/);if(!u)continue;let l=Number(u[1]),m=Number(u[2]),p=o.get(m);if(p)p.push(l);else o.set(m,[l])}let e=new Set,s=[n];while(s.length>0){let a=s.shift();for(let u of o.get(a)??[])if(u>1&&u!==n&&u!==process.pid&&!e.has(u))e.add(u),s.push(u)}return e}function b(){return new Promise((n,r)=>{let o;try{o=w("ps",["-A","-o","pid=","-o","ppid="],{cwd:"/",stdio:["ignore","pipe","ignore"],windowsHide:!0})}catch(s){r(s);return}let e="";o.stdout?.on("data",(s)=>e+=s),o.once("error",r),o.once("close",()=>n(e))})}function k(n,r){try{let o=C(r),e=ro(r);t(`killProcessTree ${n} failed: ${o??r}`),i("tengu_bash_tool_kill_error",{stage:c(n),...e&&{error_code:e}})}catch{}}
export{H_,Zan,eln};
