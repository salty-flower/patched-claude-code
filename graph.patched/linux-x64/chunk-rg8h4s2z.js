// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{G,U}from"./chunk-bj7g1p32.js";import{h}from"./chunk-9g6v0ehs.js";import{a}from"./chunk-td8fcebs.js";import{bc,Jn,Ok}from"./chunk-t5k9jbxx.js";var r="--inherit-permission-mode";function s(e){return e===r||e.startsWith(`${r}=`)}class m{mode}var u=new G(()=>new m);function f(){return u.of(U().host)}function Yjn({inheritPermissionModeCli:e,resolvedMode:n,storageV5:i}){if(!e)return;f().mode=n,Ok("--permission-mode",[r],n,void 0,i).catch((o)=>h(o))}async function Xjn(e){let n=f(),i=n.mode;if(i===void 0)return;let o=a.CLAUDE_JOB_DIR;if(!o||a.CLAUDE_CODE_SESSION_KIND!=="bg"){n.mode=void 0;return}let t=await Jn(o,e);if(!t?.respawnFlags)return;if(!t.respawnFlags.some(s)){n.mode=void 0;return}await Ok("--permission-mode",[r],i,void 0,e,void 0,(p)=>p.some(s)),bc(o);let d=await Jn(o,e);if(d?.respawnFlags&&!d.respawnFlags.some(s))n.mode=void 0}
export{Yjn,Xjn};
