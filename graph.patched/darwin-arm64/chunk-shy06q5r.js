// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{X,on,G}from"./chunk-hdbxv3pp.js";import{h}from"./chunk-1mtde6n1.js";import{a}from"./chunk-pv906ex9.js";import{Ac,tr,lR}from"./chunk-xxz7nkzb.js";import{Ja}from"./chunk-he4p48dc.js";var r="--inherit-permission-mode";function i(n){return n===r||n.startsWith(`${r}=`)}class u{mode}var l=new X(()=>new u);function m(){return l.of(G().host)}function zWn({inheritPermissionModeCli:n,resolvedMode:t,storageV5:e}){if(!n)return;m().mode=t,lR("--permission-mode",[r],t,void 0,e).catch((o)=>h(o))}async function VWn(n){let t=m(),e=t.mode;if(e===void 0)return;let o=a.CLAUDE_JOB_DIR;if(!o||a.CLAUDE_CODE_SESSION_KIND!=="bg"){t.mode=void 0;return}let p=await tr(o,n);if(!p?.respawnFlags)return;if(!p.respawnFlags.some(i)){t.mode=void 0;return}await lR("--permission-mode",[r],e,void 0,n,void 0,(d)=>d.some(i)),Ac(o);let s=await tr(o,n);if(s?.respawnFlags&&!s.respawnFlags.some(i))t.mode=void 0}function S(){return Ja({value:"",active:!1,launchWarning:null,vimMode:"INSERT",stash:null})}var c=new on(()=>S());function yM(n){return c.of(n)}function KWn(n){return yM(n).getState().value}function Ace(n,t){n.setState((e)=>{if(e.value===t)return e;if(e.launchWarning!==null&&e.value!==""&&t==="")return{...e,value:t,launchWarning:null};return{...e,value:t}})}function Esn(n,t){n.setState((e)=>e.stash===t?e:{...e,stash:t})}function tdt(n,t){n.setState((e)=>e.active===t?e:{...e,active:t})}function ZNt(n,t){tdt(yM(n),t)}function tqe(n,t){yM(n).setState((e)=>e.vimMode===t?e:{...e,vimMode:t})}function Asn(n,t){n.setState((e)=>e.launchWarning?.type===t.type&&e.launchWarning.prefillLength===t.prefillLength?e:{...e,launchWarning:t})}function Csn(n,t){Asn(yM(n),t)}
export{zWn,VWn,yM,KWn,Ace,Esn,tdt,ZNt,tqe,Asn,Csn};
