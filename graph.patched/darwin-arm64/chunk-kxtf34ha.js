// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{z}from"./chunk-8mvda08c.js";var Eut=86400000;function MU(e){return e.status==="rejected"&&e.resetsAt!==void 0&&Number.isFinite(e.resetsAt)&&e.isUsingOverage!==!0&&e.overageInUse!==!0}class t{#e=null;get provided(){return this.#e!==null}provide(e){this.#e=e}hasIntent(){return this.#e?.()??!1}}var Icn=new z(()=>new t);
export{Eut,MU,Icn};
