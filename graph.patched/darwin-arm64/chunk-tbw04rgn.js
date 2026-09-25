// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{qe}from"./chunk-s8xs8s76.js";import{a2}from"./chunk-wvzb9ebt.js";function uro(e,n){return e!==void 0&&e.mode==="poll-event"&&e.pollEvent?.wake===!0&&!n}function eIn(e){return e==="prompt"||e==="orphaned-permission"||e==="task-notification"||e==="poll-event"}function oc(e){return e.agentId===qe()}var pro={kind:"task-notification",source:"goal-checkin"};function m8t(e){return e.origin?.kind==="task-notification"&&e.origin.source==="goal-checkin"}var fro={kind:"task-notification",source:"worker-checkin"};function UWe(e){return e.origin?.kind==="task-notification"&&(e.origin.source==="goal-checkin"||e.origin.source==="worker-checkin")}function fet(e){return oc(e)&&e.mode==="task-notification"}function PCt(e){let n=e.queueOrigin??e.origin;return UWe({origin:n})?a2(n):n}function upr(e){return e.queueMode??t(PCt(e))}function met(e){return e.queueSkipAttachments===!0||upr(e)==="task-notification"?!0:void 0}function t(e){return e?.kind==="task-notification"?"task-notification":"prompt"}var kue=300000,y3=3600000;import{AsyncLocalStorage as o}from"async_hooks";var get="X-CCR-Turn-Id",u=128,d=/^[\x21-\x7e]+$/,i=new o;function mro(e,n){return i.run({id:e},n)}function ICt(){return i.getStore()?.id}function HCt(){let e=i.getStore();if(e)e.id=void 0}function het(e){let n=ICt();if(n===void 0)return;if(e.some((r)=>r.ccrTurnId!==n))HCt()}function tIn(e,{isRelayHuman:n}){if(!n)return;if(typeof e!=="object"||e===null||!("turn_id"in e))return;let r=e.turn_id;if(typeof r!=="string"||r===""||r.length>u||!d.test(r))return;return r}function OCt(e){if(e.length>0)HCt()}function gro(e){let n=e[0]?.ccrTurnId;return e.every((r)=>r.ccrTurnId===n)?n:void 0}
export{uro,eIn,oc,pro,m8t,fro,UWe,fet,PCt,upr,met,kue,y3,get,mro,ICt,HCt,het,tIn,OCt,gro};
