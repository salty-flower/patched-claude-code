// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{F}from"./chunk-r3adsed5.js";import{a}from"./chunk-8c4ttmk8.js";import{i}from"./chunk-5g5ea6r9.js";import{Yh,Zo,BN}from"./chunk-ea1fhjdw.js";import{W}from"./chunk-z1a5ffdv.js";var s="--inherit-permission-mode";function t(e){return e===s||e.startsWith(`${s}=`)}class f{mode}var c=new W(()=>new f);function p(){return c.of(F().host)}function JRi({inheritPermissionModeCli:e,resolvedMode:n,storageV5:r}){if(!e)return;p().mode=n,BN("--permission-mode",[s],n,void 0,r).catch((o)=>a(o))}async function QRi(e){let n=p(),r=n.mode;if(r===void 0)return;let o=i.CLAUDE_JOB_DIR;if(!o||i.CLAUDE_CODE_SESSION_KIND!=="bg"){n.mode=void 0;return}let d=await Zo(o,e);if(!d?.respawnFlags)return;if(!d.respawnFlags.some(t)){n.mode=void 0;return}await BN("--permission-mode",[s],r,void 0,e,void 0,(u)=>u.some(t)),Yh(o);let m=await Zo(o,e);if(m?.respawnFlags&&!m.respawnFlags.some(t))n.mode=void 0}
export{JRi,QRi};
