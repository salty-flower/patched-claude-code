// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{z,B}from"./chunk-6n7yk222.js";import{h}from"./chunk-p9k2m8jj.js";import{a}from"./chunk-1bwwmttj.js";import{Bc,nr,WC}from"./chunk-f4v140c7.js";var r="--inherit-permission-mode";function s(e){return e===r||e.startsWith(`${r}=`)}class m{mode}var u=new z(()=>new m);function f(){return u.of(B().host)}function R5n({inheritPermissionModeCli:e,resolvedMode:n,storageV5:i}){if(!e)return;f().mode=n,WC("--permission-mode",[r],n,void 0,i).catch((o)=>h(o))}async function x5n(e){let n=f(),i=n.mode;if(i===void 0)return;let o=a.CLAUDE_JOB_DIR;if(!o||a.CLAUDE_CODE_SESSION_KIND!=="bg"){n.mode=void 0;return}let t=await nr(o,e);if(!t?.respawnFlags)return;if(!t.respawnFlags.some(s)){n.mode=void 0;return}await WC("--permission-mode",[r],i,void 0,e,void 0,(p)=>p.some(s)),Bc(o);let d=await nr(o,e);if(d?.respawnFlags&&!d.respawnFlags.some(s))n.mode=void 0}
export{R5n,x5n};
