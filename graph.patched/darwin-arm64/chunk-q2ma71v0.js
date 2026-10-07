// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{f0}from"./chunk-y2kbz1zx.js";import{yt}from"./chunk-8mvda08c.js";class Tdt{#e=void 0;#o=!1;provide(e){this.#e=e}canAsk(){return this.#e!==void 0}askOnce({workerEpoch:e,deadlineMs:o}){if(this.#e===void 0||this.#o)return!1;return this.#o=!0,this.#e({subtype:"remote_tools_reannounce",worker_epoch:e,deadline_ms:o},AbortSignal.timeout(o)),!0}}var n=new yt(()=>({toolState:new f0}));function UPo(e,o){n.of(e).toolState=o}
export{Tdt,UPo};
