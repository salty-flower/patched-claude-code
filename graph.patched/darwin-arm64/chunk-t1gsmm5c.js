// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{U}from"./chunk-ersar6wn.js";import{W}from"./chunk-3y73jbfr.js";import{Xst}from"./chunk-m2fgnje1.js";class r{#e=new Set;#n=new Map;lastBellAt=0;claim(e){if(this.#e.has(e))return!1;return this.#e.add(e),!0}has(e){return this.#e.has(e)}claimIfChanged(e,n){if(this.#n.get(e)===n)return!1;return this.#n.set(e,n),!0}}var nK=new W(()=>new r);function qi(){return nK.of(U().host)}import{AsyncLocalStorage as o}from"async_hooks";var que="cron",t=new o;function _or(){return t.getStore()?.workload}function B5o(){return t.getStore()?.scheduledByPlugin}function akt(e){return e?.hookCaller!==void 0&&!e.hookServesModel?e.hookCaller:B5o()}function qsi(){let e=t.getStore();if(e!==void 0)e.scheduledByPlugin=void 0}function Ysi(e,n){return bbn({workload:e,scheduledByPlugin:void 0},n)}function bbn(e,n){return t.run(e,()=>Xst(n))}
export{nK,qi,que,_or,B5o,akt,qsi,Ysi,bbn};
