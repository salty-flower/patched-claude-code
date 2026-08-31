// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Al,a}from"./chunk-m9gbfvns.js";import{l,Y}from"./chunk-efckqwp7.js";import{Fe}from"./chunk-zv6dxs76.js";import{Vl,Ehn,Ahn,Xue}from"./chunk-ph6nqqw2.js";import{V0}from"./chunk-t225nvjt.js";import{access as E,mkdir as I,readFile as T,stat as S,unlink as D,writeFile as b}from"fs/promises";import{homedir as x}from"os";import{join as c}from"path";var s="com.anthropic.claude-daemon",n={useCwd:!1,useToolMemoryCgroup:!1};async function mQ(){let e=a.XDG_RUNTIME_DIR||`/run/user/${process.getuid()}`;try{return(await S(c(e,"systemd"))).isDirectory()}catch{return!1}}function CYt(){if(!Al())return process.argv[1];return c(V0(),"claude")}function f(e){return e.replace(/[\r\n]/g," ").replaceAll("%","%%")}function w(e){let t=f(e);return t.includes(" ")?`"${t}"`:t}function k(){let e=a.XDG_CONFIG_HOME||c(x(),".config");return c(e,"systemd","user",`${s}.service`)}async function nUe(e){let{jsonPath:t,logPath:r}=e,i=await Xue();if(i)return{ok:!1,error:`${i} \u2014 refusing to install a service that would run unwrapped`,serviceId:s,servicePath:""};let u=[...Vl(),CYt()],p=a.PATH||"/usr/local/bin:/usr/bin:/bin";{let o=k(),d=`${s}.service`;try{let h=a.XDG_CONFIG_HOME||c(x(),".config");await I(c(h,"systemd","user"),{recursive:!0}),await b(o,`[Unit]
Description=Claude Daemon
After=network-online.target
StartLimitIntervalSec=60
StartLimitBurst=10

[Service]
Type=simple
Environment="PATH=${f(p)}"
ExecStart=${u.map(w).join(" ")} daemon --json-path ${w(t)} --log-file ${w(r)} --origin service
Restart=always
RestartSec=1
StandardOutput=append:${f(r)}
StandardError=append:${f(r)}

[Install]
WantedBy=default.target
`,"utf8")}catch(h){return{ok:!1,error:l(h),serviceId:s,servicePath:o}}await Fe("systemctl",["--user","daemon-reload"],n);let{code:m,stderr:P,error:g}=await Fe("systemctl",["--user","enable","--now",d],n);if(m!==0)return{ok:!1,error:P||g||"systemctl enable failed",serviceId:s,servicePath:o};return await Fe("systemctl",["--user","restart",d],n),{ok:!0,serviceId:s,servicePath:o}}return{ok:!1,error:`service install not available on ${"linux"} \u2014 the daemon runs on demand instead`,serviceId:s,servicePath:""}}async function DTe(){{let e=k(),t=`${s}.service`;await Fe("systemctl",["--user","disable","--now",t],n);try{await D(e)}catch(r){if(!Y(r))return{ok:!1,error:l(r)}}return await Fe("systemctl",["--user","daemon-reload"],n),{ok:!0}}return{ok:!1,error:"service uninstall not available on linux"}}async function Ntt(){return v("start")}async function rUe(){return v("stop")}async function p$n(){return v("restart")}async function v(e){if(!1)switch(e){case"start":case"stop":case"restart":}{let{code:t,stderr:r,error:i}=await Fe("systemctl",["--user",e,`${s}.service`],n);if(t!==0)return{ok:!1,error:r||i||`systemctl ${e} failed`};return{ok:!0}}return{ok:!1,error:`service ${e} not available on ${"linux"} \u2014 the daemon runs on demand instead`}}async function R(){let e=k();if(!e)return null;let t;try{let r=await S(e);if(!r.isFile()||r.size>1048576)return null;t=await T(e,"utf8")}catch{return null}return[...t.match(/^ExecStart=(.*)$/m)?.[1]?.matchAll(/"([^"]+)"|(\S+)/g)??[]].map((r)=>r[1]??r[2])}function y(e){return e.replaceAll("%%","%")}async function Ftt(){let e={execPathStale:!1,launcherPrefixDead:!1},t=await R();if(!t)return e;let r=t.lastIndexOf("daemon"),i=r>0?t[r-1]:void 0;if(!i)return e;try{await E(y(i))}catch{e.execPathStale=!0}let u=t.slice(0,r-1).map(y);for(let p of Ahn(u))if(!await Ehn(p)){e.launcherPrefixDead=!0;break}return e}async function i$(){{let{code:e,stderr:t,error:r}=await Fe("systemctl",["--user","status",`${s}.service`],n);if(r||t.includes("Failed to connect to bus"))return!1;return e===0||e===3}return!1}
export{mQ,CYt,nUe,DTe,Ntt,rUe,p$n,Ftt,i$};
