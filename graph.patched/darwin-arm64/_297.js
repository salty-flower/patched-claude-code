// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Lvc as b,luc as u,puc as p}from"./_668.js";import{O_c as o,Q_c as P}from"./_788.js";import{Qcd as c,Ycd as d}from"./_802.js";import{tfd as l,yfd as k}from"./_806.js";import{Bvd as s,Nvd as g}from"./_834.js";import{Exd as f}from"./_839.js";import{stat as m}from"fs/promises";import{homedir as T}from"os";import{join as h}from"path";async function w(e,t){await u((r)=>({...r,appleTerminalSetupInProgress:!0,appleTerminalBackupPath:e}),t)}async function i(e){await u((t)=>({...t,appleTerminalSetupInProgress:!1}),e)}function y(){let e=p();return{inProgress:e.appleTerminalSetupInProgress??!1,backupPath:e.appleTerminalBackupPath||null}}function S(){return h(T(),"Library","Preferences","com.apple.Terminal.plist")}async function A(e){let t=S(),r=`${t}.bak`;try{let{code:a}=await o("defaults",["export","com.apple.Terminal",t]);if(a!==0)return null;try{await m(t)}catch{return null}return await o("defaults",["export","com.apple.Terminal",r]),await w(r,e),r}catch(a){if(s(a))return l(`backupTerminalPreferences: fs inaccessible: ${a}`),null;return c(a),null}}async function E(e){let{inProgress:t,backupPath:r}=y();if(!t)return{status:"no_backup"};if(!r)return await i(e),{status:"no_backup"};try{await m(r)}catch{return await i(e),{status:"no_backup"}}let a=!1;try{let{code:n}=await o("defaults",["import","com.apple.Terminal",r]);if(n!==0)return{status:"failed",backupPath:r};return a=!0,await o("killall",["cfprefsd"]),await i(e),{status:"restored"}}catch(n){if(s(n))l(`checkAndRestoreTerminalBackup: fs inaccessible: ${n}`);else c(n);return await i(e),a?{status:"restored"}:{status:"failed",backupPath:r}}}var B=f(()=>{b();k();g();P();d()});
export{i as dF,S as eF,A as fF,E as gF,B as hF};
