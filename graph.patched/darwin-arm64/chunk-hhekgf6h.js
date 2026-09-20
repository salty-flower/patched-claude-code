// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{G,z}from"./chunk-sgamszzq.js";import{g}from"./chunk-vzm3bfp5.js";import{a}from"./chunk-wkhfcbsj.js";import{Du,_r,Kx}from"./chunk-fpdh0w7q.js";var r="--inherit-permission-mode";function s(e){return e===r||e.startsWith(`${r}=`)}class m{mode}var u=new G(()=>new m);function f(){return u.of(z().host)}function Ylr({inheritPermissionModeCli:e,resolvedMode:n,storageV5:i}){if(!e)return;f().mode=n,Kx("--permission-mode",[r],n,void 0,i).catch((o)=>g(o))}async function Xlr(e){let n=f(),i=n.mode;if(i===void 0)return;let o=a.CLAUDE_JOB_DIR;if(!o||a.CLAUDE_CODE_SESSION_KIND!=="bg"){n.mode=void 0;return}let t=await _r(o,e);if(!t?.respawnFlags)return;if(!t.respawnFlags.some(s)){n.mode=void 0;return}await Kx("--permission-mode",[r],i,void 0,e,void 0,(p)=>p.some(s)),Du(o);let d=await _r(o,e);if(d?.respawnFlags&&!d.respawnFlags.some(s))n.mode=void 0}
export{Ylr,Xlr};
