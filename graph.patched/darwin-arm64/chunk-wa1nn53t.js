// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{z,Qt,q}from"./chunk-yhfssb7x.js";import{h}from"./chunk-jx9d5yeb.js";import{a}from"./chunk-g2ngvza5.js";import{Pc,er,bR}from"./chunk-0xb8rq8q.js";import{rl}from"./chunk-19ykvtp4.js";var r="--inherit-permission-mode";function i(n){return n===r||n.startsWith(`${r}=`)}class u{mode}var l=new z(()=>new u);function m(){return l.of(q().host)}function iqn({inheritPermissionModeCli:n,resolvedMode:t,storageV5:e}){if(!n)return;m().mode=t,bR("--permission-mode",[r],t,void 0,e).catch((o)=>h(o))}async function sqn(n){let t=m(),e=t.mode;if(e===void 0)return;let o=a.CLAUDE_JOB_DIR;if(!o||a.CLAUDE_CODE_SESSION_KIND!=="bg"){t.mode=void 0;return}let p=await er(o,n);if(!p?.respawnFlags)return;if(!p.respawnFlags.some(i)){t.mode=void 0;return}await bR("--permission-mode",[r],e,void 0,n,void 0,(d)=>d.some(i)),Pc(o);let s=await er(o,n);if(s?.respawnFlags&&!s.respawnFlags.some(i))t.mode=void 0}function S(){return rl({value:"",active:!1,launchWarning:null,vimMode:"INSERT",stash:null})}var c=new Qt(()=>S());function LM(n){return c.of(n)}function aqn(n){return LM(n).getState().value}function wue(n,t){n.setState((e)=>{if(e.value===t)return e;if(e.launchWarning!==null&&e.value!==""&&t==="")return{...e,value:t,launchWarning:null};return{...e,value:t}})}function ycn(n,t){n.setState((e)=>e.stash===t?e:{...e,stash:t})}function zpt(n,t){n.setState((e)=>e.active===t?e:{...e,active:t})}function S$t(n,t){zpt(LM(n),t)}function Y4e(n,t){LM(n).setState((e)=>e.vimMode===t?e:{...e,vimMode:t})}function Scn(n,t){n.setState((e)=>e.launchWarning?.type===t.type&&e.launchWarning.prefillLength===t.prefillLength?e:{...e,launchWarning:t})}function bcn(n,t){Scn(LM(n),t)}
export{iqn,sqn,LM,aqn,wue,ycn,zpt,S$t,Y4e,Scn,bcn};
