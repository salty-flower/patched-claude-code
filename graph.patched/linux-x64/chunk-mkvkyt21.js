// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{j}from"./chunk-dxktn51d.js";import{W}from"./chunk-2fbnw5gg.js";class r{#e=new Set;#n=new Map;lastBellAt=0;claim(e){if(this.#e.has(e))return!1;return this.#e.add(e),!0}has(e){return this.#e.has(e)}claimIfChanged(e,n){if(this.#n.get(e)===n)return!1;return this.#n.set(e,n),!0}}var j2=new W(()=>new r);function Xi(){return j2.of(j().host)}import{AsyncLocalStorage as o}from"async_hooks";var ude="cron",t=new o;function nXn(){return t.getStore()?.workload}function xBo(){return t.getStore()?.scheduledByPlugin}function B_t(e){return e?.hookCaller!==void 0&&!e.hookServesModel?e.hookCaller:xBo()}function d6s(){let e=t.getStore();if(e!==void 0)e.scheduledByPlugin=void 0}function c6s(e,n){return ofn({workload:e,scheduledByPlugin:void 0},n)}function ofn(e,n){return t.run(e,n)}
export{j2,Xi,ude,nXn,xBo,B_t,d6s,c6s,ofn};
