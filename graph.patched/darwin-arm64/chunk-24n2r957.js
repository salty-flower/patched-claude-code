// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{rt}from"./chunk-g4zaymy2.js";function Z5n(n,e){return n!==void 0&&n.mode==="poll-event"&&n.pollEvent?.wake===!0&&!e}function Can(n){return n==="prompt"||n==="orphaned-permission"||n==="task-notification"||n==="poll-event"}function Tc(n){return n.agentId===rt()}var e9n={kind:"task-notification",source:"goal-checkin"};function t9n(n){return n.origin?.kind==="task-notification"&&n.origin.source==="goal-checkin"}var n9n={kind:"task-notification",source:"worker-checkin"};function b_e(n){return n.origin?.kind==="task-notification"&&(n.origin.source==="goal-checkin"||n.origin.source==="worker-checkin")}function r9n(n){return Tc(n)&&n.mode==="task-notification"}function I2(n){if(n?.kind!=="task-notification")return n;return{kind:"task-notification",...n.subkind!==void 0&&{subkind:n.subkind}}}function N9e(n){let e=n.queueOrigin??n.origin;return b_e({origin:e})?I2(e):e}function o9n(n){return n.queueMode??t(N9e(n))}function t(n){return n?.kind==="task-notification"?"task-notification":"prompt"}import{AsyncLocalStorage as o}from"async_hooks";var GIe="X-CCR-Turn-Id",u=128,d=/^[\x21-\x7e]+$/,r=new o;function i9n(n,e){return r.run({id:n},e)}function F9e(){return r.getStore()?.id}function Hdt(){let n=r.getStore();if(n)n.id=void 0}function VIe(n){let e=F9e();if(e===void 0)return;if(n.some((i)=>i.ccrTurnId!==e))Hdt()}function s9n(n,{isRelayHuman:e}){if(!e)return;if(typeof n!=="object"||n===null||!("turn_id"in n))return;let i=n.turn_id;if(typeof i!=="string"||i===""||i.length>u||!d.test(i))return;return i}function Ddt(n){if(n.length>0)Hdt()}function a9n(n){let e=n[0]?.ccrTurnId;return n.every((i)=>i.ccrTurnId===e)?e:void 0}
export{Z5n,Can,Tc,e9n,t9n,n9n,b_e,r9n,I2,N9e,o9n,GIe,i9n,F9e,Hdt,VIe,s9n,Ddt,a9n};
