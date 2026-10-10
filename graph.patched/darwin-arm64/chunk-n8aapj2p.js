// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{q,B}from"./chunk-4bw62nzm.js";import{c}from"./chunk-gsnbskq4.js";import{a}from"./chunk-yvnhkg35.js";import{Bf,ro,xM}from"./chunk-m2gn903q.js";var r="--inherit-permission-mode";function s(e){return e===r||e.startsWith(`${r}=`)}class m{mode}var u=new q(()=>new m);function f(){return u.of(B().host)}function B1o({inheritPermissionModeCli:e,resolvedMode:n,storageV5:i}){if(!e)return;f().mode=n,xM("--permission-mode",[r],n,void 0,i).catch((o)=>c(o))}async function j1o(e){let n=f(),i=n.mode;if(i===void 0)return;let o=a.CLAUDE_JOB_DIR;if(!o||a.CLAUDE_CODE_SESSION_KIND!=="bg"){n.mode=void 0;return}let t=await ro(o,e);if(!t?.respawnFlags)return;if(!t.respawnFlags.some(s)){n.mode=void 0;return}await xM("--permission-mode",[r],i,void 0,e,void 0,(p)=>p.some(s)),Bf(o);let d=await ro(o,e);if(d?.respawnFlags&&!d.respawnFlags.some(s))n.mode=void 0}
export{B1o,j1o};
