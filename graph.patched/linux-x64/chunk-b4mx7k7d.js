// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{j}from"./chunk-dxktn51d.js";import{W}from"./chunk-2fbnw5gg.js";import{l}from"./chunk-jkcb7qdd.js";import{a}from"./chunk-cd1a8ced.js";import{af,eo,gI}from"./chunk-cskmvz0m.js";var r="--inherit-permission-mode";function s(e){return e===r||e.startsWith(`${r}=`)}class m{mode}var u=new W(()=>new m);function f(){return u.of(j().host)}function cns({inheritPermissionModeCli:e,resolvedMode:n,storageV5:i}){if(!e)return;f().mode=n,gI("--permission-mode",[r],n,void 0,i).catch((o)=>l(o))}async function uns(e){let n=f(),i=n.mode;if(i===void 0)return;let o=a.CLAUDE_JOB_DIR;if(!o||a.CLAUDE_CODE_SESSION_KIND!=="bg"){n.mode=void 0;return}let t=await eo(o,e);if(!t?.respawnFlags)return;if(!t.respawnFlags.some(s)){n.mode=void 0;return}await gI("--permission-mode",[r],i,void 0,e,void 0,(p)=>p.some(s)),af(o);let d=await eo(o,e);if(d?.respawnFlags&&!d.respawnFlags.some(s))n.mode=void 0}
export{cns,uns};
