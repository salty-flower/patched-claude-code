// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{jt}from"./chunk-886tf6ja.js";import{Ce,ce}from"./chunk-bk5ct2gw.js";import{t}from"./chunk-gyf58rwf.js";import{c}from"./chunk-gsnbskq4.js";import{st}from"./chunk-1azky4vr.js";import{stat as i}from"fs/promises";import{homedir as s}from"os";import{join as l}from"path";async function u(e,a){await Ce((r)=>({...r,appleTerminalSetupInProgress:!0,appleTerminalBackupPath:e}),a)}async function fUt(e){await Ce((a)=>({...a,appleTerminalSetupInProgress:!1}),e)}function p(){let e=ce();return{inProgress:e.appleTerminalSetupInProgress??!1,backupPath:e.appleTerminalBackupPath||null}}function mUt(){return l(s(),"Library","Preferences","com.apple.Terminal.plist")}async function K1o(e){let a=mUt(),r=`${a}.bak`;try{let{code:n}=await st("defaults",["export","com.apple.Terminal",a]);if(n!==0)return null;try{await i(a)}catch{return null}return await st("defaults",["export","com.apple.Terminal",r]),await u(r,e),r}catch(n){if(jt(n))return t(`backupTerminalPreferences: fs inaccessible: ${n}`),null;return c(n),null}}async function rfn(e){let{inProgress:a,backupPath:r}=p();if(!a)return{status:"no_backup"};if(!r)return await fUt(e),{status:"no_backup"};try{await i(r)}catch{return await fUt(e),{status:"no_backup"}}let n=!1;try{let{code:o}=await st("defaults",["import","com.apple.Terminal",r]);if(o!==0)return{status:"failed",backupPath:r};return n=!0,await st("killall",["cfprefsd"]),await fUt(e),{status:"restored"}}catch(o){if(jt(o))t(`checkAndRestoreTerminalBackup: fs inaccessible: ${o}`);else c(o);return await fUt(e),n?{status:"restored"}:{status:"failed",backupPath:r}}}
export{fUt,mUt,K1o,rfn};
