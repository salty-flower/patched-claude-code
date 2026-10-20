// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Wt}from"./chunk-ekgz6skk.js";import{Ae,ue}from"./chunk-7p6jp6kj.js";import{t}from"./chunk-n5v91jc3.js";import{l}from"./chunk-jkcb7qdd.js";import{ot}from"./chunk-f7tmzdwm.js";import{stat as i}from"fs/promises";import{homedir as s}from"os";import{join as c}from"path";async function u(e,a){await Ae((r)=>({...r,appleTerminalSetupInProgress:!0,appleTerminalBackupPath:e}),a)}async function Zqt(e){await Ae((a)=>({...a,appleTerminalSetupInProgress:!1}),e)}function p(){let e=ue();return{inProgress:e.appleTerminalSetupInProgress??!1,backupPath:e.appleTerminalBackupPath||null}}function e4t(){return c(s(),"Library","Preferences","com.apple.Terminal.plist")}async function Ves(e){let a=e4t(),r=`${a}.bak`;try{let{code:n}=await ot("defaults",["export","com.apple.Terminal",a]);if(n!==0)return null;try{await i(a)}catch{return null}return await ot("defaults",["export","com.apple.Terminal",r]),await u(r,e),r}catch(n){if(Wt(n))return t(`backupTerminalPreferences: fs inaccessible: ${n}`),null;return l(n),null}}async function kTn(e){let{inProgress:a,backupPath:r}=p();if(!a)return{status:"no_backup"};if(!r)return await Zqt(e),{status:"no_backup"};try{await i(r)}catch{return await Zqt(e),{status:"no_backup"}}let n=!1;try{let{code:o}=await ot("defaults",["import","com.apple.Terminal",r]);if(o!==0)return{status:"failed",backupPath:r};return n=!0,await ot("killall",["cfprefsd"]),await Zqt(e),{status:"restored"}}catch(o){if(Wt(o))t(`checkAndRestoreTerminalBackup: fs inaccessible: ${o}`);else l(o);return await Zqt(e),n?{status:"restored"}:{status:"failed",backupPath:r}}}
export{Zqt,e4t,Ves,kTn};
