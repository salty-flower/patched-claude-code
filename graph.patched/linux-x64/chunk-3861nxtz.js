// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{jt}from"./chunk-w7m8nded.js";import{Ae,ue}from"./chunk-k16gymf7.js";import{t}from"./chunk-cwsn6mdf.js";import{l}from"./chunk-9pt2nr7j.js";import{st}from"./chunk-xx1rar7b.js";import{stat as i}from"fs/promises";import{homedir as s}from"os";import{join as c}from"path";async function u(e,a){await Ae((r)=>({...r,appleTerminalSetupInProgress:!0,appleTerminalBackupPath:e}),a)}async function H2t(e){await Ae((a)=>({...a,appleTerminalSetupInProgress:!1}),e)}function p(){let e=ue();return{inProgress:e.appleTerminalSetupInProgress??!1,backupPath:e.appleTerminalBackupPath||null}}function D2t(){return c(s(),"Library","Preferences","com.apple.Terminal.plist")}async function T8o(e){let a=D2t(),r=`${a}.bak`;try{let{code:n}=await st("defaults",["export","com.apple.Terminal",a]);if(n!==0)return null;try{await i(a)}catch{return null}return await st("defaults",["export","com.apple.Terminal",r]),await u(r,e),r}catch(n){if(jt(n))return t(`backupTerminalPreferences: fs inaccessible: ${n}`),null;return l(n),null}}async function Qwn(e){let{inProgress:a,backupPath:r}=p();if(!a)return{status:"no_backup"};if(!r)return await H2t(e),{status:"no_backup"};try{await i(r)}catch{return await H2t(e),{status:"no_backup"}}let n=!1;try{let{code:o}=await st("defaults",["import","com.apple.Terminal",r]);if(o!==0)return{status:"failed",backupPath:r};return n=!0,await st("killall",["cfprefsd"]),await H2t(e),{status:"restored"}}catch(o){if(jt(o))t(`checkAndRestoreTerminalBackup: fs inaccessible: ${o}`);else l(o);return await H2t(e),n?{status:"restored"}:{status:"failed",backupPath:r}}}
export{H2t,D2t,T8o,Qwn};
