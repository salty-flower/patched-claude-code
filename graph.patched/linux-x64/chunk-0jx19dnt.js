// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{nt}from"./chunk-2vv5hpw3.js";function qWn(n,e){return n!==void 0&&n.mode==="poll-event"&&n.pollEvent?.wake===!0&&!e}function ban(n){return n==="prompt"||n==="orphaned-permission"||n==="task-notification"||n==="poll-event"}function Ec(n){return n.agentId===nt()}var VWn={kind:"task-notification",source:"goal-checkin"};function KWn(n){return n.origin?.kind==="task-notification"&&n.origin.source==="goal-checkin"}var YWn={kind:"task-notification",source:"worker-checkin"};function mbe(n){return n.origin?.kind==="task-notification"&&(n.origin.source==="goal-checkin"||n.origin.source==="worker-checkin")}function XWn(n){return Ec(n)&&n.mode==="task-notification"}function HB(n){if(n?.kind!=="task-notification")return n;return{kind:"task-notification",...n.subkind!==void 0&&{subkind:n.subkind}}}function M5e(n){let e=n.queueOrigin??n.origin;return mbe({origin:e})?HB(e):e}function JWn(n){return n.queueMode??t(M5e(n))}function t(n){return n?.kind==="task-notification"?"task-notification":"prompt"}import{AsyncLocalStorage as o}from"async_hooks";var WIe="X-CCR-Turn-Id",u=128,d=/^[\x21-\x7e]+$/,r=new o;function QWn(n,e){return r.run({id:n},e)}function O5e(){return r.getStore()?.id}function Rdt(){let n=r.getStore();if(n)n.id=void 0}function qIe(n){let e=O5e();if(e===void 0)return;if(n.some((i)=>i.ccrTurnId!==e))Rdt()}function ZWn(n,{isRelayHuman:e}){if(!e)return;if(typeof n!=="object"||n===null||!("turn_id"in n))return;let i=n.turn_id;if(typeof i!=="string"||i===""||i.length>u||!d.test(i))return;return i}function Ldt(n){if(n.length>0)Rdt()}function e5n(n){let e=n[0]?.ccrTurnId;return n.every((i)=>i.ccrTurnId===e)?e:void 0}
export{qWn,ban,Ec,VWn,KWn,YWn,mbe,XWn,HB,M5e,JWn,WIe,QWn,O5e,Rdt,qIe,ZWn,Ldt,e5n};
