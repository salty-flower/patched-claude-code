// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{j}from"./chunk-kpqr86hf.js";import{W}from"./chunk-cne7d53x.js";class r{#e=new Set;#n=new Map;lastBellAt=0;claim(e){if(this.#e.has(e))return!1;return this.#e.add(e),!0}has(e){return this.#e.has(e)}claimIfChanged(e,n){if(this.#n.get(e)===n)return!1;return this.#n.set(e,n),!0}}var Qz=new W(()=>new r);function Xi(){return Qz.of(j().host)}import{AsyncLocalStorage as o}from"async_hooks";var yde="cron",t=new o;function bXn(){return t.getStore()?.workload}function oBo(){return t.getStore()?.scheduledByPlugin}function Y_t(e){return e?.hookCaller!==void 0&&!e.hookServesModel?e.hookCaller:oBo()}function q4s(){let e=t.getStore();if(e!==void 0)e.scheduledByPlugin=void 0}function Y4s(e,n){return bfn({workload:e,scheduledByPlugin:void 0},n)}function bfn(e,n){return t.run(e,n)}
export{Qz,Xi,yde,bXn,oBo,Y_t,q4s,Y4s,bfn};
