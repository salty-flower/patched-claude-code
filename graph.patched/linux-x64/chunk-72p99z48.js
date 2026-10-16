// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{j}from"./chunk-eqmywwjn.js";import{G}from"./chunk-pzq28dp7.js";import{l}from"./chunk-9pt2nr7j.js";import{a}from"./chunk-xwn0mfnc.js";import{jp,Qr,jP}from"./chunk-602wadg8.js";var r="--inherit-permission-mode";function s(e){return e===r||e.startsWith(`${r}=`)}class m{mode}var u=new G(()=>new m);function f(){return u.of(j().host)}function R8o({inheritPermissionModeCli:e,resolvedMode:n,storageV5:i}){if(!e)return;f().mode=n,jP("--permission-mode",[r],n,void 0,i).catch((o)=>l(o))}async function x8o(e){let n=f(),i=n.mode;if(i===void 0)return;let o=a.CLAUDE_JOB_DIR;if(!o||a.CLAUDE_CODE_SESSION_KIND!=="bg"){n.mode=void 0;return}let t=await Qr(o,e);if(!t?.respawnFlags)return;if(!t.respawnFlags.some(s)){n.mode=void 0;return}await jP("--permission-mode",[r],i,void 0,e,void 0,(p)=>p.some(s)),jp(o);let d=await Qr(o,e);if(d?.respawnFlags&&!d.respawnFlags.some(s))n.mode=void 0}
export{R8o,x8o};
