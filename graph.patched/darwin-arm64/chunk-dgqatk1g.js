// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{F}from"./chunk-ecyypctx.js";import{W}from"./chunk-8915xd28.js";import{a}from"./chunk-87y2sp93.js";import{i}from"./chunk-n1cpnz94.js";import{Zm,xo,MD}from"./chunk-fz08tv6f.js";var s="--inherit-permission-mode";function t(e){return e===s||e.startsWith(`${s}=`)}class f{mode}var c=new W(()=>new f);function p(){return c.of(F().host)}function y4s({inheritPermissionModeCli:e,resolvedMode:n,storageV5:r}){if(!e)return;p().mode=n,MD("--permission-mode",[s],n,void 0,r).catch((o)=>a(o))}async function _4s(e){let n=p(),r=n.mode;if(r===void 0)return;let o=i.CLAUDE_JOB_DIR;if(!o||i.CLAUDE_CODE_SESSION_KIND!=="bg"){n.mode=void 0;return}let d=await xo(o,e);if(!d?.respawnFlags)return;if(!d.respawnFlags.some(t)){n.mode=void 0;return}await MD("--permission-mode",[s],r,void 0,e,void 0,(u)=>u.some(t)),Zm(o);let m=await xo(o,e);if(m?.respawnFlags&&!m.respawnFlags.some(t))n.mode=void 0}
export{y4s,_4s};
