// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{j}from"./chunk-kpqr86hf.js";import{W}from"./chunk-cne7d53x.js";import{l}from"./chunk-277zhca1.js";import{a}from"./chunk-h422gpw8.js";import{af,eo,SI}from"./chunk-79rentg1.js";var r="--inherit-permission-mode";function s(e){return e===r||e.startsWith(`${r}=`)}class m{mode}var u=new W(()=>new m);function f(){return u.of(j().host)}function Uns({inheritPermissionModeCli:e,resolvedMode:n,storageV5:i}){if(!e)return;f().mode=n,SI("--permission-mode",[r],n,void 0,i).catch((o)=>l(o))}async function Bns(e){let n=f(),i=n.mode;if(i===void 0)return;let o=a.CLAUDE_JOB_DIR;if(!o||a.CLAUDE_CODE_SESSION_KIND!=="bg"){n.mode=void 0;return}let t=await eo(o,e);if(!t?.respawnFlags)return;if(!t.respawnFlags.some(s)){n.mode=void 0;return}await SI("--permission-mode",[r],i,void 0,e,void 0,(p)=>p.some(s)),af(o);let d=await eo(o,e);if(d?.respawnFlags&&!d.respawnFlags.some(s))n.mode=void 0}
export{Uns,Bns};
