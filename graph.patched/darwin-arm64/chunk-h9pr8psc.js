// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Ot}from"./chunk-hs50vfa7.js";import{Te,ce}from"./chunk-er6f56rj.js";import{t}from"./chunk-3wz0srxw.js";import{u}from"./chunk-zwbw6dvp.js";import{qe}from"./chunk-ccvm8ey1.js";import{stat as i}from"fs/promises";import{homedir as s}from"os";import{join as l}from"path";async function c(e,a){await Te((r)=>({...r,appleTerminalSetupInProgress:!0,appleTerminalBackupPath:e}),a)}async function ybt(e){await Te((a)=>({...a,appleTerminalSetupInProgress:!1}),e)}function p(){let e=ce();return{inProgress:e.appleTerminalSetupInProgress??!1,backupPath:e.appleTerminalBackupPath||null}}function _bt(){return l(s(),"Library","Preferences","com.apple.Terminal.plist")}async function aZr(e){let a=_bt(),r=`${a}.bak`;try{let{code:n}=await qe("defaults",["export","com.apple.Terminal",a]);if(n!==0)return null;try{await i(a)}catch{return null}return await qe("defaults",["export","com.apple.Terminal",r]),await c(r,e),r}catch(n){if(Ot(n))return t(`backupTerminalPreferences: fs inaccessible: ${n}`),null;return u(n),null}}async function Iqt(e){let{inProgress:a,backupPath:r}=p();if(!a)return{status:"no_backup"};if(!r)return await ybt(e),{status:"no_backup"};try{await i(r)}catch{return await ybt(e),{status:"no_backup"}}let n=!1;try{let{code:o}=await qe("defaults",["import","com.apple.Terminal",r]);if(o!==0)return{status:"failed",backupPath:r};return n=!0,await qe("killall",["cfprefsd"]),await ybt(e),{status:"restored"}}catch(o){if(Ot(o))t(`checkAndRestoreTerminalBackup: fs inaccessible: ${o}`);else u(o);return await ybt(e),n?{status:"restored"}:{status:"failed",backupPath:r}}}
export{ybt,_bt,aZr,Iqt};
