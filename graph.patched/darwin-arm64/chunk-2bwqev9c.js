// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Kt}from"./chunk-36ysyspx.js";import{Re,ue}from"./chunk-27xjmczp.js";import{t}from"./chunk-d7b0m8qy.js";import{l}from"./chunk-thm21ca7.js";import{st}from"./chunk-c49xtfqf.js";import{stat as i}from"fs/promises";import{homedir as s}from"os";import{join as c}from"path";async function u(e,a){await Re((r)=>({...r,appleTerminalSetupInProgress:!0,appleTerminalBackupPath:e}),a)}async function KYt(e){await Re((a)=>({...a,appleTerminalSetupInProgress:!1}),e)}function p(){let e=ue();return{inProgress:e.appleTerminalSetupInProgress??!1,backupPath:e.appleTerminalBackupPath||null}}function qYt(){return c(s(),"Library","Preferences","com.apple.Terminal.plist")}async function ogs(e){let a=qYt(),r=`${a}.bak`;try{let{code:n}=await st("defaults",["export","com.apple.Terminal",a]);if(n!==0)return null;try{await i(a)}catch{return null}return await st("defaults",["export","com.apple.Terminal",r]),await u(r,e),r}catch(n){if(Kt(n))return t(`backupTerminalPreferences: fs inaccessible: ${n}`),null;return l(n),null}}async function iMn(e){let{inProgress:a,backupPath:r}=p();if(!a)return{status:"no_backup"};if(!r)return await KYt(e),{status:"no_backup"};try{await i(r)}catch{return await KYt(e),{status:"no_backup"}}let n=!1;try{let{code:o}=await st("defaults",["import","com.apple.Terminal",r]);if(o!==0)return{status:"failed",backupPath:r};return n=!0,await st("killall",["cfprefsd"]),await KYt(e),{status:"restored"}}catch(o){if(Kt(o))t(`checkAndRestoreTerminalBackup: fs inaccessible: ${o}`);else l(o);return await KYt(e),n?{status:"restored"}:{status:"failed",backupPath:r}}}
export{KYt,qYt,ogs,iMn};
