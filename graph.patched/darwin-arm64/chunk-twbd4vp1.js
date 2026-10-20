// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Wt}from"./chunk-nre716m4.js";import{Te,ue}from"./chunk-bvn0epzr.js";import{t}from"./chunk-tdxkq523.js";import{l}from"./chunk-277zhca1.js";import{nt}from"./chunk-bn2qw2he.js";import{stat as i}from"fs/promises";import{homedir as s}from"os";import{join as c}from"path";async function u(e,a){await Te((r)=>({...r,appleTerminalSetupInProgress:!0,appleTerminalBackupPath:e}),a)}async function pqt(e){await Te((a)=>({...a,appleTerminalSetupInProgress:!1}),e)}function p(){let e=ue();return{inProgress:e.appleTerminalSetupInProgress??!1,backupPath:e.appleTerminalBackupPath||null}}function fqt(){return c(s(),"Library","Preferences","com.apple.Terminal.plist")}async function vts(e){let a=fqt(),r=`${a}.bak`;try{let{code:n}=await nt("defaults",["export","com.apple.Terminal",a]);if(n!==0)return null;try{await i(a)}catch{return null}return await nt("defaults",["export","com.apple.Terminal",r]),await u(r,e),r}catch(n){if(Wt(n))return t(`backupTerminalPreferences: fs inaccessible: ${n}`),null;return l(n),null}}async function ZCn(e){let{inProgress:a,backupPath:r}=p();if(!a)return{status:"no_backup"};if(!r)return await pqt(e),{status:"no_backup"};try{await i(r)}catch{return await pqt(e),{status:"no_backup"}}let n=!1;try{let{code:o}=await nt("defaults",["import","com.apple.Terminal",r]);if(o!==0)return{status:"failed",backupPath:r};return n=!0,await nt("killall",["cfprefsd"]),await pqt(e),{status:"restored"}}catch(o){if(Wt(o))t(`checkAndRestoreTerminalBackup: fs inaccessible: ${o}`);else l(o);return await pqt(e),n?{status:"restored"}:{status:"failed",backupPath:r}}}
export{pqt,fqt,vts,ZCn};
