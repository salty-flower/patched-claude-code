// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{aWb as I,dWb as x,eWb as C,fWb as D,hWb as X}from"./_603.js";import{mWb as T,nWb as U}from"./_604.js";import{ODc as E,gEc as F}from"./_699.js";import{O_c as i,Q_c as M}from"./_788.js";import{bad as L}from"./_797.js";import{dad as y,ead as A,xad as h}from"./_798.js";import{Nvd as O,_ud as g,vvd as k}from"./_834.js";A();L();O();M();X();U();F();import{access as H,mkdir as j,readFile as V,stat as b,unlink as Y,writeFile as G}from"fs/promises";import{homedir as _}from"os";import{join as d}from"path";import{setTimeout as B}from"timers/promises";var n="com.anthropic.claude-daemon";async function ie(){return!0}function Q(){if(!y())return process.argv[1];return d(T(),"claude")}function o(e){return E(e.replace(/[\r\n]/g," "))}function S(){return d(_(),"Library","LaunchAgents",`${n}.plist`)}function N(){return`gui/${process.getuid()}`}function m(){return`${N()}/${n}`}async function oe(e){let{jsonPath:t,logPath:r}=e,a=await D();if(a)return{ok:!1,error:`${a} \u2014 refusing to install a service that would run unwrapped`,serviceId:n,servicePath:""};let c=[...I(),Q()],l=h.PATH||"/usr/local/bin:/usr/bin:/bin";{let s=S();try{await j(d(_(),"Library","LaunchAgents"),{recursive:!0}),await G(s,`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>Label</key><string>${n}</string>
  <key>ProgramArguments</key><array>
${c.map((p)=>`    <string>${o(p)}</string>`).join(`
`)}
    <string>daemon</string>
    <string>--json-path</string>
    <string>${o(t)}</string>
    <string>--log-file</string>
    <string>${o(r)}</string>
    <string>--origin</string>
    <string>service</string>
  </array>
  <key>EnvironmentVariables</key><dict>
    <key>PATH</key><string>${o(l)}</string>
  </dict>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><dict><key>SuccessfulExit</key><false/></dict>
  <key>ThrottleInterval</key><integer>10</integer>
  <key>StandardOutPath</key><string>${o(r)}</string>
  <key>StandardErrorPath</key><string>${o(r)}</string>
</dict></plist>
`,"utf8")}catch(p){return{ok:!1,error:g(p),serviceId:n,servicePath:s}}await i("launchctl",["bootout",m()],{useCwd:!1});let{code:u,stderr:f,error:w}=await i("launchctl",["bootstrap",N(),s],{useCwd:!1});if(u!==0)return{ok:!1,error:f||w||"launchctl bootstrap failed",serviceId:n,servicePath:s};return{ok:!0,serviceId:n,servicePath:s}}return{ok:!1,error:`service install not available on ${"darwin"} \u2014 the daemon runs on demand instead`,serviceId:n,servicePath:""}}async function ce(){{let e=S();await i("launchctl",["bootout",m()],{useCwd:!1});try{await Y(e)}catch(t){if(!k(t))return{ok:!1,error:g(t)}}return{ok:!0}}return{ok:!1,error:"service uninstall not available on darwin"}}async function le(){return P("start")}async function ue(){return P("stop")}async function fe(){return P("restart")}async function P(e){{let t=m(),r;switch(e){case"start":r=["kickstart",t];break;case"stop":r=["kill","SIGTERM",t];break;case"restart":{await i("launchctl",["kill","SIGTERM",t],{useCwd:!1});let s=!1;for(let u=0;u<200;u++){let f=await i("launchctl",["print",t],{useCwd:!1});if(f.code!==0||!/^\s*pid = /m.test(f.stdout)){s=!0;break}await B(50)}if(!s)return{ok:!1,error:"daemon did not exit within 10s of SIGTERM; restart aborted before kickstart"};r=["kickstart",t];break}}let{code:a,stderr:c,error:l}=await i("launchctl",r,{useCwd:!1});if(a!==0){if(e==="stop")return{ok:!0};return{ok:!1,error:c||l||`launchctl ${r[0]} failed`}}return{ok:!0}}return{ok:!1,error:`service ${e} not available on ${"darwin"} \u2014 the daemon runs on demand instead`}}async function W(){let e=S();if(!e)return null;let t;try{let r=await b(e);if(!r.isFile()||r.size>1048576)return null;t=await V(e,"utf8")}catch{return null}return[...t.match(/<key>ProgramArguments<\/key><array>([\s\S]*?)<\/array>/)?.[1]?.matchAll(/<string>([^<]*)<\/string>/g)??[]].map((r)=>r[1])}function v(e){return e.replaceAll("&gt;",">").replaceAll("&lt;","<").replaceAll("&amp;","&")}async function pe(){let e={execPathStale:!1,launcherPrefixDead:!1},t=await W();if(!t)return e;let r=t.lastIndexOf("daemon"),a=r>0?t[r-1]:void 0;if(!a)return e;try{await H(v(a))}catch{e.execPathStale=!0}let c=t.slice(0,r-1).map(v);for(let l of C(c))if(!await x(l)){e.launcherPrefixDead=!0;break}return e}async function de(){{let{code:e}=await i("launchctl",["print",m()],{useCwd:!1,timeout:5000});return e===0}return!1}
export{ie as Pm,Q as Qm,oe as Rm,ce as Sm,le as Tm,ue as Um,fe as Vm,pe as Wm,de as Xm};
