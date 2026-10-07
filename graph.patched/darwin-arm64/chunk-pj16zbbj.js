// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{z,F}from"./chunk-8mvda08c.js";import{c}from"./chunk-qfs4y3ww.js";import{a}from"./chunk-j77txbjn.js";import{mf,Vr,$0}from"./chunk-t5y3xk7a.js";var r="--inherit-permission-mode";function s(e){return e===r||e.startsWith(`${r}=`)}class m{mode}var u=new z(()=>new m);function f(){return u.of(F().host)}function Iko({inheritPermissionModeCli:e,resolvedMode:n,storageV5:i}){if(!e)return;f().mode=n,$0("--permission-mode",[r],n,void 0,i).catch((o)=>c(o))}async function Oko(e){let n=f(),i=n.mode;if(i===void 0)return;let o=a.CLAUDE_JOB_DIR;if(!o||a.CLAUDE_CODE_SESSION_KIND!=="bg"){n.mode=void 0;return}let t=await Vr(o,e);if(!t?.respawnFlags)return;if(!t.respawnFlags.some(s)){n.mode=void 0;return}await $0("--permission-mode",[r],i,void 0,e,void 0,(p)=>p.some(s)),mf(o);let d=await Vr(o,e);if(d?.respawnFlags&&!d.respawnFlags.some(s))n.mode=void 0}
export{Iko,Oko};
