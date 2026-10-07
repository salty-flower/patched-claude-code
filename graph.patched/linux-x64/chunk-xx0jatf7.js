// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{G,F}from"./chunk-aywwjcwq.js";import{c}from"./chunk-z9b8syjk.js";import{a}from"./chunk-869zfth6.js";import{mf,qr,RM}from"./chunk-vanx1pds.js";var r="--inherit-permission-mode";function s(e){return e===r||e.startsWith(`${r}=`)}class m{mode}var u=new G(()=>new m);function f(){return u.of(F().host)}function Xko({inheritPermissionModeCli:e,resolvedMode:n,storageV5:i}){if(!e)return;f().mode=n,RM("--permission-mode",[r],n,void 0,i).catch((o)=>c(o))}async function Jko(e){let n=f(),i=n.mode;if(i===void 0)return;let o=a.CLAUDE_JOB_DIR;if(!o||a.CLAUDE_CODE_SESSION_KIND!=="bg"){n.mode=void 0;return}let t=await qr(o,e);if(!t?.respawnFlags)return;if(!t.respawnFlags.some(s)){n.mode=void 0;return}await RM("--permission-mode",[r],i,void 0,e,void 0,(p)=>p.some(s)),mf(o);let d=await qr(o,e);if(d?.respawnFlags&&!d.respawnFlags.some(s))n.mode=void 0}
export{Xko,Jko};
