// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Ft}from"./chunk-5g6j8x8p.js";import{Ae,ce}from"./chunk-cxjvwxsa.js";import{t}from"./chunk-p46wpkfz.js";import{c}from"./chunk-3s94kw4m.js";import{nt}from"./chunk-wchsap03.js";import{stat as i}from"fs/promises";import{homedir as s}from"os";import{join as l}from"path";async function u(e,a){await Ae((r)=>({...r,appleTerminalSetupInProgress:!0,appleTerminalBackupPath:e}),a)}async function p0t(e){await Ae((a)=>({...a,appleTerminalSetupInProgress:!1}),e)}function p(){let e=ce();return{inProgress:e.appleTerminalSetupInProgress??!1,backupPath:e.appleTerminalBackupPath||null}}function f0t(){return l(s(),"Library","Preferences","com.apple.Terminal.plist")}async function VIo(e){let a=f0t(),r=`${a}.bak`;try{let{code:n}=await nt("defaults",["export","com.apple.Terminal",a]);if(n!==0)return null;try{await i(a)}catch{return null}return await nt("defaults",["export","com.apple.Terminal",r]),await u(r,e),r}catch(n){if(Ft(n))return t(`backupTerminalPreferences: fs inaccessible: ${n}`),null;return c(n),null}}async function Tin(e){let{inProgress:a,backupPath:r}=p();if(!a)return{status:"no_backup"};if(!r)return await p0t(e),{status:"no_backup"};try{await i(r)}catch{return await p0t(e),{status:"no_backup"}}let n=!1;try{let{code:o}=await nt("defaults",["import","com.apple.Terminal",r]);if(o!==0)return{status:"failed",backupPath:r};return n=!0,await nt("killall",["cfprefsd"]),await p0t(e),{status:"restored"}}catch(o){if(Ft(o))t(`checkAndRestoreTerminalBackup: fs inaccessible: ${o}`);else c(o);return await p0t(e),n?{status:"restored"}:{status:"failed",backupPath:r}}}
export{p0t,f0t,VIo,Tin};
